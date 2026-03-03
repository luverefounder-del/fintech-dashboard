"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth === "true") {
      const name = localStorage.getItem("userName");
      setUserName(name || "User");
      setLoading(false);
    } else {
      window.location.href = "/login";
    }
  }, []);

  if (loading) return null;

  return (
    <div className="min-h-screen bg-[#060f1f] text-white px-6 py-6">

      <h1 className="text-2xl font-semibold">
        Welcome,{" "}
        <span className="text-[#4f8cff]">{userName}</span>
      </h1>

      <p className="text-gray-400 mt-1 mb-8">
        Manage your funds, exchange & withdrawals
      </p>

      <div className="bg-gradient-to-br from-[#0d1c33] to-[#091626]
        rounded-3xl p-6 border border-white/10">

        <p className="text-gray-400 text-sm">
          Total Funds Available
        </p>

        <h1 className="text-4xl font-bold text-[#4f8cff] mt-3">
          ₹7,76,85,830
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          8,00,00,000+ INR portfolio
        </p>
      </div>

    </div>
  );
}w
