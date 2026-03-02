"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
    <main className="min-h-screen px-4 py-6 text-white">
      {/* NAVBAR */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Image
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold text-blue-400">
            ElitePay
          </span>
        </div>
      </div>

      {/* TOTAL FUNDS */}
      <div className="bg-[#0b1220] rounded-2xl p-6 mb-6 shadow-xl">
        <p className="text-gray-400 text-sm">Total Funds Available</p>
        <h1 className="text-3xl font-bold text-blue-500 mt-2">
          ₹7,76,85,830
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          8,00,00,000+ INR portfolio
        </p>
      </div>

      {/* FUND CARDS */}
      <div className="space-y-5">
        {[
          { name: "Pure Fund", amount: "₹1,14,11,990" },
          { name: "Stock Fund", amount: "₹2,03,78,348" },
          { name: "Political Fund", amount: "₹4,58,95,492" },
        ].map((fund, i) => (
          <div
            key={i}
            className="bg-[#0b1220] rounded-2xl p-5 shadow-lg"
          >
            <p className="text-gray-400">{fund.name}</p>
            <p className="text-xl font-semibold mt-1">{fund.amount}</p>
            <button className="mt-4 w-full border border-blue-500 text-blue-400 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition">
              Withdraw
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
