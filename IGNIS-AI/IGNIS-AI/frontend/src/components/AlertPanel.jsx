export default function AlertPanel({
  hotspot,
}) {
  if (!hotspot) return null;

  if (hotspot.priority !== "CRITICAL") {
    return null;
  }

  return (
    <div className="alert-panel">

      <div className="alert-icon">
        🚨
      </div>

      <div>
        <strong>
          CRITICAL DETECTION
        </strong>

        <p>
          High-priority thermal anomaly detected.
        </p>
      </div>

    </div>
  );
}