"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [icons, setIcons] = useState<{ id: number; left: number; delay: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
    }));
    setIcons(generated);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071225] to-[#0c1f3f] text-white relative overflow-hidden">

      {/* Animated INR Background */}
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
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16 px-6 relative z-10">

        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
          <img src="/logo.png" className="w-40 mx-auto" />
        </div>

        <div className="px-6 py-3 rounded-full border border-blue-500/40 bg-blue-500/10 mb-10">
          <p className="text-blue-400 text-sm flex items-center gap-2">
            ⚡ India's #1 Trusted Payment Gateway
          </p>
        </div>

        <h1 className="text-5xl font-semibold leading-tight">
          Secure & <br /> Instant
        </h1>

        <h1 className="text-5xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Payment <br /> Solutions
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mt-8 leading-relaxed">
          Process payments seamlessly with ElitePay — trusted by 50,000+
          merchants across India. Lightning-fast UPI transactions with 99.99%
          uptime.
        </p>

        {/* Only ONE Button */}
        <div className="mt-12">
          <Link href="/dashboard">
            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 transition text-lg font-semibold shadow-2xl shadow-blue-600/30">
              Start Earning
            </button>
          </Link>
        </div>
      </section>

      {/* TERMS & CONDITIONS */}
      <section className="relative z-10 mt-28 px-6 pb-40 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-400 mb-8">
          Terms & Conditions
        </h2>

        <div className="space-y-6 text-gray-400 leading-relaxed text-sm">

          {Array.from({ length: 40 }).map((_, i) => (
            <p key={i}>
              {i + 1}. By accessing and using ElitePay services, you agree to
              comply with all applicable laws, security standards, verification
              policies, and operational guidelines established by the platform.
              ElitePay reserves the right to suspend, restrict, or terminate any
              account found violating usage terms, regulatory compliance, or
              suspicious transactional behavior.
            </p>
          ))}

        </div>
      </section>

      {/* Animation */}
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
          animation: floatUp 18s linear infinite;
        }
      `}</style>

    </main>
  );
}a
