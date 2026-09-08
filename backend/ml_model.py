import pandas as pd

from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestClassifier


# ============================================================
# DEMO TRAINING DATA
# ============================================================

data = pd.DataFrame(
    [
        # FRP | Brightness | Land Cover | Distance | Persistence | Label

        # Industrial Fire
        [85, 410, "industrial", 0.2, 3, "industrial_fire"],
        [95, 415, "industrial", 0.4, 4, "industrial_fire"],
        [78, 405, "industrial", 0.6, 5, "industrial_fire"],
        [90, 412, "industrial", 0.3, 6, "industrial_fire"],
        [82, 408, "industrial", 0.5, 4, "industrial_fire"],

        # Gas Flare
        [65, 405, "industrial", 0.1, 15, "gas_flare"],
        [70, 410, "industrial", 0.2, 20, "gas_flare"],
        [60, 402, "industrial", 0.3, 18, "gas_flare"],
        [75, 414, "industrial", 0.1, 25, "gas_flare"],
        [68, 407, "industrial", 0.2, 30, "gas_flare"],

        # Wildfire
        [45, 395, "forest", 12.0, 2, "wildfire"],
        [50, 400, "forest", 15.0, 3, "wildfire"],
        [35, 385, "forest", 20.0, 1, "wildfire"],
        [55, 398, "forest", 18.0, 2, "wildfire"],
        [40, 390, "forest", 25.0, 4, "wildfire"],

        # Agricultural Burn
        [20, 375, "cropland", 8.0, 1, "agricultural_burn"],
        [30, 380, "cropland", 10.0, 1, "agricultural_burn"],
        [25, 378, "cropland", 12.0, 2, "agricultural_burn"],
        [35, 385, "cropland", 7.0, 1, "agricultural_burn"],
        [28, 382, "cropland", 15.0, 2, "agricultural_burn"],

        # Persistent Source
        [18, 360, "industrial", 0.2, 30, "persistent_source"],
        [22, 365, "industrial", 0.5, 40, "persistent_source"],
        [15, 355, "industrial", 0.3, 50, "persistent_source"],
        [25, 370, "industrial", 0.4, 35, "persistent_source"],
        [20, 362, "industrial", 0.2, 45, "persistent_source"],
    ],

    # THIS WAS MISSING
    columns=[
        "frp",
        "brightness",
        "land_cover",
        "distance_industry",
        "persistence",
        "label"
    ]
)


# ============================================================
# FEATURES
# ============================================================

FEATURES = [
    "frp",
    "brightness",
    "land_cover",
    "distance_industry",
    "persistence"
]

TARGET = "label"


X = data[FEATURES]
y = data[TARGET]


# ============================================================
# PREPROCESSING
# ============================================================

numeric_features = [
    "frp",
    "brightness",
    "distance_industry",
    "persistence"
]

categorical_features = [
    "land_cover"
]


preprocessor = ColumnTransformer(
    transformers=[
        (
            "numeric",
            "passthrough",
            numeric_features
        ),

        (
            "categorical",
            OneHotEncoder(
                handle_unknown="ignore"
            ),
            categorical_features
        )
    ]
)


# ============================================================
# RANDOM FOREST MODEL
# ============================================================

model = Pipeline(
    steps=[
        (
            "preprocessor",
            preprocessor
        ),

        (
            "classifier",
            RandomForestClassifier(
                n_estimators=200,
                random_state=42,
                class_weight="balanced"
            )
        )
    ]
)


# Train model
model.fit(X, y)


print("====================================")
print("🔥 IGNIS AI MODEL INITIALIZED")
print("====================================")
print("Training samples:", len(data))
print("Classes:", list(model.classes_))
print("Model: Random Forest")
print("====================================")


# ============================================================
# CLASSIFICATION FUNCTION
# ============================================================

def classify_hotspot(
    frp,
    brightness,
    land_cover,
    distance_industry,
    persistence
):

    input_data = pd.DataFrame(
        [
            {
                "frp": frp,
                "brightness": brightness,
                "land_cover": land_cover,
                "distance_industry": distance_industry,
                "persistence": persistence
            }
        ]
    )

    # Prediction
    prediction = model.predict(input_data)[0]

    # Probability
    probabilities = model.predict_proba(input_data)[0]

    confidence = max(probabilities) * 100

    return {
        "classification": prediction,
        "confidence": round(confidence, 2)
    }


# ============================================================
# PRIORITY ENGINE
# ============================================================

def calculate_priority(
    frp,
    confidence,
    distance_industry,
    persistence
):

    score = 0

    # FRP
    if frp >= 70:
        score += 30

    elif frp >= 40:
        score += 20

    else:
        score += 10


    # Distance from industry
    if distance_industry <= 1:
        score += 30

    elif distance_industry <= 5:
        score += 20


    # AI confidence
    if confidence >= 90:
        score += 20

    elif confidence >= 75:
        score += 10


    # Persistence
    if persistence >= 10:
        score += 20

    elif persistence >= 3:
        score += 10


    # Final priority
    if score >= 80:
        return "CRITICAL"

    elif score >= 60:
        return "HIGH"

    elif score >= 40:
        return "MEDIUM"

    else:
        return "LOW"