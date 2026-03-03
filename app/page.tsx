"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06142e] text-white relative overflow-hidden">

      {/* Animated INR Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <span className="inr inr1">₹</span>
        <span className="inr inr2">₹</span>
        <span className="inr inr3">₹</span>
        <span className="inr inr4">₹</span>

      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center px-6 py-4 bg-[#081a3a] border-b border-blue-900">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="ElitePay Logo"
            className="w-10 h-10 rounded-md object-cover"
          />
          <span className="text-xl font-semibold text-blue-400">
            ElitePay
          </span>
        </div>
      </nav>

      {/* Hero */}
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
          Process payments seamlessly with ElitePay — trusted by 50,000+ merchants
          across India. Lightning-fast UPI transactions with 99.99% uptime.
        </p>

        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-xl text-lg font-semibold shadow-lg">
            Start Earning
          </button>
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
              <p>By using ElitePay services, you agree to comply with all financial and digital transaction regulations.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">2. Account Responsibility</h3>
              <p>Users must maintain confidentiality of login credentials and financial information.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">3. Transaction Policy</h3>
              <p>Transaction speed depends on banking networks and UPI provider availability.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">4. Platform Availability</h3>
              <p>Service uptime may vary due to maintenance or technical issues.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">5. Compliance</h3>
              <p>ElitePay reserves the right to suspend accounts involved in suspicious activities.</p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">6. Legal Jurisdiction</h3>
              <p>All disputes are governed under applicable Indian laws.</p>
            </div>

          </div>
        </div>
      </section>

      {/* INR Animation Styles */}
      <style jsx>{`
        .inr {
          position: absolute;
          font-size: 80px;
          font-weight: bold;
          color: rgba(255,255,255,0.05);
          animation: float 12s infinite linear;
        }

        .inr1 { left: 10%; animation-delay: 0s; }
        .inr2 { left: 40%; animation-delay: 3s; }
        .inr3 { left: 70%; animation-delay: 6s; }
        .inr4 { left: 85%; animation-delay: 9s; }

        @keyframes float {
          0% { top: 100%; transform: rotate(0deg); }
          100% { top: -10%; transform: rotate(360deg); }
        }
      `}</style>

    </div>
  );
}
