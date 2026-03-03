"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071428] to-[#0a1f3d] text-white">

      {/* Top Navbar */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center">
        <Image
          src="/logo.jpg"
          alt="ElitePay"
          width={45}
          height={45}
          className="rounded-lg"
        />
        <h1 className="ml-3 text-2xl font-bold text-blue-400">
          ElitePay
        </h1>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center px-6 pt-10">

        <div className="inline-block px-6 py-2 rounded-full border border-blue-500 bg-blue-600/20 text-blue-400 text-sm mb-10">
          India's #1 Trusted Payment Gateway
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Secure & Instant <br />
          <span className="text-blue-500">
            Payment Solutions
          </span>
        </h1>

        <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
          Process payments seamlessly with ElitePay — trusted by 50,000+
          merchants across India. Lightning-fast UPI transactions with 99.99% uptime.
        </p>

        <button
          onClick={() => router.push("/signup")}
          className="mt-12 px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-lg font-semibold"
        >
          Start Earning
        </button>
      </div>

      {/* Terms Section */}
      <div className="max-w-4xl mx-auto px-6 mt-24 pb-24">

        <h2 className="text-4xl font-bold text-blue-500 mb-10 text-center">
          Terms & Conditions
        </h2>

        <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">

          <p><b className="text-blue-400">1. Acceptance of Terms:</b> By accessing and using ElitePay, you agree to comply with all applicable laws and financial regulations.</p>

          <p><b className="text-blue-400">2. Eligibility:</b> Users must be 18 years or older and provide valid KYC including PAN, Aadhaar and verified banking details.</p>

          <p><b className="text-blue-400">3. Services:</b> ElitePay provides digital payment gateway services including UPI processing and merchant settlement support.</p>

          <p><b className="text-blue-400">4. Compliance:</b> All transactions are subject to RBI guidelines and financial monitoring systems.</p>

          <p><b className="text-blue-400">5. Fraud Policy:</b> Suspicious or illegal activity may result in immediate suspension.</p>

          <p><b className="text-blue-400">6. Processing Time:</b> Settlement time depends on banking network and partner processing systems.</p>

          <p><b className="text-blue-400">7. Account Security:</b> Users are responsible for maintaining confidentiality of login credentials.</p>

          <p><b className="text-blue-400">8. Limitation of Liability:</b> ElitePay is not liable for indirect losses due to technical or third-party failures.</p>

          <p><b className="text-blue-400">9. Modifications:</b> The platform reserves the right to modify policies without prior notice.</p>

          <p><b className="text-blue-400">10. Jurisdiction:</b> All disputes are governed by Indian jurisdiction.</p>

        </div>
      </div>

    </div>
  );
}
