"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WithdrawModal({ show, onClose }: any) {
  const router = useRouter();
  const [showMethod, setShowMethod] = useState(false);

  if (!show) return null;

  return (
    <>
      {/* Withdraw Popup */}
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-[#0b234a] w-96 p-6 rounded-2xl border border-blue-900 shadow-2xl relative">

          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400"
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold mb-6 text-center">
            Withdraw Funds
          </h2>

          <button
            onClick={() => setShowMethod(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Payment Method Popup */}
      {showMethod && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#0b234a] w-96 p-6 rounded-2xl border border-blue-900 shadow-2xl relative">

            <button
              onClick={() => setShowMethod(false)}
              className="absolute right-4 top-4 text-gray-400"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-6 text-center">
              Choose Payment Method
            </h2>

            <div className="space-y-4">

              <div
                onClick={() => router.push("/deposit")}
                className="bg-[#142c55] p-4 rounded-xl border border-blue-800 cursor-pointer hover:bg-[#18376b]"
              >
                <h3 className="font-semibold text-lg">
                  USDT (TRC20)
                </h3>
                <p className="text-sm text-gray-400">
                  Pay via cryptocurrency
                </p>
              </div>

              <div
                onClick={() => router.push("/deposit")}
                className="bg-[#142c55] p-4 rounded-xl border border-blue-800 cursor-pointer hover:bg-[#18376b]"
              >
                <h3 className="font-semibold text-lg">
                  INR (UPI)
                </h3>
                <p className="text-sm text-gray-400">
                  Pay via UPI transfer
                </p>
              </div>

            </div>

          </div>
        </div>
      )}

    </>
  );
}
