"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f172a,#1e293b,#0f172a)",
      color: "white",
      fontFamily: "sans-serif"
    }}>

      {/* HERO SECTION */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        maxWidth: 1100,
        margin: "auto"
      }}>
        <img src="/logo.png" style={{ width: 120, marginBottom: 20 }} />

        <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.2 }}>
          Enterprise Grade <span style={{ color: "#3b82f6" }}>Digital</span><br />
          Payment Platform
        </h1>

        <p style={{
          maxWidth: 650,
          margin: "20px auto",
          opacity: 0.8,
          fontSize: 18
        }}>
          Securely manage digital transactions, fund transfers and account operations
          with advanced compliance and encrypted infrastructure.
        </p>

        <div style={{ marginTop: 30 }}>
          <button
            onClick={() => router.push("/signup")}
            style={primaryBtn}
          >
            Get Started
          </button>

          <button
            onClick={() => router.push("/login")}
            style={secondaryBtn}
          >
            Login
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Platform Highlights</h2>

        <div style={gridStyle}>
          <Feature title="Secure Infrastructure"
            desc="256-bit encryption with enterprise level data protection." />

          <Feature title="Fast Processing"
            desc="Optimized transaction flow with minimal latency." />

          <Feature title="Compliance Ready"
            desc="Designed with regulatory standards and monitoring systems." />

          <Feature title="Affiliate Program"
            desc="Performance-based commission model with transparent structure." />
        </div>
      </section>

      {/* TERMS & CONDITIONS */}
      <section style={{ ...sectionStyle, background: "#111827" }}>
        <h2 style={sectionTitle}>Terms & Conditions</h2>

        <div style={{ maxWidth: 900, margin: "auto", lineHeight: 1.9, opacity: 0.9 }}>

          <Term title="1. Account Registration">
            Users must provide accurate and verifiable information while creating an account.
            False information may result in account suspension.
          </Term>

          <Term title="2. Platform Usage">
            The platform may only be used for lawful digital transaction and fund management activities.
          </Term>

          <Term title="3. Commission Structure">
            Commission, if applicable, is based on predefined performance metrics.
            All earnings are subject to compliance review and approval.
          </Term>

          <Term title="4. Risk Disclosure">
            Users acknowledge potential operational risks related to digital transactions.
          </Term>

          <Term title="5. Withdrawal Policy">
            Withdrawal requests are subject to internal verification and processing timelines.
          </Term>

          <Term title="6. Privacy & Data Protection">
            User data is encrypted and stored securely. We do not sell personal data.
          </Term>

          <Term title="7. Limitation of Liability">
            The company is not responsible for indirect losses due to network or third-party failures.
          </Term>

          <Term title="8. Policy Updates">
            The company reserves the right to update policies at any time.
          </Term>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: 40,
        opacity: 0.6
      }}>
        © {new Date().getFullYear()} ElitePay. All rights reserved.
      </footer>

    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div style={{
      background: "#1e293b",
      padding: 25,
      borderRadius: 15
    }}>
      <h3 style={{ marginBottom: 10 }}>{title}</h3>
      <p style={{ opacity: 0.8 }}>{desc}</p>
    </div>
  );
}

function Term({ title, children }) {
  return (
    <div style={{ marginBottom: 25 }}>
      <h3 style={{ fontWeight: 600, marginBottom: 8 }}>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

const primaryBtn = {
  padding: "14px 30px",
  marginRight: 15,
  background: "#3b82f6",
  border: "none",
  borderRadius: 10,
  color: "white",
  fontWeight: 600,
  cursor: "pointer"
};

const secondaryBtn = {
  padding: "14px 30px",
  background: "#334155",
  border: "none",
  borderRadius: 10,
  color: "white",
  fontWeight: 600,
  cursor: "pointer"
};

const sectionStyle = {
  padding: "80px 20px"
};

const sectionTitle = {
  textAlign: "center",
  fontSize: 32,
  marginBottom: 40,
  fontWeight: 700
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: 25,
  maxWidth: 1000,
  margin: "auto"
};1
