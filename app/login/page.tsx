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
      const userData = { fullName, email, phone, password };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Account created successfully");
      setSignup(false);
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(
        "userName",
        savedUser.fullName || email.split("@")[0]
      );

      window.location.replace("/dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-[#050f1f] flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md bg-[#0b1c33] p-8 rounded-2xl border border-[#1e3a8a]">

        <h2 className="text-2xl font-semibold mb-6 text-center text-[#3b82f6]">
          {signup ? "Create your account" : "Login"}
        </h2>

        {signup && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#081426]"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-[#081426]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {signup && (
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#081426]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-[#081426]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-[#3b82f6] hover:opacity-90 py-3 rounded-lg font-semibold"
        >
          {signup ? "Create Account" : "Login"}
        </button>

        <p className="mt-6 text-center text-gray-400 text-sm">
          {signup ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setSignup(false)}
                className="text-[#3b82f6] cursor-pointer"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setSignup(true)}
                className="text-[#3b82f6] cursor-pointer"
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
