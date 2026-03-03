"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { User, LayoutGrid, LogOut } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/IMG_20260303_022001_156.jpg"
          alt="background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#050b1a]/85" />
      </div>

      {/* Radial Blue Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/30 blur-[180px] rounded-full -z-10" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="ElitePay"
            width={45}
            height={45}
            className="rounded-lg"
          />
          <h1 className="text-2xl font-bold text-blue-400">ElitePay</h1>
        </div>

        <div className="flex items-center gap-6 text-blue-400">
          <User size={22} />
          <LayoutGrid size={22} />
          <LogOut size={22} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 mt-16">

        {/* Center Logo Card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl">
          <Image
            src="/logo.jpg"
            alt="ElitePay Logo"
            width={150}
            height={150}
            className="rounded-2xl"
          />
        </div>

        {/* Badge */}
        <div className="mt-8 px-8 py-3 rounded-full border border-blue-500 bg-blue-600/20 text-blue-400 text-sm backdrop-blur-md">
          ⚡ India's #1 Trusted Payment Gateway
        </div>

        {/* Heading */}
        <h2 className="mt-12 text-6xl font-bold leading-tight">
          Secure & Instant <br />
          <span className="text-blue-500">Payment Solutions</span>
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-gray-400 text-xl">
          Process payments seamlessly with ElitePay — trusted by 50,000+
          merchants across India. Lightning-fast UPI transactions with
          99.99% uptime.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/login")}
          className="mt-12 px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-lg font-semibold"
        >
          Start Earning
        </button>

      </section>
    </main>
  );
}
