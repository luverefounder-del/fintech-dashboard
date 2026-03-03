"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./components/Loader";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-[#071c3b] text-white overflow-hidden">

      {loading && <Loader />}

      {/* INR Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="rupee rupee1">₹</div>
        <div className="rupee rupee2">₹</div>
        <div className="rupee rupee3">₹</div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-blue-900 relative z-10">
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpg?v=1"
            alt="ElitePay Logo"
            className="w-10 h-10 rounded-md object-cover"
          />
          <span className="text-blue-400 font-semibold text-lg">
            ElitePay
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center px-6 pt-16">
        <div className="bg-white p-6 rounded-2xl inline-block shadow-xl">
          <img
            src="/logo.jpg?v=1"
            alt="ElitePay"
            className="w-44 h-44 rounded-xl object-cover"
          />
        </div>

        <div className="mt-6 px-6 py-2 border border-blue-500 rounded-full text-blue-400 inline-block">
          ⚡ India's #1 Trusted Payment Gateway
        </div>

        <h1 className="mt-8 text-4xl font-bold">
          Secure & Instant <br />
          <span className="text-blue-500">Payment Solutions</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          Process payments seamlessly with enterprise-grade security,
          lightning-fast UPI infrastructure and reliable performance.
          Trusted by thousands of merchants across India.
        </p>

        <button
          onClick={handleStart}
          className="mt-8 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-semibold shadow-lg transition"
        >
          Start Earning
        </button>
      </section>

      {/* Terms & Conditions */}
      <section className="relative z-10 mt-20 px-6 pb-16 max-w-4xl mx-auto">
        <div className="bg-[#0b234a] p-8 rounded-2xl border border-blue-900 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Terms & Conditions
          </h3>

          <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <li>• All accounts are subject to compliance verification and KYC validation.</li>
            <li>• Users must provide accurate identity and contact information.</li>
            <li>• Any suspicious or fraudulent activity may result in suspension.</li>
            <li>• Transaction processing time depends on banking network availability.</li>
            <li>• Platform reserves the right to update policies and service terms.</li>
            <li>• By continuing, users agree to all applicable regulations and compliance requirements.</li>
          </ul>
        </div>
      </section>

      {/* INR Animation CSS */}
      <style jsx>{`
        .rupee {
          position: absolute;
          font-size: 60px;
          color: rgba(255,255,255,0.05);
          animation: float 18s infinite linear;
        }
        .rupee1 { top: 20%; left: 15%; }
        .rupee2 { top: 60%; left: 70%; animation-duration: 22s; }
        .rupee3 { top: 40%; left: 40%; animation-duration: 20s; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </div>
  );
}
