"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06142e] text-white relative overflow-hidden">

      {/* Animated INR Background */}
      <div className="absolute inset-0 opacity-5 animate-pulse text-6xl font-bold text-white pointer-events-none">
        <div className="absolute top-10 left-10">₹</div>
        <div className="absolute top-40 right-20">₹</div>
        <div className="absolute bottom-20 left-20">₹</div>
        <div className="absolute bottom-40 right-10">₹</div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#081a3a] border-b border-blue-900">
        <div className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="ElitePay Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="ml-3 text-xl font-semibold text-blue-400">
            ElitePay
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 relative z-10">
        <div className="flex justify-center mb-6">
          <Image
            src="/IMG_20260303_022001_156.jpg"
            alt="ElitePay Official"
            width={150}
            height={150}
            className="rounded-xl"
          />
        </div>

        <div className="inline-block px-5 py-2 rounded-full bg-blue-900/40 border border-blue-500 text-blue-300 text-sm mb-6">
          ⚡ India's #1 Trusted Payment Gateway
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Secure & Instant <br />
          <span className="text-blue-500">Payment Solutions</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto text-lg">
          Process payments seamlessly with ElitePay — trusted by 50,000+
          merchants across India. Lightning-fast UPI transactions with 99.99%
          uptime.
        </p>

        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl text-lg font-semibold shadow-lg">
            Start Earning
          </button>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="bg-[#081a3a] px-6 py-12 text-gray-400 text-sm leading-7">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6">
            Terms & Conditions
          </h2>

          <p>
            1. By accessing and using ElitePay services, you agree to comply
            with all applicable financial and digital transaction regulations.
          </p>

          <p className="mt-4">
            2. ElitePay reserves the right to suspend accounts involved in
            suspicious, fraudulent, or illegal activities.
          </p>

          <p className="mt-4">
            3. Transaction processing times may vary depending on banking
            networks and UPI provider availability.
          </p>

          <p className="mt-4">
            4. Users are responsible for maintaining the confidentiality of
            their account credentials.
          </p>

          <p className="mt-4">
            5. ElitePay does not guarantee uninterrupted service during system
            upgrades or unforeseen technical disruptions.
          </p>

          <p className="mt-4">
            6. Fees, service charges, and commission structures are subject to
            change without prior notice.
          </p>

          <p className="mt-4">
            7. Continued use of the platform constitutes acceptance of any
            updated terms and policies.
          </p>
        </div>
      </section>
    </div>
  );
}
