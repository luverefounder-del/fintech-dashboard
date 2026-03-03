"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.wrapper}>
      
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.logoBox}>
          <img src="/logo.jpg" alt="ElitePay" style={styles.logo} />
          <h2 style={styles.brand}>ElitePay</h2>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.badge}>
          ⚡ India's #1 Trusted Payment Gateway
        </div>

        <h1 style={styles.heading}>
          Secure & Instant <br />
          <span style={styles.blue}>Payment Solutions</span>
        </h1>

        <p style={styles.text}>
          Process payments seamlessly with ElitePay — trusted by 50,000+
          merchants across India. Lightning-fast UPI transactions with 99.99% uptime.
        </p>

        <Link href="/signup">
          <button style={styles.button}>Start Earning</button>
        </Link>
      </section>

      {/* TERMS */}
      <section style={styles.terms}>
        <h2 style={styles.termsTitle}>Terms & Conditions</h2>

        <p><b>1. Acceptance of Terms:</b> By accessing ElitePay, you agree to comply with financial regulations and RBI compliance policies.</p>
        <p><b>2. Eligibility:</b> Users must be 18+ and provide valid KYC including PAN, Aadhaar and bank verification.</p>
        <p><b>3. Services:</b> We provide UPI processing, merchant settlements and transaction monitoring services.</p>
        <p><b>4. Compliance:</b> All transactions are monitored under AML and RBI guidelines.</p>
        <p><b>5. Fraud Policy:</b> Suspicious accounts may be frozen without notice.</p>
        <p><b>6. Refund Policy:</b> Settlement timelines depend on banking network policies.</p>
        <p><b>7. Account Responsibility:</b> Users are responsible for protecting their login credentials.</p>
        <p><b>8. Termination:</b> Accounts violating policies may be terminated permanently.</p>
      </section>
    </div>
  );
}

const styles: any = {
  wrapper: {
    background: "linear-gradient(135deg, #0f172a, #0b1b34)",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  nav: {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "45px",
    height: "45px",
    borderRadius: "8px",
  },
  brand: {
    color: "#4f9cff",
  },
  hero: {
    textAlign: "center",
    padding: "60px 20px",
  },
  badge: {
    background: "#1e3a8a",
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: "20px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  blue: {
    color: "#4f9cff",
  },
  text: {
    maxWidth: "600px",
    margin: "0 auto 30px",
    opacity: 0.8,
  },
  button: {
    padding: "12px 30px",
    background: "#4f9cff",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  terms: {
    padding: "60px 20px",
    background: "#0c1424",
    lineHeight: "1.7",
  },
  termsTitle: {
    marginBottom: "20px",
    color: "#4f9cff",
  },
};
