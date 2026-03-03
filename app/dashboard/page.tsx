"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Landmark, TrendingUp, CheckSquare, User, LayoutGrid, LogOut, Download } from "lucide-react";
import WithdrawModal from "../../components/WithdrawModal";

export default function Dashboard() {
  const router = useRouter();
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="min-h-screen px-4 py-6 text-white bg-gradient-to-b from-[#071c3b] to-[#04162e]">

      {/* NAVBAR */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
            <span className="font-bold text-lg">EP</span>
          </div>
          <span className="text-2xl font-semibold text-blue-400">
            ElitePay
          </span>
        </div>

        <div className="flex items-center gap-5 text-blue-400">
          <User size={22} />
          <LayoutGrid size={22} />
          <LogOut
            size={22}
            className="cursor-pointer"
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              router.push("/login");
            }}
          />
        </div>
      </div>

      {/* TOTAL FUNDS */}
      <div className="bg-[#0c1628] rounded-3xl p-6 mb-8 shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-blue-900/40">
        <p className="text-gray-400 text-sm">Total Funds Available</p>
        <h1 className="text-4xl font-bold text-blue-500 mt-3 tracking-wide">
          ₹7,59,39,895
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          8,00,00,000+ INR portfolio
        </p>
      </div>

      {/* FUND CARDS */}
      <div className="space-y-6">

        {[
          {
            name: "Pure Fund",
            amount: "₹1,23,31,961",
            icon: <Landmark size={22} />,
            iconBg: "bg-blue-500/15",
            iconColor: "text-blue-400"
          },
          {
            name: "Stock Fund",
            amount: "₹2,30,04,512",
            icon: <TrendingUp size={22} />,
            iconBg: "bg-green-500/15",
            iconColor: "text-green-400"
          },
          {
            name: "Political Fund",
            amount: "₹4,06,03,422",
            icon: <CheckSquare size={22} />,
            iconBg: "bg-yellow-500/15",
            iconColor: "text-yellow-400"
          },
        ].map((fund, i) => (
          <div
            key={i}
            className="bg-[#0c1628] rounded-3xl p-6 border border-blue-900/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl ${fund.iconBg}`}>
                <div className={fund.iconColor}>
                  {fund.icon}
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm">{fund.name}</p>
                <p className="text-2xl font-semibold">{fund.amount}</p>
              </div>
            </div>

            <button
              onClick={() => setShowWithdrawModal(true)}
              className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-blue-600 text-blue-400 hover:bg-blue-600/10 transition"
            >
              <Download size={18} />
              Withdraw
            </button>
          </div>
        ))}

      </div>

      {/* MODAL */}
      <WithdrawModal
        show={showWithdrawModal}
        onClose={() => setShowWithdrawModal(false)}
      />

    </main>
  );
}
