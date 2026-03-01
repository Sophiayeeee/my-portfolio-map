import ClientMap from "./components/ClientMap";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
        My Portfolio Map
      </h1>
      <ClientMap />
    </main>
  );
}