"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={pageStyle}>
      
      {/* TOP NAV */}
      <div style={navStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/logo.png" style={{ width: 42, height: 42, borderRadius: 8 }} />
          <span style={{ fontSize: 22, fontWeight: 700, color: "#3b82f6" }}>
            ElitePay
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <div style={heroContainer}>

        <img
          src="/logo.png"
          style={{
            width: 120,
            height: 120,
            borderRadius: 20,
            background: "white",
            padding: 10,
            boxShadow: "0 0 40px rgba(59,130,246,0.5)"
          }}
        />

        {/* Badge */}
        <div style={badgeStyle}>
          ⚡ India’s Most Trusted Digital Payment Gateway
        </div>

        {/* Heading */}
        <h1 style={headingStyle}>
          Secure & Instant <br />
          <span style={{ color: "#3b82f6" }}>Payment Solutions</span>
        </h1>

        {/* Description */}
        <p style={descStyle}>
          Process payments seamlessly with enterprise-grade infrastructure.
          Lightning-fast UPI transactions powered by advanced security layers
          and 99.99% uptime performance.
        </p>

        {/* Buttons */}
        <div style={{ marginTop: 30 }}>
          <Link href="/signup">
            <button style={primaryBtn}>Get Started</button>
          </Link>

          <Link href="/login">
            <button style={secondaryBtn}>Login</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

/* STYLES */

const pageStyle = {
  minHeight: "100vh",
  background: "radial-gradient(circle at center, #1e3a8a 0%, #0f172a 60%)",
  color: "white",
  fontFamily: "system-ui, sans-serif"
};

const navStyle = {
  padding: "20px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const heroContainer = {
  textAlign: "center",
  padding: "80px 20px",
  maxWidth: 900,
  margin: "auto"
};

const badgeStyle = {
  marginTop: 25,
  display: "inline-block",
  padding: "10px 22px",
  borderRadius: 30,
  background: "rgba(59,130,246,0.15)",
  border: "1px solid rgba(59,130,246,0.4)",
  color: "#60a5fa",
  fontWeight: 500
};

const headingStyle = {
  marginTop: 40,
  fontSize: "52px",
  fontWeight: 800,
  lineHeight: 1.2
};

const descStyle = {
  marginTop: 25,
  fontSize: 18,
  opacity: 0.85,
  maxWidth: 650,
  marginLeft: "auto",
  marginRight: "auto"
};

const primaryBtn = {
  padding: "14px 32px",
  marginRight: 15,
  background: "#3b82f6",
  border: "none",
  borderRadius: 10,
  color: "white",
  fontWeight: 600,
  cursor: "pointer"
};

const secondaryBtn = {
  padding: "14px 32px",
  background: "#334155",
  border: "none",
  borderRadius: 10,
  color: "white",
  fontWeight: 600,
  cursor: "pointer"
};
