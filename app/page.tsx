"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [icons, setIcons] = useState<{ id: number; left: number; delay: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
    }));
    setIcons(generated);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081225] to-[#0c1f3f] text-white relative overflow-hidden">

      {/* Animated INR Icons */}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute text-blue-500/10 text-4xl animate-float"
          style={{
            left: `${icon.left}%`,
            top: "110%",
            animationDelay: `${icon.delay}s`,
          }}
        >
          ₹
        </div>
      ))}

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-5 relative z-10">
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="w-10 h-10 rounded-md" />
          <h1 className="text-2xl font-semibold text-blue-400">ElitePay</h1>
        </div>

        <div className="flex gap-6 text-blue-400 text-xl">
          <span>👤</span>
          <span>⬛</span>
          <span>↗</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-16 px-6 relative z-10">

        {/* Logo Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
          <img src="/logo.png" className="w-40 mx-auto" />
        </div>

        {/* Badge */}
        <div className="px-6 py-3 rounded-full border border-blue-500/40 bg-blue-500/10 mb-10">
          <p className="text-blue-400 text-sm flex items-center gap-2">
            ⚡ India's #1 Trusted Payment Gateway
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Secure & <br /> Instant
        </h1>

        <h1 className="text-5xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Payment <br /> Solutions
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-xl mt-8 leading-relaxed">
          Process payments seamlessly with ElitePay — trusted by 50,000+
          merchants across India. Lightning-fast UPI transactions with 99.99%
          uptime.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-12">
          <Link href="/dashboard">
            <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-lg shadow-lg shadow-blue-600/30">
              Start Earning
            </button>
          </Link>

          <Link href="/login">
            <button className="px-8 py-4 rounded-xl bg-gray-700 hover:bg-gray-600 transition text-lg">
              Login
            </button>
          </Link>
        </div>

      </div>

      {/* Floating Animation Style */}
      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }

        .animate-float {
          animation: floatUp 12s linear infinite;
        }
      `}</style>

    </main>
  );
}
