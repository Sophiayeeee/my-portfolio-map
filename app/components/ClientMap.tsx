"use client";

import dynamic from "next/dynamic";
import projects from "../../public/data/projects.json";

// ✅ dynamic + ssr:false 只能放在 Client Component 里（Next 16）
const MapView = dynamic(() => import("./MapView"), { ssr: false });

export default function ClientMap() {
  return <MapView projects={projects as any} />;
}