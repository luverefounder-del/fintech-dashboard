"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(savedUser));
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#070f1c] text-white px-4 py-6">
      
      <div className="text-2xl font-semibold mb-2">
        Welcome, <span className="text-blue-400">{user.fullName}</span>
      </div>

      <p className="text-gray-400 mb-6">
        Manage your funds, exchange & withdrawals
      </p>

      {/* Total Funds Card */}
      <div className="bg-[#0d1b2a] rounded-2xl p-6 mb-6 border border-[#1f2c3d]">
        <p className="text-gray-400 mb-2">Total Funds Available</p>
        <h1 className="text-4xl font-bold text-blue-500">
          ₹7,76,85,830
        </h1>
        <p className="text-gray-500 mt-2">
          8,00,00,000+ INR portfolio
        </p>
      </div>

      {/* Fund Cards */}
      {[
        { title: "Pure Fund", amount: "₹1,14,11,990" },
        { title: "Stock Fund", amount: "₹2,03,78,348" },
        { title: "Political Fund", amount: "₹4,58,95,492" },
      ].map((fund, index) => (
        <div
          key={index}
          className="bg-[#0d1b2a] rounded-2xl p-5 mb-5 border border-[#1f2c3d]"
        >
          <h2 className="text-lg text-gray-300 mb-1">{fund.title}</h2>
          <p className="text-2xl font-semibold mb-4">{fund.amount}</p>

          <button
            onClick={() => alert("Deposit packages coming soon")}
            className="w-full border border-blue-500 text-blue-400 py-3 rounded-xl hover:bg-blue-500 hover:text-white transition"
          >
            Withdraw
          </button>
        </div>
      ))}
    </div>
  );
}
