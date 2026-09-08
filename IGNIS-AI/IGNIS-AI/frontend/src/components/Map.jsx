import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function getColor(type) {
  switch (type) {
    case "industrial_fire":
      return "#ef4444";

    case "gas_flare":
      return "#f97316";

    case "wildfire":
      return "#22c55e";

    case "agricultural_burn":
      return "#eab308";

    case "persistent_source":
      return "#3b82f6";

    default:
      return "#94a3b8";
  }
}

function formatType(type) {
  return type
    .replaceAll("_", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Map({ hotspots, onSelect }) {
  return (
    <MapContainer
      center={[26.8, 80]}
      zoom={5}
      className="map"
    >

      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {hotspots.map((hotspot) => {
        const color = getColor(
          hotspot.classification
        );

        return (
          <CircleMarker
            key={hotspot.id}
            center={[
              hotspot.lat,
              hotspot.lon,
            ]}
            radius={
              hotspot.priority === "CRITICAL"
                ? 13
                : 9
            }
            pathOptions={{
              color: color,
              fillColor: color,
              fillOpacity: 0.85,
              weight: 2,
            }}
            eventHandlers={{
              click: () => onSelect(hotspot),
            }}
          >

            <Popup>
              <div>
                <strong>
                  🔥{" "}
                  {formatType(
                    hotspot.classification
                  )}
                </strong>

                <br />

                Confidence:{" "}
                {hotspot.confidence}%

                <br />

                FRP:{" "}
                {hotspot.frp} MW

                <br />

                Priority:{" "}
                {hotspot.priority}
              </div>
            </Popup>

          </CircleMarker>
        );
      })}

    </MapContainer>
  );
}