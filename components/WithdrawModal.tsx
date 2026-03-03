"use client";

import { useState } from "react";
import PaymentMethodModal from "./PaymentMethodModal";

interface Props {
  show: boolean;
  onClose: () => void;
}

export default function WithdrawModal({ show, onClose }: Props) {
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  if (!show) return null;

  return (
    <>
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
            onClick={() => setShowPaymentMethod(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold"
          >
            Continue
          </button>

        </div>
      </div>

      <PaymentMethodModal
        show={showPaymentMethod}
        onClose={() => setShowPaymentMethod(false)}
      />
    </>
  );
}
