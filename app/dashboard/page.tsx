"use client";

import { ArrowDown, TrendingUp, Landmark, CheckSquare } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071428] via-[#081a33] to-[#050f22] text-white px-4 py-6">

      <div className="max-w-4xl mx-auto">

        {/* TOTAL FUNDS CARD */}
        <div className="bg-[#0c1f3f] rounded-3xl p-8 shadow-2xl border border-blue-900 mb-8 text-center">
          <p className="text-gray-400 text-lg">Total Funds Available</p>
          <h1 className="text-5xl font-bold text-blue-500 mt-4">
            ₹7,76,85,830
          </h1>
          <p className="text-gray-400 mt-2">
            8,00,00,000+ INR portfolio
          </p>
        </div>

        {/* PURE FUND */}
        <FundCard
          title="Pure Fund"
          amount="₹1,14,11,990"
          icon={<Landmark size={28} />}
        />

        {/* STOCK FUND */}
        <FundCard
          title="Stock Fund"
          amount="₹2,03,78,348"
          icon={<TrendingUp size={28} />}
        />

        {/* POLITICAL FUND */}
        <FundCard
          title="Political Fund"
          amount="₹4,58,95,492"
          icon={<CheckSquare size={28} />}
        />

      </div>
    </div>
  );
}

function FundCard({
  title,
  amount,
  icon,
}: {
  title: string;
  amount: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-[#0c1f3f] rounded-3xl p-6 shadow-xl border border-blue-900 mb-6">
      <div className="flex items-center gap-4">
        <div className="bg-[#102a55] p-4 rounded-2xl text-blue-400">
          {icon}
        </div>
        <div>
          <p className="text-gray-400">{title}</p>
          <h2 className="text-3xl font-bold mt-1">{amount}</h2>
        </div>
      </div>

      <button className="mt-6 w-full flex items-center justify-center gap-2 bg-[#102a55] hover:bg-[#163a75] transition py-3 rounded-xl text-blue-400 text-lg">
        <ArrowDown size={18} />
        Withdraw
      </button>
    </div>
  );
}
