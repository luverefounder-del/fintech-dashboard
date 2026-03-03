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
      if (!fullName || !email || !phone || !password) {
        setError("Please fill all fields");
        return;
      }

      const userData = { fullName, email, phone, password };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Account Created Successfully");
      setSignup(false);
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      localStorage.setItem("auth", "true");
      localStorage.setItem(
        "userName",
        savedUser.fullName || email
      );

      window.location.href = "/dashboard";
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-[#060f1f] flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md bg-[#0d1c33] p-8 rounded-2xl border border-white/10">

        <h2 className="text-2xl font-semibold mb-6 text-center text-[#4f8cff]">
          {signup ? "Create your account" : "Login"}
        </h2>

        {signup && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#091626]"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-[#091626]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {signup && (
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#091626]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-[#091626]"
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
          className="w-full bg-[#4f8cff] py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          {signup ? "Create Account" : "Login"}
        </button>

        <p className="mt-6 text-center text-gray-400 text-sm">
          {signup ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setSignup(false)}
                className="text-[#4f8cff] cursor-pointer"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setSignup(true)}
                className="text-[#4f8cff] cursor-pointer"
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
