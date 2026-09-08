import { useEffect, useState } from "react";
import axios from "axios";

import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import HotspotDetails from "./components/HotspotDetails";
import AlertPanel from "./components/AlertPanel";

import "./App.css";

const API = "http://127.0.0.1:8000";

function App() {
  const [hotspots, setHotspots] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    critical: 0,
    industrial_fires: 0,
    wildfires: 0,
  });

  const [selected, setSelected] = useState(null);

  const [filters, setFilters] = useState({
    industrial_fire: true,
    gas_flare: true,
    wildfire: true,
    agricultural_burn: true,
    persistent_source: true,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const hotspotResponse = await axios.get(
          `${API}/api/hotspots`
        );

        const statsResponse = await axios.get(
          `${API}/api/stats`
        );

        setHotspots(hotspotResponse.data);
        setStats(statsResponse.data);
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadData();

    const interval = setInterval(loadData, 30000);

    return () => clearInterval(interval);
  }, []);

  const filteredHotspots = hotspots.filter(
    (hotspot) =>
      filters[hotspot.classification]
  );

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-fire">🔥</div>
        <h1>IGNIS AI</h1>
        <p>Connecting to thermal intelligence...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading">
        <div className="loading-fire">⚠️</div>
        <h1>Backend Offline</h1>
        <p>
          Make sure FastAPI is running on port 8000.
        </p>
      </div>
    );
  }

  return (
    <div className="app">

      <header className="header">

        <div className="brand">
          <div className="brand-icon">🔥</div>

          <div>
            <h1>IGNIS AI</h1>
            <p>
              Intelligent Industrial Fire & Thermal
              Source Classifier
            </p>
          </div>
        </div>

        <div className="live-status">
          <span></span>
          LIVE
          <small>FIRMS Monitoring</small>
        </div>

      </header>

      <Stats stats={stats} />

      <div className="main-layout">

        <Sidebar
          filters={filters}
          setFilters={setFilters}
        />

        <main className="map-container">

          <Map
            hotspots={filteredHotspots}
            onSelect={setSelected}
          />

          <div className="map-label">
            <span className="map-live-dot"></span>
            LIVE THERMAL MONITOR
          </div>

          <AlertPanel hotspot={selected} />

          <HotspotDetails
            hotspot={selected}
            onClose={() => setSelected(null)}
          />

          <div className="legend">
            <strong>SOURCE TYPE</strong>
            <span>🔴 Industrial Fire</span>
            <span>🟠 Gas Flare</span>
            <span>🟢 Wildfire</span>
            <span>🟡 Agricultural Burn</span>
            <span>🔵 Persistent Source</span>
          </div>

        </main>

      </div>
    </div>
  );
}

export default App;