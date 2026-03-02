"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Elite Pay</h1>
        <p style={styles.subtitle}>
          Next-Gen Secure Payment Gateway
        </p>

        <button
          style={styles.primaryBtn}
          onClick={() => router.push("/signup")}
        >
          Get Started
        </button>

        <button
          style={styles.secondaryBtn}
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },
  card: {
    textAlign: "center" as const,
  },
  title: {
    fontSize: "32px",
    color: "#3b82f6",
    marginBottom: "10px",
  },
  subtitle: {
    color: "white",
    marginBottom: "30px",
  },
  primaryBtn: {
    padding: "12px 25px",
    marginRight: "10px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "12px 25px",
    background: "#334155",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
}
