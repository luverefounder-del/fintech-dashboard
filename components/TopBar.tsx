export default function TopBar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px",
      background: "#0b0f19",
      borderBottom: "1px solid #1f2937"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/logo.jpg"
          alt="logo"
          style={{ width: 40, height: 40, borderRadius: 8 }}
        />
        <h2 style={{ color: "#3b82f6", margin: 0 }}>ElitePay</h2>
      </div>

      <div style={{ color: "#fff" }}>👤</div>
    </div>
  );
}
