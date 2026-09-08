# 🔥 IGNIS AI

## Intelligent Industrial Fire & Thermal Source Classifier

<p align="center">

<strong>
AI-powered thermal anomaly classification, risk prioritization and GIS visualization platform
</strong>

</p>

<p align="center">

<img src="https://img.shields.io/badge/AI-Thermal%20Intelligence-orange?style=for-the-badge">

<img src="https://img.shields.io/badge/Python-3.x-blue?style=for-the-badge&logo=python">

<img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi">

<img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react">

<img src="https://img.shields.io/badge/Machine%20Learning-Random%20Forest-green?style=for-the-badge">

<img src="https://img.shields.io/badge/GIS-Leaflet-199900?style=for-the-badge&logo=leaflet">

</p>

---

# 📌 Overview

**IGNIS AI** is an intelligent thermal anomaly classification platform designed to analyze, classify and prioritize thermal hotspots.

The system combines Machine Learning, thermal hotspot features, GIS visualization and risk analysis to help distinguish different types of thermal sources.

Instead of treating every thermal hotspot as an industrial fire, IGNIS AI analyzes multiple contextual features and predicts the probable source category.

### Core Pipeline

```text
Detect
   ↓
Analyze
   ↓
Classify
   ↓
Prioritize
   ↓
Visualize
   ↓
Alert
🎯 Problem Statement

Satellite-based thermal sensors can detect a large number of thermal anomalies.

However, a thermal hotspot does not necessarily represent an industrial fire.

A hotspot may originate from:

🔥 Industrial Fire
🟠 Gas Flare
🟢 Wildfire
🟡 Agricultural Burn
🔵 Persistent Thermal Source

Manually examining large numbers of hotspots can be time-consuming and difficult.

IGNIS AI aims to provide an intelligent system that can automatically analyze these thermal anomalies and prioritize potentially important detections.

💡 Proposed Solution

IGNIS AI uses a Machine Learning pipeline to classify thermal hotspots using multiple features.

The current prototype uses a Random Forest classifier along with feature engineering and contextual information.

Thermal Hotspot
       │
       ▼
Feature Extraction
       │
       ├── FRP
       ├── Brightness
       ├── Land Cover
       ├── Distance from Industry
       └── Persistence
       │
       ▼
Random Forest Classifier
       │
       ▼
Source Classification
       │
       ▼
Confidence
       │
       ▼
Priority Score
       │
       ▼
GIS Dashboard
       │
       ▼
Alert Prioritization
🚀 Key Features
🤖 1. AI-Based Thermal Classification

The system classifies thermal anomalies into multiple source categories.

Category	Description
🔥 Industrial Fire	Thermal anomaly potentially associated with industrial activity
🟠 Gas Flare	Thermal source potentially associated with flaring activity
🟢 Wildfire	Thermal anomaly potentially associated with vegetation or wildfire
🟡 Agricultural Burn	Thermal source potentially associated with agricultural burning
🔵 Persistent Source	Repeated thermal activity detected over time
🗺️ 2. Interactive GIS Map

IGNIS AI provides a map-based visualization of thermal hotspots.

Each hotspot is displayed according to its predicted classification.

The map provides information such as:

📍 Geographic location
🔥 Source classification
📊 Thermal intensity
🏭 Distance from industrial locations
⏱️ Persistence
🚨 Priority level
📊 3. Interactive Dashboard

The dashboard provides a centralized view of thermal anomaly detections.

Dashboard Metrics
┌──────────────────────┐
│    TOTAL HOTSPOTS    │
└──────────────────────┘

┌──────────────────────┐
│       CRITICAL       │
└──────────────────────┘

┌──────────────────────┐
│   INDUSTRIAL FIRES   │
└──────────────────────┘

┌──────────────────────┐
│      WILDFIRES       │
└──────────────────────┘

Users can also filter hotspots based on their classification.

🚨 4. Risk & Priority Analysis

IGNIS AI calculates a priority level for thermal anomalies using multiple factors.

The current analysis considers:

🔥 Fire Radiative Power (FRP)
🌡️ Brightness
🏭 Distance from industrial locations
⏱️ Persistence
🤖 ML classification

Conceptually:

High FRP
   +
High Brightness
   +
Near Industrial Area
   +
High Persistence
   +
Industrial Fire Classification
          │
          ▼
    HIGH PRIORITY
          │
          ▼
       🚨 ALERT
🧠 Machine Learning
Random Forest Classifier

The current prototype uses a Random Forest machine learning model.

The classifier analyzes thermal and contextual features to predict the most probable thermal source category.

Input Features
Feature	Description
frp	Fire Radiative Power / thermal energy intensity
brightness	Thermal brightness measurement
land_cover	Environmental or land-cover context
distance_industry	Distance from nearby industrial areas
persistence	Repeated thermal activity
🧬 ML Pipeline
                 ┌───────────────────────┐
                 │   Thermal Hotspot     │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │  Feature Extraction   │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │   Random Forest ML    │
                 │       Classifier      │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │ Source Classification │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │ Confidence / Result   │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │  Priority Calculation │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │ GIS Dashboard / Alert │
                 └───────────────────────┘
🏗️ System Architecture
                  ┌──────────────────────┐
                  │   Thermal Hotspot    │
                  │        Data          │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │ Feature Engineering  │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │ Random Forest Model  │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │ Classification +     │
                  │ Priority Analysis    │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │       FastAPI        │
                  │       Backend        │
                  └──────────┬───────────┘
                             │
                        REST API
                             │
                             ▼
                  ┌──────────────────────┐
                  │      React UI        │
                  │                      │
                  │ Dashboard + Map +    │
                  │ Alerts + Statistics  │
                  └──────────────────────┘
🛠️ Technology Stack
Frontend
⚛️ React
⚡ Vite
🗺️ React Leaflet
📡 Axios
🎨 CSS
🎯 Lucide React
Backend
🐍 Python
⚡ FastAPI
🚀 Uvicorn
🐼 Pandas
🔢 NumPy
🤖 Scikit-learn
💾 Joblib
Geospatial
🗺️ Leaflet
🌍 GeoPandas
📐 Shapely
Machine Learning
Random Forest
One-Hot Encoding
Feature Engineering
Classification
Confidence Estimation
Priority Scoring
📁 Project Structure
SIH/
│
├── backend/
│   │
│   ├── main.py
│   ├── ml_model.py
│   └── requirements.txt
│
├── IGNIS-AI/
│   │
│   └── IGNIS-AI/
│       │
│       └── frontend/
│           │
│           ├── public/
│           │
│           ├── src/
│           │   ├── assets/
│           │   │
│           │   ├── components/
│           │   │   ├── AlertPanel.jsx
│           │   │   ├── HotspotDetails.jsx
│           │   │   ├── Map.jsx
│           │   │   ├── Sidebar.jsx
│           │   │   └── Stats.jsx
│           │   │
│           │   ├── App.jsx
│           │   ├── App.css
│           │   ├── index.css
│           │   └── main.jsx
│           │
│           ├── package.json
│           ├── package-lock.json
│           ├── vite.config.js
│           └── index.html
│
└── README.md
⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/mayank-1107/IGNIS-AI.git
cd IGNIS-AI
🐍 Backend Setup

Navigate to the backend:

cd backend

Create a Python virtual environment:

python -m venv venv

Activate the environment:

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt
▶️ Run Backend

Start the FastAPI server:

uvicorn main:app --reload

The backend will run at:

http://127.0.0.1:8000

Check the API status:

http://127.0.0.1:8000/

Expected response:

{
  "system": "IGNIS AI",
  "status": "online"
}
⚛️ Frontend Setup

Open a second terminal.

Navigate to the frontend:

cd IGNIS-AI\IGNIS-AI\frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Vite will display the local frontend URL in the terminal.

For example:

http://localhost:5173

If port 5173 is already occupied, Vite may automatically select another available port.

🔌 API Endpoints
Method	Endpoint	Description
GET	/	Check system status
GET	/api/hotspots	Retrieve thermal hotspots
GET	/api/hotspots/{id}	Retrieve a specific hotspot
GET	/api/stats	Retrieve dashboard statistics
POST	/api/classify	Classify a thermal hotspot
📡 Example Classification
Example Input
{
  "frp": 75,
  "brightness": 340,
  "land_cover": "industrial",
  "distance_industry": 2.5,
  "persistence": 4
}
Example Output
{
  "classification": "industrial_fire",
  "confidence": 0.91,
  "priority": "CRITICAL"
}

The values above are illustrative example values. Actual predictions depend on the model and supplied input features.

🖥️ Dashboard Components
🔥 Hotspot Monitoring

Thermal hotspots are displayed directly on the interactive GIS map.

📊 Statistics

The dashboard provides an overview of:

Total hotspots
Critical detections
Industrial fires
Wildfires
🎛️ Classification Filters

Users can filter thermal anomalies by:

Industrial Fire
Gas Flare
Wildfire
Agricultural Burn
Persistent Source
📍 Hotspot Details

Selecting a hotspot provides detailed information such as:

Classification
Confidence
FRP
Brightness
Industry Distance
Persistence
Priority
Risk Reasons
🚨 Alert Prioritization

The system identifies potentially important detections based on their calculated priority.

                 Thermal Hotspot
                        │
                        ▼
               Feature Analysis
                        │
                        ▼
                ML Classification
                        │
                        ▼
                Priority Scoring
                        │
              ┌─────────┴─────────┐
              │                   │
              ▼                   ▼
        Normal Priority      High Priority
                                  │
                                  ▼
                             🚨 Alert
🌍 Future Scope

The current prototype can be extended into a larger thermal intelligence platform.

🛰️ 1. NASA FIRMS Integration

Integrate satellite thermal anomaly feeds to provide continuously updated hotspot data.

Satellite Data
      ↓
Thermal Hotspots
      ↓
IGNIS AI
      ↓
Classification
      ↓
Risk Analysis
      ↓
GIS Dashboard
🏭 2. Industrial Facility Database

Integrate industrial facility locations to improve contextual analysis and determine the proximity of thermal anomalies to industrial sites.

🧠 3. Advanced Machine Learning

Future versions can evaluate additional machine learning approaches such as:

XGBoost
LightGBM
Neural Networks
Spatio-temporal models
Ensemble methods
⏳ 4. Temporal Persistence Tracking

Track thermal activity across multiple observations to identify persistent thermal sources.

Observation 1
      ↓
Observation 2
      ↓
Observation 3
      ↓
Persistent Source
🚨 5. Automated Alerting

Future versions can provide automated alerts through:

Email
SMS
Web notifications
Emergency dashboards
📱 6. Mobile Application

A mobile application could allow field teams to receive alerts and investigate high-priority thermal anomalies.

🎯 Potential Use Cases
🏭 Industrial Safety

Identify potentially hazardous thermal activity near industrial facilities.

🌲 Wildfire Monitoring

Detect and classify thermal anomalies associated with wildfire activity.

🌾 Agricultural Monitoring

Distinguish agricultural burning from other thermal sources.

🛢️ Oil & Gas Monitoring

Identify potential gas flare activity.

🚨 Emergency Response

Prioritize high-risk thermal anomalies to support faster investigation and response.

🛰️ Remote Sensing

Convert thermal observations into actionable information through automated classification and visualization.

📈 Project Vision

IGNIS AI aims to transform thermal monitoring from:

Raw Thermal Data
       ↓
Manual Analysis
       ↓
Manual Decision

into:

Thermal Data
      ↓
AI Analysis
      ↓
Classification
      ↓
Risk Scoring
      ↓
GIS Visualization
      ↓
Smart Alerts
      ↓
Faster Response
🔐 Security

Sensitive credentials must never be committed to GitHub.

Use environment variables for API keys and other secrets.

Example:

NASA_FIRMS_API_KEY=your_api_key

Store credentials in:

.env

Make sure .env is included in .gitignore.

Never place API keys directly inside source code.

🧪 Development
Start Backend
cd backend
venv\Scripts\activate
uvicorn main:app --reload
Start Frontend

Open another terminal:

cd IGNIS-AI\IGNIS-AI\frontend
npm run dev
🤝 Contributing

Contributions and suggestions are welcome.

Basic workflow
git checkout -b feature/new-feature

Make your changes and then:

git add .
git commit -m "Add new feature"
git push origin feature/new-feature

Create a Pull Request on GitHub.

👨‍💻 Project
IGNIS AI

Developed as a Smart India Hackathon (SIH) prototype focused on AI-assisted thermal anomaly classification, industrial fire intelligence and GIS-based visualization.

📜 License

This project is intended for educational, research and prototype development purposes.

⭐ Support

If you find IGNIS AI useful:

⭐ Star the repository

🍴 Fork the project

🐛 Report issues

💡 Suggest improvements

🔥 IGNIS AI
See the heat. Understand the source. Prioritize the risk.
