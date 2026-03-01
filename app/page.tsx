import ClientMap from "./components/ClientMap";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1
        style={{
          fontSize: 32,
          fontWeight: 600,
          letterSpacing: "0.02em",
          marginBottom: 24,
        }}
      >
        The Sophiaverse
      </h1>

      <ClientMap />
    </main>
  );
}