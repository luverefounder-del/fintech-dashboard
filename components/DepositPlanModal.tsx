"use client";

interface Props {
  onClose: () => void;
  onSelect: (amount: number) => void;
}

export default function DepositPlanModal({ onClose, onSelect }: Props) {
  const plans = [
    { inr: 5000, usd: 50 },
    { inr: 10000, usd: 100 },
    { inr: 20000, usd: 200 },
  ];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md bg-[#071427] rounded-3xl border border-blue-500/20 shadow-[0_0_60px_rgba(0,120,255,0.25)] p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">
            Choose Deposit Plan
          </h2>
          <button onClick={onClose} className="text-gray-400 text-xl">✕</button>
        </div>

        <div className="space-y-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => onSelect(plan.inr)}
              className="cursor-pointer p-5 rounded-2xl bg-[#0c1f3f] border border-blue-500/20 hover:border-blue-500 transition"
            >
              <h3 className="text-white font-medium">
                Plan {index + 1}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Deposit ${plan.usd} or ₹{plan.inr.toLocaleString()}
              </p>

              <p className="text-blue-400 text-lg font-semibold mt-2">
                ₹{plan.inr.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
