m"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-[#071428] text-white overflow-hidden">

      {/* ₹ Floating Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="rupee r1">₹</div>
        <div className="rupee r2">₹</div>
        <div className="rupee r3">₹</div>
      </div>

      {/* Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[160px] rounded-full" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16">

        {/* Logo */}
        <div className="bg-white p-6 rounded-3xl shadow-2xl">
          <Image
            src="/logo.jpg"
            alt="ElitePay Logo"
            width={170}
            height={170}
            className="rounded-2xl"
          />
        </div>

        {/* Badge */}
        <div className="mt-10 px-8 py-3 rounded-full border border-blue-500 bg-blue-600/20 text-blue-400 text-sm backdrop-blur-md">
          India's #1 Trusted Payment Gateway
        </div>

        {/* Heading */}
        <h1 className="mt-12 text-6xl font-bold leading-tight">
          Secure & Instant <br />
          <span className="text-blue-500">Payment Solutions</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-gray-400 text-xl">
          Process payments seamlessly with ElitePay trusted by 50,000+ merchants across India.
          Lightning-fast UPI transactions with 99.99% uptime.
        </p>

        {/* Start Earning */}
        <button
          onClick={() => router.push("/signup")}
          className="mt-12 px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-lg font-semibold"
        >
          Start Earning
        </button>

        {/* Terms & Conditions */}
        <div className="mt-20 max-w-4xl text-left">
          <h2 className="text-4xl font-bold text-blue-500 mb-8">
            Terms & Conditions
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">

            <p><b className="text-blue-400">1. Acceptance of Terms:</b> By accessing ElitePay, you agree to comply with all applicable regulations and policies.</p>

            <p><b className="text-blue-400">2. User Eligibility:</b> Users must be 18+ and provide valid KYC including PAN, Aadhaar and bank verification.</p>

            <p><b className="text-blue-400">3. Compliance:</b> All transactions are subject to RBI guidelines and financial compliance checks.</p>

            <p><b className="text-blue-400">4. Fraud Prevention:</b> Suspicious activity may result in temporary or permanent suspension.</p>

            <p><b className="text-blue-400">5. Processing Time:</b> Settlement timing depends on banking network availability.</p>

            <p><b className="text-blue-400">6. Security:</b> Users are responsible for maintaining confidentiality of login credentials.</p>

            <p><b className="text-blue-400">7. Platform Rights:</b> ElitePay reserves the right to modify services without prior notice.</p>

            <p><b className="text-blue-400">8. Limitation of Liability:</b> We are not liable for indirect losses caused by network or third-party failures.</p>

            <p><b className="text-blue-400">9. Termination:</b> Accounts violating policy may be terminated without refund.</p>

            <p><b className="text-blue-400">10. Legal Jurisdiction:</b> All disputes are subject to Indian jurisdiction.</p>

          </div>
        </div>

      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .rupee {
          position: absolute;
          font-size: 120px;
          color: rgba(255,255,255,0.03);
          animation: float 15s linear infinite;
        }
        .r1 { top: 10%; left: 20%; }
        .r2 { top: 50%; left: 70%; animation-delay: 5s; }
        .r3 { top: 80%; left: 40%; animation-delay: 10s; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </div>
  );
}
