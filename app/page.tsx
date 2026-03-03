"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [icons, setIcons] = useState<
    { id: number; left: number; duration: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 10,
    }));
    setIcons(generated);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#071225] to-[#0c1f3f] text-white">

      {/* Floating INR Icons */}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute text-blue-500/10 text-4xl animate-pulse"
          style={{
            left: `${icon.left}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${icon.duration}s`,
          }}
        >
          ₹
        </div>
      ))}

      {/* Navbar */}
      <div className="flex items-center px-6 py-5 relative z-10">
        <img
          src="/logo.jpg"
          alt="ElitePay Logo"
          className="w-10 h-10 rounded-md object-cover mr-3"
        />
        <h1 className="text-2xl font-semibold text-blue-400">ElitePay</h1>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-16 px-6 relative z-10">

        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
          <img
            src="/logo.jpg"
            alt="ElitePay Logo"
            className="w-36 mx-auto object-contain"
          />
        </div>

        <div className="px-6 py-3 rounded-full border border-blue-500/40 bg-blue-500/10 mb-10">
          <p className="text-blue-400 text-sm">
            ⚡ India's #1 Trusted Payment Gateway
          </p>
        </div>

        <h1 className="text-5xl font-semibold leading-tight">
          Secure & Instant
        </h1>

        <h1 className="text-5xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Payment Solutions
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mt-8 leading-relaxed">
          Process payments seamlessly with ElitePay — trusted by 50,000+
          merchants across India. Lightning-fast UPI transactions with 99.99%
          uptime and enterprise-grade security infrastructure.
        </p>

        <div className="mt-12">
          <Link href="/dashboard">
            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 transition text-lg font-semibold shadow-xl">
              Start Earning
            </button>
          </Link>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="mt-28 px-6 pb-32 max-w-4xl mx-auto relative z-10">
        <div className="bg-[#0f254a] rounded-2xl p-8 border border-blue-500/20 shadow-lg">

          <h2 className="text-3xl font-semibold text-blue-400 mb-6">
            Terms & Conditions
          </h2>

          <div className="space-y-6 text-gray-300 text-sm leading-relaxed">

            <p>
              <strong>1. Account Usage:</strong> Users must provide accurate and
              verified information during registration. Misrepresentation of
              identity or financial details may result in suspension.
            </p>

            <p>
              <strong>2. Compliance:</strong> All transactions must comply with
              applicable financial regulations and anti-money laundering laws.
            </p>

            <p>
              <strong>3. Security:</strong> Users are responsible for
              maintaining confidentiality of login credentials and account
              access.
            </p>

            <p>
              <strong>4. Transaction Monitoring:</strong> ElitePay reserves the
              right to monitor, review, and temporarily hold transactions for
              compliance and security verification.
            </p>

            <p>
              <strong>5. Service Availability:</strong> While we strive for
              99.99% uptime, temporary interruptions may occur due to
              maintenance or technical upgrades.
            </p>

            <p>
              <strong>6. Risk Disclosure:</strong> Digital transactions involve
              inherent risks including system errors, third-party failures, and
              regulatory changes.
            </p>

            <p>
              <strong>7. Account Suspension:</strong> Any suspicious activity,
              policy violations, or misuse of services may result in immediate
              account restriction without prior notice.
            </p>

            <p>
              <strong>8. Data Protection:</strong> User information is handled
              in accordance with privacy regulations and industry security
              standards.
            </p>

            <p>
              <strong>9. Amendments:</strong> Terms may be updated periodically.
              Continued usage implies acceptance of revised policies.
            </p>

            <p>
              <strong>10. Limitation of Liability:</strong> ElitePay shall not
              be liable for indirect losses arising from service interruptions
              or external system failures.
            </p>

          </div>
        </div>
      </div>

    </main>
  );
}
