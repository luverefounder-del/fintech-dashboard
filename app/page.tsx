"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#071c3b] overflow-hidden text-white">

      {/* INR Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-inr absolute text-white/5 text-6xl">₹</div>
        <div className="animate-inr2 absolute text-white/5 text-7xl">₹</div>
        <div className="animate-inr3 absolute text-white/5 text-5xl">₹</div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-blue-900">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="ElitePay Logo"
            width={45}
            height={45}
            className="rounded-md"
            priority
          />
          <h1 className="text-xl font-semibold text-blue-400">ElitePay</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-16">

        {/* Center Logo */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl">
          <Image
            src="/logo.jpg"
            alt="ElitePay"
            width={200}
            height={200}
            className="rounded-xl"
            priority
          />
        </div>

        <div className="mt-6 px-6 py-2 rounded-full border border-blue-500 text-blue-400">
          ⚡ India's #1 Trusted Payment Gateway
        </div>

        <h2 className="mt-8 text-4xl font-bold leading-tight">
          Secure & Instant <br />
          <span className="text-blue-500">Payment Solutions</span>
        </h2>

        <p className="mt-6 text-gray-300 max-w-xl">
          Process payments seamlessly with ElitePay — trusted by thousands of merchants across India.
          Lightning-fast UPI transactions with enterprise-grade security and 99.99% uptime reliability.
        </p>

        <Link href="/login">
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-xl text-lg font-semibold shadow-lg">
            Start Earning
          </button>
        </Link>
      </section>

      {/* Terms & Conditions */}
      <section className="relative z-10 mt-20 px-6 pb-16 max-w-4xl mx-auto">
        <div className="bg-[#0b234a] p-8 rounded-2xl border border-blue-900 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Terms & Conditions
          </h3>

          <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <li>• All transactions are subject to compliance verification and regulatory approval.</li>
            <li>• Users must provide accurate identity information during registration.</li>
            <li>• Unauthorized or suspicious activity may lead to temporary or permanent suspension.</li>
            <li>• ElitePay maintains strict AML & KYC compliance policies.</li>
            <li>• Processing timelines may vary depending on banking network availability.</li>
            <li>• Platform reserves the right to update service terms without prior notice.</li>
          </ul>
        </div>
      </section>

      {/* Custom Animation Styles */}
      <style jsx>{`
        .animate-inr {
          top: 10%;
          left: 20%;
          animation: float1 18s linear infinite;
        }
        .animate-inr2 {
          top: 60%;
          left: 70%;
          animation: float2 22s linear infinite;
        }
        .animate-inr3 {
          top: 40%;
          left: 10%;
          animation: float3 20s linear infinite;
        }

        @keyframes float1 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0); }
        }
        @keyframes float2 {
          0% { transform: translateY(0); }
          50% { transform: translateY(50px); }
          100% { transform: translateY(0); }
        }
        @keyframes float3 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
