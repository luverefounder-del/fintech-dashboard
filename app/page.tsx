export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#0b0f19",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        ELITE PAY
      </h1>

      <p style={{ opacity: 0.7 }}>
        Secure Digital Payment Platform
      </p>

      <div style={{ marginTop: "30px", display: "flex", gap: "16px" }}>
        <button style={btn}>Login</button>
        <button style={btn}>Register</button>
      </div>
    </main>
  );
}

const btn = {
  padding: "12px 24px",
  backgroundColor: "#2563eb",
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer"
};
