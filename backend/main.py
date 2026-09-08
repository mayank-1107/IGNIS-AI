from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from ml_model import (
    classify_hotspot,
    calculate_priority
)


app = FastAPI(
    title="IGNIS AI API",
    description="Intelligent Industrial Fire & Thermal Source Classifier",
    version="1.0.0"
)


# --------------------------------------------------
# CORS
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# DEMO HOTSPOT DATA
# --------------------------------------------------

hotspots = [

    {
        "id": 1,
        "lat": 28.6139,
        "lon": 77.2090,
        "frp": 87.4,
        "brightness": 412,
        "land_cover": "industrial",
        "distance_industry": 0.3,
        "persistence": 4
    },

    {
        "id": 2,
        "lat": 27.1767,
        "lon": 78.0081,
        "frp": 25.2,
        "brightness": 380,
        "land_cover": "cropland",
        "distance_industry": 8.2,
        "persistence": 1
    },

    {
        "id": 3,
        "lat": 28.4595,
        "lon": 77.0266,
        "frp": 65.8,
        "brightness": 405,
        "land_cover": "industrial",
        "distance_industry": 0.1,
        "persistence": 15
    },

    {
        "id": 4,
        "lat": 26.8467,
        "lon": 80.9462,
        "frp": 42.1,
        "brightness": 392,
        "land_cover": "forest",
        "distance_industry": 19.4,
        "persistence": 2
    },

    {
        "id": 5,
        "lat": 25.5941,
        "lon": 85.1376,
        "frp": 20.5,
        "brightness": 370,
        "land_cover": "cropland",
        "distance_industry": 11.5,
        "persistence": 1
    },

    {
        "id": 6,
        "lat": 23.2599,
        "lon": 77.4126,
        "frp": 73.5,
        "brightness": 409,
        "land_cover": "industrial",
        "distance_industry": 0.8,
        "persistence": 6
    },

    {
        "id": 7,
        "lat": 22.5726,
        "lon": 88.3639,
        "frp": 17.8,
        "brightness": 358,
        "land_cover": "industrial",
        "distance_industry": 0.4,
        "persistence": 25
    }

]


# --------------------------------------------------
# RUN AI CLASSIFICATION
# --------------------------------------------------

def enrich_hotspot(hotspot):

    result = classify_hotspot(
        hotspot["frp"],
        hotspot["brightness"],
        hotspot["land_cover"],
        hotspot["distance_industry"],
        hotspot["persistence"]
    )

    confidence = result["confidence"]

    priority = calculate_priority(
        hotspot["frp"],
        confidence,
        hotspot["distance_industry"],
        hotspot["persistence"]
    )

    return {
        **hotspot,
        "classification": result["classification"],
        "confidence": confidence,
        "priority": priority
    }


classified_hotspots = [
    enrich_hotspot(h)
    for h in hotspots
]


# --------------------------------------------------
# ROOT
# --------------------------------------------------

@app.get("/")
def root():

    return {
        "system": "IGNIS AI",
        "status": "online"
    }


# --------------------------------------------------
# GET ALL HOTSPOTS
# --------------------------------------------------

@app.get("/api/hotspots")
def get_hotspots():

    return classified_hotspots


# --------------------------------------------------
# GET ONE HOTSPOT
# --------------------------------------------------

@app.get("/api/hotspots/{hotspot_id}")
def get_hotspot(hotspot_id: int):

    for hotspot in classified_hotspots:

        if hotspot["id"] == hotspot_id:
            return hotspot

    return {
        "error": "Hotspot not found"
    }


# --------------------------------------------------
# STATISTICS
# --------------------------------------------------

@app.get("/api/stats")
def get_stats():

    total = len(classified_hotspots)

    critical = sum(
        1
        for h in classified_hotspots
        if h["priority"] == "CRITICAL"
    )

    industrial = sum(
        1
        for h in classified_hotspots
        if h["classification"] == "industrial_fire"
    )

    wildfire = sum(
        1
        for h in classified_hotspots
        if h["classification"] == "wildfire"
    )

    return {
        "total": total,
        "critical": critical,
        "industrial_fires": industrial,
        "wildfires": wildfire
    }


# --------------------------------------------------
# CLASSIFY CUSTOM HOTSPOT
# --------------------------------------------------

@app.post("/api/classify")
def classify(data: dict):

    result = classify_hotspot(
        data["frp"],
        data["brightness"],
        data["land_cover"],
        data["distance_industry"],
        data["persistence"]
    )

    priority = calculate_priority(
        data["frp"],
        result["confidence"],
        data["distance_industry"],
        data["persistence"]
    )

    return {
        **result,
        "priority": priority
    }