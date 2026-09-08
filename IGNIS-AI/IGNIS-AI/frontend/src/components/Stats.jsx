export default function Stats({ stats }) {
  return (
    <div className="stats">

      <div className="stat-card">
        <span>Total Hotspots</span>
        <strong>{stats.total}</strong>
      </div>

      <div className="stat-card">
        <span>Critical</span>
        <strong>{stats.critical}</strong>
      </div>

      <div className="stat-card">
        <span>Industrial Fires</span>
        <strong>
          {stats.industrial_fires}
        </strong>
      </div>

      <div className="stat-card">
        <span>Wildfires</span>
        <strong>{stats.wildfires}</strong>
      </div>

    </div>
  );
}