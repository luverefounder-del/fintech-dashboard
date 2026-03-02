"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Landmark, TrendingUp, CheckSquare, User, LayoutGrid, LogOut } from "lucide-react";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="min-h-screen px-4 py-6 text-white bg-gradient-to-b from-[#08101f] to-[#0b1730]">
      
      {/* NAVBAR */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Image
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay"
            width={45}
            height={45}
            className="rounded-full"
          />
          <span className="text-2xl font-semibold text-blue-400">
            ElitePay
          </span>
        </div>

        <div className="flex items-center gap-4 text-blue-400">
          <User size={22} />
          <LayoutGrid size={22} />
          <LogOut size={22} className="cursor-pointer" onClick={()=>{
            localStorage.removeItem("isLoggedIn");
            router.push("/login");
          }}/>
        </div>
      </div>

      {/* TOTAL FUNDS CARD */}
      <div className="bg-[#0c1628] rounded-3xl p-6 mb-8 shadow-[0_0_40px_rgba(0,123,255,0.15)] border border-blue-500/10">
        <p className="text-gray-400 text-sm">Total Funds Available</p>
        <h1 className="text-4xl font-bold text-blue-500 mt-3">
          ₹7,76,85,830
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          8,00,00,000+ INR portfolio
        </p>
      </div>

      {/* FUND CARDS */}
      <div className="space-y-6">
        {[
          { name: "Pure Fund", amount: "₹1,14,11,990", icon: <Landmark size={22}/> },
          { name: "Stock Fund", amount: "₹2,03,78,348", icon: <TrendingUp size={22}/> },
          { name: "Political Fund", amount: "₹4,58,95,492", icon: <CheckSquare size={22}/> },
        ].map((fund, i) => (
          <div
            key={i}
            className="bg-[#0c1628] rounded-3xl p-6 shadow-[0_0_30px_rgba(0,123,255,0.08)] border border-blue-500/10"
          >
            <div className="flex items-center gap-3 text-blue-400 mb-3">
              <div className="bg-blue-500/10 p-3 rounded-xl">
                {fund.icon}
              </div>
              <span className="text-gray-300">{fund.name}</span>
            </div>

            <p className="text-2xl font-semibold">{fund.amount}</p>

            <button className="mt-5 w-full border border-blue-500 text-blue-400 py-3 rounded-2xl hover:bg-blue-500 hover:text-white transition">
              Withdraw
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
