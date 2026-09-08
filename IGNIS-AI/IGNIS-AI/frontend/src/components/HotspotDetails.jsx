function formatType(type) {
  return type
    .replaceAll("_", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function HotspotDetails({
  hotspot,
  onClose,
}) {
  if (!hotspot) {
    return (
      <div className="details empty">
        <div className="empty-icon">🎯</div>

        <h2>Select a Hotspot</h2>

        <p>
          Click any thermal anomaly on the map
          to inspect its AI classification.
        </p>
      </div>
    );
  }

  return (
    <div className="details">

      <button
        className="close"
        onClick={onClose}
      >
        ×
      </button>

      <div className="details-title">

        <span className="fire-icon">
          🔥
        </span>

        <div>
          <p className="eyebrow">
            AI CLASSIFICATION
          </p>

          <h2>
            {formatType(
              hotspot.classification
            )}
          </h2>
        </div>

      </div>

      <div className="confidence-box">
        <span>AI Confidence</span>

        <strong>
          {hotspot.confidence}%
        </strong>
      </div>

      <div className="detail-grid">

        <div>
          <span>FRP</span>
          <strong>
            {hotspot.frp} MW
          </strong>
        </div>

        <div>
          <span>Brightness</span>
          <strong>
            {hotspot.brightness} K
          </strong>
        </div>

        <div>
          <span>Industry Distance</span>
          <strong>
            {hotspot.distance_industry} km
          </strong>
        </div>

        <div>
          <span>Persistence</span>
          <strong>
            {hotspot.persistence}
          </strong>
        </div>

      </div>

      <div className="priority">
        <span>Priority</span>

        <strong
          className={
            hotspot.priority.toLowerCase()
          }
        >
          {hotspot.priority}
        </strong>
      </div>

      <hr />

      <h3>
        Why this classification?
      </h3>

      {hotspot.distance_industry < 1 && (
        <p className="reason">
          ✓ Near industrial infrastructure
        </p>
      )}

      {hotspot.frp >= 50 && (
        <p className="reason">
          ✓ High Fire Radiative Power
        </p>
      )}

      {hotspot.persistence >= 3 && (
        <p className="reason">
          ✓ Repeated thermal detection
        </p>
      )}

      <button className="alert-button">
        🚨 SEND PRIORITY ALERT
      </button>

    </div>
  );
}