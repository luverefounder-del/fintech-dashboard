"use client";

import { useState } from "react";

export default function WithdrawModal({ show, onClose }: any) {
  const [showDeposit, setShowDeposit] = useState(false);

  if (!show) return null;

  return (
    <>
      {/* Withdraw Popup */}
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-[#0c1628] w-[90%] max-w-md p-6 rounded-2xl border border-blue-900/40 relative">

          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-gray-400"
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold text-center mb-6">
            Choose Payment Method
          </h2>

          <div className="space-y-4">
            <div
              onClick={() => setShowDeposit(true)}
              className="bg-[#111c34] p-4 rounded-xl border border-blue-900/40 cursor-pointer hover:bg-blue-900/20 transition"
            >
              <h3 className="font-semibold">USDT (TRC20)</h3>
              <p className="text-gray-400 text-sm">Pay via cryptocurrency</p>
            </div>

            <div
              onClick={() => setShowDeposit(true)}
              className="bg-[#111c34] p-4 rounded-xl border border-blue-900/40 cursor-pointer hover:bg-blue-900/20 transition"
            >
              <h3 className="font-semibold">INR (UPI)</h3>
              <p className="text-gray-400 text-sm">Pay via UPI transfer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Packages Modal */}
      {showDeposit && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#0c1628] w-[90%] max-w-md p-6 rounded-2xl border border-blue-900/40 relative">

            <button
              onClick={() => setShowDeposit(false)}
              className="absolute right-4 top-3 text-gray-400"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-center mb-6">
              Select Deposit Package
            </h2>

            <div className="space-y-4">

              {["₹5,000", "₹10,000", "₹20,000"].map((amount, i) => (
                <div
                  key={i}
                  className="bg-[#111c34] p-4 rounded-xl border border-blue-900/40 hover:bg-blue-900/20 transition cursor-pointer"
                >
                  <h3 className="text-lg font-semibold">{amount}</h3>
                </div>
              ))}

            </div>
          </div>
        </div>
      )}
    </>
  );
}
