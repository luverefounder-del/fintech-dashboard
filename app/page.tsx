"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06142e] text-white relative overflow-hidden">

      {/* INR Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <span className="rupee r1">₹</span>
        <span className="rupee r2">₹</span>
        <span className="rupee r3">₹</span>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center px-6 py-4 bg-[#081a3a] border-b border-blue-900">
        <img
          src="/IMG_20260303_022001_156.jpg"
          className="w-10 h-10 rounded-md object-cover"
          alt="logo"
        />
        <span className="ml-3 text-xl font-semibold text-blue-400">
          ElitePay
        </span>
      </nav>

      {/* Hero */}
      <section className="relative z-20 text-center px-6 py-16">
        <div className="flex justify-center mb-8">
          <img
            src="/IMG_20260303_022001_156.jpg"
            className="w-40 h-40 rounded-2xl shadow-xl object-cover"
            alt="hero"
          />
        </div>

        <div className="inline-block px-6 py-2 rounded-full bg-blue-900/40 border border-blue-500 text-blue-300 text-sm mb-6">
          ⚡ India's #1 Trusted Payment Gateway
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Secure & Instant <br />
          <span className="text-blue-500">Payment Solutions</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          Process payments seamlessly with ElitePay — trusted by 50,000+
          merchants across India. Lightning-fast UPI transactions with 99.99% uptime.
        </p>

        <div className="mt-10">
          <Link href="/auth">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-xl text-lg font-semibold shadow-lg">
              Start Earning
            </button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .rupee {
          position: absolute;
          font-size: 90px;
          font-weight: bold;
          color: rgba(255,255,255,0.05);
          animation: floatUp 12s linear infinite;
        }
        .r1 { left: 10%; animation-delay: 0s; }
        .r2 { left: 50%; animation-delay: 4s; }
        .r3 { left: 80%; animation-delay: 8s; }

        @keyframes floatUp {
          0% { transform: translateY(100vh); }
          100% { transform: translateY(-120vh); }
        }
      `}</style>
    </div>
  );
}
