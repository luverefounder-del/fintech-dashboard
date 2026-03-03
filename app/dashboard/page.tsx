"use client";

import { useState } from "react";

export default function LoginPage() {
  const [signup, setSignup] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");

    if (signup) {
      // SAVE USER
      const userData = { fullName, email, phone, password };
      localStorage.setItem("user", JSON.stringify(userData));

      alert("Account Created Successfully!");
      setSignup(false);
      return;
    }

    // LOGIN
    const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      // ✅ IMPORTANT FIX
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(
        "userName",
        savedUser.fullName || email.split("@")[0]
      );

      // Hard redirect (no flash)
      window.location.replace("/dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-[#071c3b] flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md bg-[#0b234a] p-8 rounded-2xl border border-blue-800">

        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-400">
          {signup ? "Create your account" : "Login"}
        </h2>

        {signup && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0f2d5c]"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0f2d5c]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {signup && (
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0f2d5c]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0f2d5c]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
        >
          {signup ? "Create Account" : "Login"}
        </button>

        <p className="mt-6 text-center text-gray-400 text-sm">
          {signup ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setSignup(false)}
                className="text-blue-400 cursor-pointer"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setSignup(true)}
                className="text-blue-400 cursor-pointer"
              >
                Sign up
              </span>
            </>
          )}
        </p>

      </div>
    </div>
  );
      }
