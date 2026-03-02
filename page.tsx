export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold" }}>
        Fintech Dashboard
      </h1>

      <p style={{ marginTop: 12, opacity: 0.8 }}>
        Welcome! Your website is successfully running on Next.js.
      </p>

      <div style={{ marginTop: 24 }}>
        <button
          style={{
            padding: "12px 16px",
            background: "#2563eb",
            color: "white",
            borderRadius: 8,
            border: "none",
          }}
        >
          Withdraw
        </button>
      </div>
    </main>
  );
}
