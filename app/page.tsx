"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false); // default = Signup

  const handleSubmit = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#06142e] text-white flex items-center justify-center px-4">

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE TEXT */}
        <div className="space-y-6 hidden md:block">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Access exclusive funds, instant settlements & premium support.
          </h1>

          <ul className="space-y-4 text-blue-400 text-lg">
            <li>→ ₹12,500 Cr+ processed monthly</li>
            <li>→ 99.99% uptime guarantee</li>
            <li>→ 24/7 dedicated support</li>
          </ul>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-[#0d1f45] p-8 rounded-2xl shadow-2xl border border-blue-900 w-full max-w-md mx-auto">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            {isLogin ? "Login" : "Create your account"}
          </h2>

          {/* SIGNUP FIELDS */}
          {!isLogin && (
            <>
              <input
                className="w-full mb-4 p-3 rounded-lg bg-[#122a5a]"
                placeholder="Full Name"
              />

              <input
                type="email"
                className="w-full mb-4 p-3 rounded-lg bg-[#122a5a]"
                placeholder="Email Address"
              />

              <input
                type="tel"
                className="w-full mb-4 p-3 rounded-lg bg-[#122a5a]"
                placeholder="Phone Number"
              />

              <input
                type="password"
                className="w-full mb-6 p-3 rounded-lg bg-[#122a5a]"
                placeholder="Password"
              />
            </>
          )}

          {/* LOGIN FIELDS */}
          {isLogin && (
            <>
              <input
                type="email"
                className="w-full mb-4 p-3 rounded-lg bg-[#122a5a]"
                placeholder="Email Address"
              />

              <input
                type="password"
                className="w-full mb-6 p-3 rounded-lg bg-[#122a5a]"
                placeholder="Password"
              />
            </>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

          <div className="text-center mt-6 text-gray-400 text-sm">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  className="text-blue-400 cursor-pointer"
                >
                  Signup
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-blue-400 cursor-pointer"
                >
                  Login
                </span>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
