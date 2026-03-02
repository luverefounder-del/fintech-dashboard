
"use client";

import Image from "next/image";

export default function Dashboard() {
  return (
    <div style={styles.wrapper}>
      
      {/* NAVBAR */}
      <div style={styles.nav}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay"
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          <span style={styles.brand}>ElitePay</span>
        </div>
      </div>

      <div style={styles.container}>
        
        {/* TOTAL FUNDS */}
        <div style={styles.totalCard}>
          <p style={{ opacity: 0.7 }}>Total Funds Available</p>
          <h1 style={styles.totalAmount}>₹7,76,85,830</h1>
          <p style={{ opacity: 0.6 }}>8,00,00,000+ INR portfolio</p>
        </div>

        {/* FUND CARDS */}
        {funds.map((fund, index) => (
          <div key={index} style={styles.card}>
            <div>
              <p style={{ opacity: 0.7 }}>{fund.title}</p>
              <h2>{fund.amount}</h2>
            </div>

            <button style={styles.withdrawBtn}>
              Withdraw
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

const funds = [
  { title: "Pure Fund", amount: "₹1,14,11,990" },
  { title: "Stock Fund", amount: "₹2,03,78,348" },
  { title: "Political Fund", amount: "₹4,58,95,492" },
];

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
    color: "white",
    fontFamily: "system-ui"
  },

  nav: {
    padding: "20px 40px"
  },

  brand: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#3b82f6"
  },

  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 20px"
  },

  totalCard: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "16px",
    marginBottom: "30px"
  },

  totalAmount: {
    fontSize: "40px",
    color: "#3b82f6"
  },

  card: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "16px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  withdrawBtn: {
    padding: "12px 30px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  }
};
