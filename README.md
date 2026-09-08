# 🔥 IGNIS AI

### Intelligent Industrial Fire & Thermal Source Classifier

<p align="center">
  <strong>AI-powered thermal anomaly detection, classification and risk prioritization system</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/AI-Thermal%20Intelligence-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Python-3.x-blue?style=for-the-badge&logo=python" />
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi" />
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Machine%20Learning-Random%20Forest-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Leaflet-GIS-199900?style=for-the-badge&logo=leaflet" />
</p>

---

## 🌋 Overview

**IGNIS AI** is an intelligent thermal anomaly classification and industrial fire monitoring platform designed to identify, classify and prioritize thermal hotspots.

The system combines:

- 🛰️ Satellite thermal hotspot data
- 🤖 Machine Learning
- 🗺️ GIS-based visualization
- 📊 Risk and priority analysis
- 🚨 Alert generation
- 🔥 Industrial fire classification

Instead of treating every thermal hotspot as a fire, IGNIS AI analyzes multiple contextual features to determine the **probable source of the thermal anomaly**.

---

## 🎯 Problem

Satellite-based thermal sensors can detect thousands of hotspots.

However, a thermal hotspot does **not necessarily mean an industrial fire**.

A detected hotspot could be:

```text
🔥 Industrial Fire
🔥 Wildfire
🔥 Gas Flare
🌾 Agricultural Burn
🔵 Persistent Thermal Source

Manually analyzing these hotspots can be slow and difficult, especially when large geographic regions are involved.

IGNIS AI aims to solve this problem by:

Detect → Analyze → Classify → Prioritize → Visualize → Alert

🚀 Key Features
🤖 AI-Based Classification

IGNIS AI uses a Random Forest Machine Learning model to classify detected thermal anomalies.

Current classification categories:

Classification	Description
🔥 Industrial Fire	Thermal anomaly potentially associated with industrial activity
🟠 Gas Flare	Thermal source associated with gas/flaring activity
🟢 Wildfire	Thermal anomaly potentially caused by vegetation/fire
🟡 Agricultural Burn	Thermal source associated with agricultural burning
🔵 Persistent Source	Repeated thermal source detected over time
🗺️ Interactive GIS Map

The frontend provides an interactive map for visualizing thermal hotspots.

Each hotspot is represented using a classification-specific marker.

The map provides:

📍 Geographic location
🔥 Source classification
📊 Thermal intensity
🏭 Distance from industrial areas
⏱️ Persistence information
🚨 Priority level
📊 Real-Time Dashboard

The dashboard provides a quick overview of the detected thermal environment.

Current dashboard statistics
Total Hotspots
       ↓
Critical Hotspots
       ↓
Industrial Fires
       ↓
Wildfires

This allows users to understand the situation without manually inspecting every hotspot.

🚨 Risk & Priority Scoring

IGNIS AI calculates a priority score for every detected hotspot.

The system considers factors such as:

🔥 Fire Radiative Power (FRP)
🌡️ Brightness
🏭 Distance from industrial locations
⏱️ Persistence
🤖 ML classification

Higher-risk detections receive higher priority.

🧠 Machine Learning Pipeline

The current ML pipeline follows:

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
Confidence Score
       │
       ▼
Priority Calculation
       │
       ▼
Alert / Visualization
🧬 Features Used

The classifier currently uses the following features:

Feature	Purpose
frp	Indicates thermal energy intensity
brightness	Represents thermal brightness
land_cover	Provides environmental context
distance_industry	Measures proximity to industrial locations
persistence	Indicates repeated thermal activity
🏗️ System Architecture
                 ┌──────────────────────┐
                 │   Satellite Data     │
                 │   / Thermal Sources  │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │ Feature Engineering  │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │   Random Forest ML   │
                 │      Classifier      │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │ Classification +    │
                 │ Confidence + Risk    │
                 └──────────┬───────────┘
                            │
                            ▼
        ┌────────────────────────────────────┐
        │             FastAPI                │
        │              Backend               │
        └────────────────┬───────────────────┘
                         │
                         │ REST API
                         ▼
        ┌────────────────────────────────────┐
        │             React UI               │
        │                                    │
        │  Dashboard + Map + Alerts + Stats │
        └────────────────────────────────────┘
🛠️ Technology Stack
Frontend
⚛️ React
⚡ Vite
🗺️ React Leaflet
🎨 CSS
📡 Axios
🎯 Lucide React
Backend
🐍 Python
⚡ FastAPI
🚀 Uvicorn
🐼 Pandas
🔢 NumPy
🤖 Scikit-learn
💾 Joblib
GIS / Geospatial
🗺️ Leaflet
🌍 GeoPandas
📐 Shapely
🛰️ Satellite thermal data integration
Machine Learning
Random Forest
One-Hot Encoding
Feature Engineering
Classification
Confidence estimation
Priority scoring
📁 Project Structure
SIH/
│
├── backend/
│   ├── main.py
│   ├── ml_model.py
│   └── requirements.txt
│
├── IGNIS-AI/
│   └── IGNIS-AI/
│       └── frontend/
│           ├── public/
│           ├── src/
│           │   ├── assets/
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
⚙️ Installation
1️⃣ Clone the Repository
git clone https://github.com/mayank-1107/IGNIS-AI.git
cd IGNIS-AI
🐍 Backend Setup

Navigate to the backend:

cd backend

Create a virtual environment:

Windows
python -m venv venv

Activate it:

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt
▶️ Run Backend

Start the FastAPI server:

uvicorn main:app --reload

Backend will be available at:

http://127.0.0.1:8000
API Status

Open:

http://127.0.0.1:8000/

Expected response:

{
  "system": "IGNIS AI",
  "status": "online"
}
⚛️ Frontend Setup

Open another terminal.

Navigate to:

cd IGNIS-AI\IGNIS-AI\frontend

Install dependencies:

npm install

Start the development server:

npm run dev

The frontend will normally be available at:

http://localhost:5173

Vite may automatically select another available port if 5173 is already occupied.

🔌 API Endpoints
Method	Endpoint	Description
GET	/	Check system status
GET	/api/hotspots	Get all detected hotspots
GET	/api/hotspots/{id}	Get a specific hotspot
GET	/api/stats	Get dashboard statistics
POST	/api/classify	Classify a thermal hotspot
📡 Example Hotspot

Example input:

{
  "frp": 75,
  "brightness": 340,
  "land_cover": "industrial",
  "distance_industry": 2.5,
  "persistence": 4
}

Possible output:

{
  "classification": "industrial_fire",
  "confidence": 0.91,
  "priority": "CRITICAL"
}
🚨 Alert Logic

IGNIS AI prioritizes thermal anomalies based on their characteristics.

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
🖥️ Dashboard

The IGNIS AI dashboard provides:

🔥 Thermal Hotspot Monitoring

View detected hotspots directly on the map.

📊 Statistics

Monitor:

Total hotspots
Critical detections
Industrial fires
Wildfires
🎛️ Classification Filters

Users can filter hotspots based on:

Industrial Fire
Gas Flare
Wildfire
Agricultural Burn
Persistent Source
📍 Hotspot Details

Selecting a hotspot displays detailed information including:

Classification
Confidence
FRP
Brightness
Industry Distance
Persistence
Priority
Risk Reasons
🌍 Future Scope

IGNIS AI is designed to evolve into a complete large-scale thermal intelligence platform.

🛰️ 1. NASA FIRMS Integration

Integrate live satellite thermal anomaly feeds for continuously updated hotspot detection.

🗺️ 2. Industrial Facility Database

Integrate industrial facility locations to improve contextual classification.

🧠 3. Advanced ML Models

Future versions can evaluate:

XGBoost
LightGBM
Neural Networks
Spatio-temporal models
Ensemble approaches
⏳ 4. Temporal Persistence Tracking

Track the same thermal source across multiple satellite observations.

Observation 1
      ↓
Observation 2
      ↓
Observation 3
      ↓
Persistent Thermal Source
🚨 5. Automated Alerting

Future alerts can be delivered through:

Email
SMS
Web notifications
Emergency dashboards
📱 6. Mobile Application

A dedicated mobile interface can allow field teams to receive and investigate alerts.

🎯 Use Cases

IGNIS AI can support:

🏭 Industrial Safety

Identify potentially hazardous thermal activity near industrial facilities.

🌲 Forest & Wildfire Monitoring

Detect and classify thermal anomalies associated with wildfires.

🌾 Agricultural Monitoring

Distinguish agricultural burning from other thermal sources.

🛢️ Oil & Gas Monitoring

Identify potential gas flare activity.

🚨 Emergency Response

Prioritize high-risk thermal anomalies for faster investigation.

🛰️ Remote Sensing

Transform satellite thermal observations into actionable intelligence.

📈 Project Vision

IGNIS AI aims to move thermal monitoring from:

Raw Satellite Data
        ↓
     Human Analysis
        ↓
    Manual Decision

to:

Satellite Data
      ↓
  AI Analysis
      ↓
 Classification
      ↓
 Risk Scoring
      ↓
  GIS Mapping
      ↓
 Smart Alerts
      ↓
 Faster Response
🔐 Security & Configuration

Sensitive credentials should never be committed to GitHub.

Use environment variables:

.env

Example:

NASA_FIRMS_API_KEY=your_api_key

Keep .env inside .gitignore.

Never expose API keys directly in source code.

🧪 Development

Backend:

cd backend
venv\Scripts\activate
uvicorn main:app --reload

Frontend:

cd IGNIS-AI\IGNIS-AI\frontend
npm run dev
🤝 Contribution

Contributions are welcome.

Steps
Fork the repository
Create a feature branch
git checkout -b feature/new-feature
Make your changes
Commit
git add .
git commit -m "Add new feature"
Push
git push origin feature/new-feature
Create a Pull Request
👨‍💻 Team
IGNIS AI

Developed as an SIH prototype focused on AI-assisted thermal anomaly classification and industrial fire intelligence.

📜 License

This project is intended for educational, research and prototype development purposes.

⭐ Support

If you find this project useful:

⭐ Star the repository

🍴 Fork the project

🐛 Report issues

💡 Suggest improvements

<p align="center">
🔥 IGNIS AI

See the heat. Understand the source. Prioritize the risk.

</p> <p align="center"> <strong>🛰️ Detect • 🤖 Classify • 🗺️ Visualize • 🚨 Respond</strong> </p> ```
🔥 Ek important kaam

Tumhare backend me abhi requirements.txt shayad nahi hai. GitHub clone karne wale ko backend install karne ke liye ye file chahiye.

backend folder ke andar requirements.txt banao:

fastapi
uvicorn
pandas
numpy
scikit-learn
joblib
requests
geopandas
shapely

Phir root SIH terminal me:

git add .
git commit -m "Add professional README"
git push
