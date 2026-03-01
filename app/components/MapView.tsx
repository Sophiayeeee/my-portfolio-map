"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// ✅ 用 leaflet 的命名空间导入，更兼容 TS
import * as L from "leaflet";

// ✅ 修复默认 marker 不显示问题（Next 常见坑）
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
(L.Marker.prototype as any).options.icon = DefaultIcon;

type Project = {
  id: string;
  title: string;
  lat: number;
  lng: number;
  city?: string;
};

export default function MapView({ projects }: { projects: Project[] }) {
  const center: [number, number] = [53.4084, -2.9916]; // Liverpool

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <MapContainer center={center} zoom={5} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {projects.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]}>
            <Popup>
              <div>
                <strong>{p.title}</strong>
                <div>{p.city}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}