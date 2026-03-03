"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06142e] text-white relative overflow-hidden">

      {/* INR Animation */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <span className="rupee r1">₹</span>
        <span className="rupee r2">₹</span>
        <span className="rupee r3">₹</span>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center px-6 py-4 bg-[#081a3a] border-b border-blue-900">
        <img
          src="/IMG_20260303_022001_156.jpg"
          alt="ElitePay Logo"
          className="w-10 h-10 rounded-md object-cover"
        />
        <span className="ml-3 text-xl font-semibold text-blue-400">
          ElitePay
        </span>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 text-center px-6 py-16">

        <div className="flex justify-center mb-8">
          <img
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay"
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

        {/* START EARNING BUTTON */}
        <div className="mt-10">
          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-xl text-lg font-semibold shadow-lg">
              Start Earning
            </button>
          </Link>
        </div>

      </section>

      {/* TERMS SECTION */}
      <section className="relative z-20 bg-[#081a3a] px-6 py-16">
        <div className="max-w-4xl mx-auto bg-[#0d1f45] p-8 rounded-2xl shadow-2xl border border-blue-900">
          <h2 className="text-2xl font-semibold text-white mb-8 border-b border-blue-800 pb-4">
            Terms & Conditions
          </h2>

          <div className="space-y-6 text-gray-300 text-sm leading-7">

            <div>
              <h3 className="text-white font-medium mb-2">1. User Agreement</h3>
              <p>By accessing ElitePay services, you agree to comply with applicable financial regulations.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">2. Account Responsibility</h3>
              <p>Users are responsible for safeguarding account credentials and transaction data.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">3. Transaction Processing</h3>
              <p>Transaction processing times depend on banking and UPI network availability.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">4. Service Availability</h3>
              <p>Platform availability may be affected by maintenance or system upgrades.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">5. Legal Compliance</h3>
              <p>All disputes and operations are governed under applicable Indian financial laws.</p>
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
