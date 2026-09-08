export default function Sidebar({
  filters,
  setFilters,
}) {
  const types = [
    {
      key: "industrial_fire",
      label: "Industrial Fire",
      icon: "🔴",
    },
    {
      key: "gas_flare",
      label: "Gas Flare",
      icon: "🟠",
    },
    {
      key: "wildfire",
      label: "Wildfire",
      icon: "🟢",
    },
    {
      key: "agricultural_burn",
      label: "Agricultural Burn",
      icon: "🟡",
    },
    {
      key: "persistent_source",
      label: "Persistent Source",
      icon: "🔵",
    },
  ];

  const toggle = (key) => {
    setFilters({
      ...filters,
      [key]: !filters[key],
    });
  };

  return (
    <aside className="sidebar">

      <h2>Detection Filters</h2>

      <p className="muted">
        Thermal anomaly classification
      </p>

      <div className="filter-list">

        {types.map((type) => (
          <label
            className="filter"
            key={type.key}
          >
            <input
              type="checkbox"
              checked={filters[type.key]}
              onChange={() =>
                toggle(type.key)
              }
            />

            <span>
              {type.icon} {type.label}
            </span>
          </label>
        ))}

      </div>

      <div className="sidebar-divider" />

      <h3>System Status</h3>

      <div className="status">
        <span className="status-dot"></span>
        FIRMS Data Feed
        <b>ONLINE</b>
      </div>

      <div className="status">
        <span className="status-dot"></span>
        AI Classifier
        <b>ONLINE</b>
      </div>

      <div className="status">
        <span className="status-dot"></span>
        GIS Engine
        <b>ONLINE</b>
      </div>

      <div className="sidebar-divider" />

      <h3>Data Sources</h3>

      <p className="source">🛰️ NASA FIRMS</p>
      <p className="source">🗺️ OpenStreetMap</p>
      <p className="source">🌍 Satellite Land Cover</p>

    </aside>
  );
}