"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.wrapper}>
      
      {/* NAVBAR */}
      <div style={styles.nav}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay"
            width={44}
            height={44}
            style={{ borderRadius: "50%" }}
          />
          <span style={styles.brand}>ElitePay</span>
        </div>
      </div>

      {/* HERO */}
      <section style={styles.hero}>

        <div style={styles.logoCircle}>
          <Image
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay"
            width={180}
            height={180}
            style={{ borderRadius: "50%" }}
          />
        </div>

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

        <div style={{ marginTop: 50 }}>
          <Link href="/signup">
            <button style={styles.primaryBtn}>Get Started</button>
          </Link>
        </div>

      </section>

      {/* TERMS SECTION */}
      <section style={styles.termsSection}>
        <h2 style={styles.termsHeading}>Terms & Conditions</h2>

        <div style={styles.termsContent}>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing ElitePay, users agree to comply with all applicable laws,
            regulations, and financial compliance standards governing digital transactions.
          </p>

          <h3>2. Account Responsibility</h3>
          <p>
            Users are responsible for safeguarding login credentials and ensuring
            authorized usage of their accounts. ElitePay is not liable for losses
            arising from negligence in account security.
          </p>

          <h3>3. Compliance & Verification</h3>
          <p>
            Certain features may require identity verification (KYC) and regulatory
            compliance checks before activation.
          </p>

          <h3>4. Transaction Monitoring</h3>
          <p>
            All transactions are subject to automated fraud detection and compliance
            monitoring to maintain secure processing standards.
          </p>

          <h3>5. Risk Disclosure</h3>
          <p>
            Digital payment processing involves operational and network risks.
            Service delays may occur due to banking network limitations.
          </p>

          <h3>6. Service Availability</h3>
          <p>
            ElitePay maintains high uptime standards; however, temporary service
            interruptions may occur during maintenance or unforeseen events.
          </p>

          <h3>7. Prohibited Activities</h3>
          <p>
            Fraudulent activity, misuse of banking systems, or unauthorized fund routing
            is strictly prohibited and may result in termination and legal reporting.
          </p>

          <h3>8. Limitation of Liability</h3>
          <p>
            ElitePay shall not be liable for indirect or consequential damages
            resulting from platform usage.
          </p>

          <h3>9. Policy Updates</h3>
          <p>
            Terms may be updated periodically. Continued use of the platform
            indicates acceptance of revised terms.
          </p>

          <h3>10. Governing Law</h3>
          <p>
            These terms are governed by applicable digital commerce and financial
            regulations under the operating jurisdiction.
          </p>

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
    padding: "20px 40px"
  },

  brand: {
    fontSize: "22px",
    fontWeight: "700",
    background: "linear-gradient(90deg,#3b82f6,#60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  hero: {
    textAlign: "center" as const,
    padding: "80px 20px",
    maxWidth: "900px",
    margin: "auto"
  },

  logoCircle: {
    marginBottom: "30px"
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
    padding: "18px 60px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "14px",
    color: "white",
    fontWeight: "700",
    fontSize: "18px",
    cursor: "pointer"
  },

  termsSection: {
    marginTop: "120px",
    padding: "80px 20px",
    background: "#0f172a",
    borderTop: "1px solid rgba(255,255,255,0.1)"
  },

  termsHeading: {
    fontSize: "34px",
    fontWeight: "700",
    marginBottom: "50px",
    textAlign: "center" as const
  },

  termsContent: {
    maxWidth: "900px",
    margin: "0 auto",
    fontSize: "15px",
    lineHeight: "1.9",
    opacity: 0.85
  }
};
