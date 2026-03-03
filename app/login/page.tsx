"use client";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [signup, setSignup] = useState(true);

  return (
    <div className="min-h-screen bg-[#071c3b] flex items-center justify-center px-4 text-white">

      {/* Logo Top */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <Image src="/logo.jpg" alt="logo" width={40} height={40} className="rounded-md" />
        <span className="text-blue-400 font-semibold">ElitePay</span>
      </div>

      <div className="w-full max-w-md bg-[#0b234a] p-8 rounded-2xl border border-blue-900 shadow-xl">

        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-400">
          {signup ? "Create your account" : "Login"}
        </h2>

        {signup && (
          <input type="text" placeholder="Full Name"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#112b5c]" />
        )}

        <input type="email" placeholder="Email Address"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-[#112b5c]" />

        {signup && (
          <input type="text" placeholder="Phone Number"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#112b5c]" />
        )}

        <input type="password" placeholder="Password"
          className="w-full mb-6 px-4 py-3 rounded-lg bg-[#112b5c]" />

        <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition">
          {signup ? "Create Account" : "Login"}
        </button>

        <p className="mt-6 text-sm text-center text-gray-400">
          {signup ? (
            <>Already have an account?{" "}
              <span onClick={() => setSignup(false)}
                className="text-blue-400 cursor-pointer">
                Login
              </span>
            </>
          ) : (
            <>Don’t have an account?{" "}
              <span onClick={() => setSignup(true)}
                className="text-blue-400 cursor-pointer">
                Sign up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
