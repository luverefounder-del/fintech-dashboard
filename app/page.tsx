"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [icons, setIcons] = useState<
    { id: number; left: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
    }));
    setIcons(generated);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#071225] to-[#0c1f3f] text-white">

      {/* INR Floating Icons */}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute text-blue-500/10 text-4xl animate-bounce"
          style={{
            left: `${icon.left}%`,
            top: `${icon.delay * 5}%`,
          }}
        >
          ₹
        </div>
      ))}

      {/* Navbar */}
      <div className="flex items-center px-6 py-5">
        <img src="/logo.png" className="w-10 h-10 rounded-md mr-3" />
        <h1 className="text-2xl font-semibold text-blue-400">ElitePay</h1>
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center text-center mt-16 px-6">

        <div className="bg-white rounded-3xl p-6 shadow-2xl mb-8">
          <img src="/logo.png" className="w-32 mx-auto" />
        </div>

        <div className="px-6 py-3 rounded-full border border-blue-500/40 bg-blue-500/10 mb-10">
          <p className="text-blue-400 text-sm">
            ⚡ India's #1 Trusted Payment Gateway
          </p>
        </div>

        <h1 className="text-5xl font-semibold leading-tight">
          Secure & Instant
        </h1>

        <h1 className="text-5xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Payment Solutions
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mt-8 leading-relaxed">
          Process payments seamlessly with ElitePay — trusted by 50,000+
          merchants across India. Lightning-fast UPI transactions with 99.99%
          uptime.
        </p>

        {/* Only Start Earning Button */}
        <div className="mt-12">
          <Link href="/dashboard">
            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 transition text-lg font-semibold shadow-xl">
              Start Earning
            </button>
          </Link>
        </div>
      </div>

      {/* Terms */}
      <div className="mt-24 px-6 pb-32 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">
          Terms & Conditions
        </h2>

        <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
          {Array.from({ length: 30 }).map((_, i) => (
            <p key={i}>
              {i + 1}. By accessing this platform, you agree to comply with all
              operational policies, verification procedures, regulatory
              standards, and usage guidelines. The platform reserves full
              authority to restrict or suspend accounts in case of suspicious
              activity, misuse, or policy violations.
            </p>
          ))}
        </div>
      </div>

    </main>
  );
}
