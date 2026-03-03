"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071426] via-[#0b1f3a] to-[#071426] text-white flex flex-col items-center">

      {/* NAVBAR */}
      <nav className="w-full max-w-6xl flex justify-between items-center p-6">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="ElitePay"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <h2 className="text-2xl font-semibold text-blue-400">ElitePay</h2>
        </div>
      </nav>

      {/* HERO CARD */}
      <div className="w-full max-w-xl bg-[#0f223f]/60 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8 text-center shadow-2xl">

        <img
          src="/logo.jpg"
          alt="ElitePay"
          className="w-28 h-28 mx-auto rounded-2xl shadow-lg mb-6"
        />

        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm mb-6">
          ✨ India's #1 UPI Gateway
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Next-Gen <br />
          <span className="text-blue-400">Secure</span> <br />
          Payment Gateway
        </h1>

        <p className="text-gray-300 mb-8 text-lg">
          Track payments, manage bank accounts & QR codes with
          enterprise-level security. Trusted by 10,000+ merchants across India.
        </p>

        <Link href="/signup">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition text-lg font-semibold shadow-lg">
            Get Started Free →
          </button>
        </Link>

        {/* STATS */}
        <div className="flex justify-between mt-10 text-center text-sm text-gray-300">
          <div>
            <p className="text-xl font-bold text-white">10K+</p>
            <p>Merchants</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">₹8.4Cr</p>
            <p>Processed</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">99.99%</p>
            <p>Uptime</p>
          </div>
        </div>

      </div>

      {/* BOTTOM FEATURES STRIP */}
      <div className="w-full max-w-xl mt-8 bg-[#0f223f]/50 border border-blue-500/20 rounded-xl py-4 px-6 flex justify-between text-sm text-gray-300">
        <span>UPI</span>
        <span>₹ 99.99% Uptime</span>
        <span>256-bit Encryption</span>
      </div>

    </div>
  );
}
