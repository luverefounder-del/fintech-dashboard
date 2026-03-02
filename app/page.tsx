"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f172a,#1e293b)",
      color: "white",
      fontFamily: "sans-serif"
    }}>

      {/* HERO */}
      <div style={{
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "42px",
          fontWeight: "800",
          lineHeight: "1.2"
        }}>
          Next-Gen <span style={{ color: "#3b82f6" }}>Secure</span><br/>
          Payment Platform
        </h1>

        <p style={{
          marginTop: "20px",
          opacity: "0.8",
          fontSize: "18px"
        }}>
          Secure digital transactions with enterprise-level protection.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link href="/signup">
            <button style={primaryBtn}>
              Get Started
            </button>
          </Link>

          <Link href="/login">
            <button style={secondaryBtn}>
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* TERMS SECTION */}
      <div style={{
        background: "#111827",
        padding: "60px 20px"
      }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "30px",
            fontWeight: "700"
          }}>
            Terms & Conditions
          </h2>

          <p style={termStyle}>
            1. Users must provide accurate information while registering.
          </p>

          <p style={termStyle}>
            2. All transactions are subject to compliance and monitoring.
          </p>

          <p style={termStyle}>
            3. Processing timelines may vary depending on verification status.
          </p>

          <p style={termStyle}>
            4. Platform reserves the right to suspend suspicious accounts.
          </p>

          <p style={termStyle}>
            5. Data is protected using secure encryption standards.
          </p>

          <p style={termStyle}>
            6. Users agree to all policies before using services.
          </p>
        </div>
      </div>

    </div>
  );
}

const primaryBtn = {
  padding: "14px 28px",
  marginRight: "15px",
  background: "#3b82f6",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontWeight: "600",
  cursor: "pointer"
};

const secondaryBtn = {
  padding: "14px 28px",
  background: "#334155",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontWeight: "600",
  cursor: "pointer"
};

const termStyle = {
  marginBottom: "15px",
  opacity: "0.85",
  lineHeight: "1.6"
};
