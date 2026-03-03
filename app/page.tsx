"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06142e] text-white relative overflow-hidden">

      {/* Floating INR Animation (Safe - does NOT block clicks) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <span className="rupee r1">₹</span>
        <span className="rupee r2">₹</span>
        <span className="rupee r3">₹</span>
        <span className="rupee r4">₹</span>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center px-6 py-4 bg-[#081a3a] border-b border-blue-900">
        <div className="flex items-center gap-3">
          <img
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay"
            className="w-10 h-10 rounded-md object-cover"
          />
          <span className="text-xl font-semibold text-blue-400">
            ElitePay
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 text-center px-6 py-16">

        <div className="flex justify-center mb-8">
          <img
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay Official"
            className="w-40 h-40 rounded-2xl shadow-xl object-cover"
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

        {/* CLICKABLE BUTTON */}
        <div className="mt-10 relative z-30">
          <Link href="/dashboard">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-xl text-lg font-semibold shadow-lg cursor-pointer">
              Start Earning
            </button>
          </Link>
        </div>

      </section>

      {/* Professional Terms */}
      <section className="relative z-20 bg-[#081a3a] px-6 py-16">
        <div className="max-w-4xl mx-auto bg-[#0d1f45] p-8 rounded-2xl shadow-2xl border border-blue-900">
          <h2 className="text-2xl font-semibold text-white mb-8 border-b border-blue-800 pb-4">
            Terms & Conditions
          </h2>

          <div className="space-y-6 text-gray-300 text-sm leading-7">

            <div>
              <h3 className="text-white font-medium mb-2">1. User Agreement</h3>
              <p>By accessing and using ElitePay services, you agree to comply with all applicable financial regulations.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">2. Account Responsibility</h3>
              <p>Users are responsible for maintaining the confidentiality of account credentials and financial information.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">3. Transaction Processing</h3>
              <p>Transaction times depend on banking networks and UPI provider availability.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">4. Platform Availability</h3>
              <p>ElitePay does not guarantee uninterrupted service during maintenance or technical disruptions.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">5. Compliance & Monitoring</h3>
              <p>The platform reserves the right to suspend accounts involved in suspicious or illegal activities.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">6. Legal Jurisdiction</h3>
              <p>All disputes are governed under applicable Indian financial laws.</p>
            </div>

          </div>
        </div>
      </section>

      {/* INR Animation CSS */}
      <style jsx>{`
        .rupee {
          position: absolute;
          font-size: 90px;
          font-weight: bold;
          color: rgba(255,255,255,0.05);
          animation: floatUp 12s linear infinite;
        }

        .r1 { left: 10%; animation-delay: 0s; }
        .r2 { left: 40%; animation-delay: 3s; }
        .r3 { left: 70%; animation-delay: 6s; }
        .r4 { left: 85%; animation-delay: 9s; }

        @keyframes floatUp {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-120vh) rotate(360deg); }
        }
      `}</style>

    </div>
  );
}
