"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06142e] text-white relative overflow-hidden">

      {/* Animated INR Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5 text-7xl font-bold">
        <div className="absolute top-20 left-10 animate-pulse">₹</div>
        <div className="absolute top-40 right-16 animate-pulse">₹</div>
        <div className="absolute bottom-32 left-20 animate-pulse">₹</div>
        <div className="absolute bottom-20 right-10 animate-pulse">₹</div>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center px-6 py-4 bg-[#081a3a] border-b border-blue-900">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="ElitePay Logo"
            width={40}
            height={40}
            className="rounded-md object-cover"
            priority
          />
          <span className="text-xl font-semibold text-blue-400">
            ElitePay
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 text-center px-6 py-16">
        <div className="flex justify-center mb-8">
          <Image
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay Official"
            width={160}
            height={160}
            className="rounded-2xl shadow-xl"
            priority
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
          merchants across India. Lightning-fast UPI transactions with 99.99%
          uptime.
        </p>

        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-xl text-lg font-semibold shadow-lg">
            Start Earning
          </button>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="relative z-20 bg-[#081a3a] px-6 py-14 text-gray-400 text-sm leading-7">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-xl font-semibold text-white mb-6">
            Terms & Conditions
          </h2>

          <p>1. Users must comply with all applicable financial and digital transaction regulations.</p>
          <p>2. ElitePay reserves the right to suspend accounts involved in suspicious or fraudulent activities.</p>
          <p>3. Transaction processing times depend on banking and UPI network availability.</p>
          <p>4. Users are responsible for maintaining the confidentiality of their login credentials.</p>
          <p>5. Platform uptime may vary due to maintenance or unforeseen technical disruptions.</p>
          <p>6. Fees and service charges may be updated without prior notice.</p>
          <p>7. Continued platform usage implies acceptance of updated terms and policies.</p>
          <p>8. ElitePay is not liable for losses arising from incorrect account details provided by users.</p>
          <p>9. Refunds and reversals are subject to banking partner policies.</p>
          <p>10. All disputes are subject to jurisdiction as per applicable Indian laws.</p>
        </div>
      </section>
    </div>
  );
}
