"use client";

import { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import DashboardCard from "../components/DashboardCard";
import WithdrawModal from "../components/WithdrawModal";
import PaymentMethodModal from "../components/PaymentMethodModal";

export default function Home() {
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div
      style={{
        background: "#0b0f19",
        minHeight: "100vh",
        paddingBottom: 40,
        fontFamily: "Arial, Helvetica, sans-serif"
      }}
    >
      <TopBar />

      <div style={{ padding: "20px" }}>
        <h2 style={{ color: "#fff", fontWeight: 600 }}>
          Welcome, {userName}
        </h2>

        <p style={{ color: "#9ca3af" }}>
          Manage your funds, exchange & withdrawals
        </p>

        <div style={{ marginTop: 30 }}>
          <DashboardCard
            title="Pure Fund"
            amount="1,14,11,990"
            onWithdraw={() => setShowWithdraw(true)}
          />

          <DashboardCard
            title="Stock Fund"
            amount="2,03,78,348"
            onWithdraw={() => setShowWithdraw(true)}
          />

          <DashboardCard
            title="Political Fund"
            amount="4,58,95,492"
            onWithdraw={() => setShowWithdraw(true)}
          />
        </div>
      </div>

      {showWithdraw && (
        <WithdrawModal
          onClose={() => setShowWithdraw(false)}
          onSelectPlan={() => {
            setShowWithdraw(false);
            setShowPayment(true);
          }}
        />
      )}

      {showPayment && (
        <PaymentMethodModal
          onClose={() => setShowPayment(false)}
        />
      )}
    </div>
  );
}
