"use client";

import { useEffect, useState } from "react";
import WithdrawModal from "@/components/WithdrawModal";

export default function Dashboard() {
  const [authReady, setAuthReady] = useState(false);
  const [userName, setUserName] = useState("");
  const [showWithdraw, setShowWithdraw] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("isLoggedIn");

    if (logged !== "true") {
      window.location.replace("/login");
      return;
    }

    const name = localStorage.getItem("userName");
    setUserName(name || "User");
    setAuthReady(true);
  }, []);

  if (!authReady) return null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#060f1f] text-white px-6 py-6">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 mb-6">
        <h1 className="text-2xl font-semibold tracking-wide">
          Welcome,{" "}
          <span className="text-[#4f8cff]">{userName}</span>
        </h1>
        <p className="text-gray-400 mt-1 text-sm">
          Manage your funds, exchange & withdrawals
        </p>
      </div>

      {/* Total Funds Card */}
      <div className="relative z-10 bg-gradient-to-br from-[#0d1c33] to-[#091626] 
        backdrop-blur-xl border border-white/10 
        rounded-3xl p-6 mb-8 shadow-[0_0_60px_rgba(0,0,0,0.4)]">

        <p className="text-gray-400 text-sm">
          Total Funds Available
        </p>

        <h1 className="text-4xl font-bold text-[#4f8cff] mt-3 tracking-wide">
          ₹7,76,85,830
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          8,00,00,000+ INR portfolio
        </p>
      </div>

      {/* Fund Cards */}
      <div className="relative z-10 space-y-6">

        {[
          { name: "Pure Fund", amount: "₹1,14,11,990" },
          { name: "Stock Fund", amount: "₹2,03,78,348" },
          { name: "Political Fund", amount: "₹4,58,95,492" },
        ].map((fund, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#0d1c33] to-[#091626]
            backdrop-blur-xl border border-white/10
            rounded-3xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
          >
            <p className="text-gray-400 text-sm mb-2 tracking-wide">
              {fund.name}
            </p>

            <p className="text-2xl font-semibold mb-5 text-white tracking-wide">
              {fund.amount}
            </p>

            <button
              onClick={() => setShowWithdraw(true)}
              className="w-full py-3 rounded-2xl 
              border border-[#4f8cff] 
              text-[#4f8cff] 
              hover:bg-[#4f8cff]/10 
              transition duration-300"
            >
              Withdraw
            </button>
          </div>
        ))}

      </div>

      <WithdrawModal
        show={showWithdraw}
        onClose={() => setShowWithdraw(false)}
      />

    </div>
  );
        }
