"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f172a,#1e293b)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      textAlign: "center"
    }}>
      
      <img src="/logo.png" style={{ width: 120, marginBottom: 20 }} />

      <h1 style={{ fontSize: 38, fontWeight: 700 }}>
        Next-Gen <span style={{ color: "#3b82f6" }}>Secure</span><br/>
        Payment Gateway
      </h1>

      <p style={{ maxWidth: 400, opacity: 0.8, marginTop: 10 }}>
        Track payments, manage bank accounts & QR codes with enterprise-level security.
      </p>

      <div style={{ marginTop: 30, display: "flex", gap: 15 }}>
        <button
          onClick={() => router.push("/signup")}
          style={{
            padding: "14px 30px",
            background: "#3b82f6",
            borderRadius: 10,
            border: "none",
            color: "white",
            fontWeight: 600,
            cursor: "pointer"
          }}>
          Get Started Free
        </button>

        <button
          onClick={() => router.push("/login")}
          style={{
            padding: "14px 30px",
            background: "#334155",
            borderRadius: 10,
            border: "none",
            color: "white",
            fontWeight: 600,
            cursor: "pointer"
          }}>
          Login
        </button>
      </div>
    </div>
  );
}
