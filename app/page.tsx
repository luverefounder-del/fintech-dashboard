"use client"

import React from "react"

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#0b1220] text-white overflow-hidden">

      {/* Animated ₹ Background */}
      <div className="absolute inset-0 opacity-5 animate-float pointer-events-none">
        <div className="text-[120px] absolute top-10 left-10">₹</div>
        <div className="text-[150px] absolute top-1/3 right-20">₹</div>
        <div className="text-[100px] absolute bottom-20 left-1/4">₹</div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Terms & Conditions
        </h1>

        <Section title="1. Acceptance of Terms">
          By accessing and using ElitePay, you agree to comply with and be bound by these Terms and Conditions.
        </Section>

        <Section title="2. Services">
          ElitePay provides digital payment gateway solutions including UPI processing,
          merchant settlements, and transaction management services.
        </Section>

        <Section title="3. User Eligibility">
          Users must be 18 years or older and provide valid KYC documents including PAN,
          Aadhaar, GST (if applicable), and bank verification.
        </Section>

        <Section title="4. Account Responsibility">
          Users are responsible for maintaining confidentiality of login credentials.
          ElitePay is not liable for unauthorized access caused by negligence.
        </Section>

        <Section title="5. Transaction Monitoring">
          All transactions are monitored for fraud prevention and AML compliance.
          Suspicious activity may result in fund hold or account suspension.
        </Section>

        <Section title="6. Prohibited Activities">
          Users may not use ElitePay for illegal activities including fraud,
          money laundering, unlicensed gambling, or restricted content.
        </Section>

        <Section title="7. Fees & Charges">
          Processing fees, settlement fees, and service charges may apply.
          All fees are non-refundable unless stated otherwise.
        </Section>

        <Section title="8. Refund & Chargebacks">
          Merchants are responsible for refunds. Chargebacks may attract penalties.
        </Section>

        <Section title="9. Settlement Policy">
          Settlement timelines depend on banking cycles and compliance review.
        </Section>

        <Section title="10. Account Suspension">
          ElitePay reserves the right to suspend accounts violating policies.
        </Section>

        <Section title="11. Limitation of Liability">
          ElitePay shall not be liable for indirect losses, banking delays,
          server downtime, or third-party failures.
        </Section>

        <Section title="12. Data & Privacy">
          We collect personal and transaction data for security and compliance.
        </Section>

        <Section title="13. Intellectual Property">
          All content, branding, and code belong to ElitePay.
        </Section>

        <Section title="14. Indemnification">
          Users agree to indemnify ElitePay against legal claims and disputes.
        </Section>

        <Section title="15. Governing Law">
          These terms are governed by the laws of India.
        </Section>

        <Section title="16. Amendments">
          Terms may be updated anytime. Continued usage implies acceptance.
        </Section>

        <p className="text-sm text-gray-400 mt-16 text-center">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>

    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-3 text-blue-400">
        {title}
      </h2>
      <p className="text-gray-300 leading-7">
        {children}
      </p>
    </div>
  )
}
