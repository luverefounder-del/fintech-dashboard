"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #071428, #0a1f3d)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px 20px"
    }}>

      {/* Navbar */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center"
      }}>
        <img
          src="/logo.jpg"
          alt="ElitePay"
          style={{ width: 45, height: 45, borderRadius: 8 }}
        />
        <h1 style={{
          marginLeft: 12,
          fontSize: 26,
          fontWeight: "bold",
          color: "#4da3ff"
        }}>
          ElitePay
        </h1>
      </div>

      {/* Hero Section */}
      <div style={{
        maxWidth: "900px",
        margin: "80px auto",
        textAlign: "center"
      }}>

        <div style={{
          display: "inline-block",
          padding: "8px 20px",
          borderRadius: 50,
          border: "1px solid #2b6cb0",
          background: "rgba(43,108,176,0.2)",
          color: "#4da3ff",
          marginBottom: 30
        }}>
          India's #1 Trusted Payment Gateway
        </div>

        <h2 style={{
          fontSize: 48,
          fontWeight: "bold",
          lineHeight: 1.2
        }}>
          Secure & Instant <br />
          <span style={{ color: "#4da3ff" }}>
            Payment Solutions
          </span>
        </h2>

        <p style={{
          marginTop: 30,
          color: "#cbd5e1",
          fontSize: 18
        }}>
          Process payments seamlessly with ElitePay — trusted by 50,000+ merchants across India.
          Lightning-fast UPI transactions with 99.99% uptime.
        </p>

        <button
          onClick={() => router.push("/signup")}
          style={{
            marginTop: 40,
            padding: "14px 35px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Start Earning
        </button>
      </div>

      {/* Terms Section */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        marginTop: 100
      }}>

        <h3 style={{
          fontSize: 34,
          fontWeight: "bold",
          color: "#4da3ff",
          marginBottom: 30,
          textAlign: "center"
        }}>
          Terms & Conditions
        </h3>

        <div style={{
          color: "#cbd5e1",
          lineHeight: 1.8,
          fontSize: 15
        }}>

          <p><b>1. Acceptance:</b> By accessing ElitePay, you agree to comply with all applicable financial laws and platform policies.</p>
          <p><b>2. Eligibility:</b> Users must be 18+ and provide valid KYC including PAN, Aadhaar and verified banking details.</p>
          <p><b>3. Services:</b> ElitePay provides digital payment gateway services including UPI processing and merchant settlements.</p>
          <p><b>4. Compliance:</b> All transactions are subject to RBI regulations and financial monitoring.</p>
          <p><b>5. Fraud Policy:</b> Suspicious or illegal activity may result in account suspension.</p>
          <p><b>6. Processing:</b> Settlement time depends on banking network availability.</p>
          <p><b>7. Account Security:</b> Users are responsible for protecting login credentials.</p>
          <p><b>8. Liability:</b> ElitePay is not liable for indirect losses caused by network failures.</p>
          <p><b>9. Modifications:</b> Platform policies may change without prior notice.</p>
          <p><b>10. Jurisdiction:</b> All disputes fall under Indian jurisdiction.</p>

        </div>
      </div>

    </div>
  );
}
