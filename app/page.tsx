"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.wrapper}>
      
      {/* NAVBAR */}
      <div style={styles.nav}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image 
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay Logo"
            width={40}
            height={40}
          />
          <span style={styles.brand}>ElitePay</span>
        </div>
      </div>

      {/* HERO */}
      <section style={styles.hero}>

        {/* BIG ROUNDED LOGO */}
        <div style={styles.logoCard}>
          <Image
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay"
            width={160}
            height={160}
            style={{ borderRadius: "30px" }}
          />
        </div>

        {/* Badge */}
        <div style={styles.badge}>
          India's #1 Trusted Payment Gateway
        </div>

        <h1 style={styles.heading}>
          Secure & Instant <br />
          <span style={{ color: "#3b82f6" }}>Payment Solutions</span>
        </h1>

        <p style={styles.description}>
          Process payments seamlessly with ElitePay trusted by 50,000+ merchants across India.
          Lightning-fast UPI transactions with 99.99% uptime.
        </p>

        <div style={{ marginTop: 30 }}>
          <Link href="/signup">
            <button style={styles.primaryBtn}>Get Started</button>
          </Link>

          <Link href="/login">
            <button style={styles.secondaryBtn}>Login</button>
          </Link>
        </div>

      </section>

    </main>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
    color: "white",
    fontFamily: "system-ui, sans-serif"
  },

  nav: {
    padding: "20px 40px",
    display: "flex",
    alignItems: "center"
  },

  brand: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#3b82f6"
  },

  hero: {
    textAlign: "center" as const,
    padding: "80px 20px",
    maxWidth: "900px",
    margin: "auto"
  },

  logoCard: {
    background: "#ffffff",
    display: "inline-block",
    padding: "20px",
    borderRadius: "35px",
    marginBottom: "25px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
  },

  badge: {
    display: "inline-block",
    padding: "10px 20px",
    borderRadius: "30px",
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.4)",
    color: "#60a5fa",
    fontWeight: "500",
    marginBottom: "30px"
  },

  heading: {
    fontSize: "52px",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "25px"
  },

  description: {
    fontSize: "18px",
    opacity: "0.85",
    lineHeight: "1.6",
    maxWidth: "650px",
    margin: "0 auto"
  },

  primaryBtn: {
    padding: "14px 32px",
    marginRight: "15px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  },

  secondaryBtn: {
    padding: "14px 32px",
    background: "#334155",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  }
};
