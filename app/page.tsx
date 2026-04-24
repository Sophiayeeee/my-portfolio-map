import ClientMap from "./components/ClientMap";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 32,
        backgroundImage: `
          linear-gradient(
            rgba(18, 10, 40, 0.35),
            rgba(18, 10, 40, 0.55)
          ),
          url("/images/sophiaverse-bg.png")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <section
        style={{
          marginBottom: 24,
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: "0.01em",
            marginBottom: 8,
          }}
        >
          The Sophiaverse
        </h1>

        <p
          style={{
            fontSize: 15,
            opacity: 0.85,
            margin: 0,
          }}
        >
          A little universe of architectural worlds designed by Sophia.
        </p>
      </section>

      <section
        style={{
          borderRadius: 24,
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.28)",
          background: "rgba(255, 255, 255, 0.04)",
        }}
      >
        <ClientMap />
      </section>
    </main>
  );
}