"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0b1120",
      color: "white",
      padding: "40px",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        ElitePay
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Secure & Instant Payment Solutions
      </p>

      <button
        onClick={() => router.push("/login")}
        style={{
          padding: "12px 24px",
          background: "#2563eb",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Start Earning
      </button>

      <div style={{ marginTop: "50px" }}>
        <h2>Terms & Conditions</h2>
        <ul style={{ marginTop: "10px", lineHeight: "1.8" }}>
          <li>All accounts subject to KYC verification.</li>
          <li>Users must provide accurate details.</li>
          <li>Fraud activity may result in suspension.</li>
          <li>Processing time depends on banking network.</li>
        </ul>
      </div>
    </div>
  );
}
