"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userName, setUserName] = useState("");
  const [ready, setReady] = useState(false);
  const [showPackage, setShowPackage] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const logged = cookies.find((c) =>
      c.startsWith("isLoggedIn=")
    );

    if (!logged) {
      window.location.href = "/login";
      return;
    }

    const nameCookie = cookies.find((c) =>
      c.startsWith("userName=")
    );

    if (nameCookie) {
      setUserName(decodeURIComponent(nameCookie.split("=")[1]));
    }

    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-[#060f1f] text-white px-6 py-6">

      {/* TOTAL FUNDS */}
      <div className="bg-gradient-to-br from-[#0d1c33] to-[#091626]
        rounded-3xl p-6 mb-8 border border-white/10">

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

      {/* FUNDS */}
      {[
        { name: "Pure Fund", amount: "₹1,14,11,990" },
        { name: "Stock Fund", amount: "₹2,03,78,348" },
        { name: "Political Fund", amount: "₹4,58,95,492" },
      ].map((fund, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-[#0d1c33] to-[#091626]
          rounded-3xl p-6 mb-6 border border-white/10"
        >
          <p className="text-gray-400 text-sm mb-2">
            {fund.name}
          </p>

          <p className="text-2xl font-semibold mb-5">
            {fund.amount}
          </p>

          <button
            onClick={() => setShowPackage(true)}
            className="w-full py-3 rounded-2xl
            border border-[#4f8cff]
            text-[#4f8cff]
            hover:bg-[#4f8cff]/10 transition"
          >
            Withdraw
          </button>
        </div>
      ))}

      {/* PACKAGE MODAL */}
      {showPackage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#0d1c33] p-6 rounded-2xl w-[90%] max-w-md">
            <h2 className="text-center text-lg mb-6">
              Select Deposit Package
            </h2>

            {["₹5,000", "₹10,000", "₹20,000"].map((p, i) => (
              <div
                key={i}
                onClick={() => {
                  setShowPackage(false);
                  setShowPayment(true);
                }}
                className="bg-[#091626] p-4 mb-4 rounded-xl text-center cursor-pointer hover:bg-[#4f8cff]/10"
              >
                {p}
              </div>
            ))}

            <button
              onClick={() => setShowPackage(false)}
              className="text-gray-400 text-sm w-full mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* PAYMENT MODAL */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#0d1c33] p-6 rounded-2xl w-[90%] max-w-md">
            <h2 className="text-center text-lg mb-6">
              Select Payment Method
            </h2>

            <div className="bg-[#091626] p-4 mb-4 rounded-xl text-center cursor-pointer hover:bg-[#4f8cff]/10">
              UPI Transfer
            </div>

            <div className="bg-[#091626] p-4 mb-4 rounded-xl text-center cursor-pointer hover:bg-[#4f8cff]/10">
              USDT (TRC20)
            </div>

            <button
              onClick={() => setShowPayment(false)}
              className="text-gray-400 text-sm w-full mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
