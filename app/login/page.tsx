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
      alert("Account Created");
      setSignup(false);
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      document.cookie = "isLoggedIn=true; path=/";
      document.cookie = `userName=${savedUser.fullName}; path=/`;

      window.location.href = "/dashboard";
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-[#060f1f] flex items-center justify-center text-white">
      <div className="bg-[#0d1c33] p-8 rounded-2xl w-[350px]">
        <h2 className="text-center text-xl mb-6 text-[#4f8cff]">
          {signup ? "Create your account" : "Login"}
        </h2>

        {signup && (
          <input
            placeholder="Full Name"
            className="w-full mb-3 p-2 rounded bg-[#091626]"
            onChange={(e) => setFullName(e.target.value)}
          />
        )}

        <input
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-[#091626]"
          onChange={(e) => setEmail(e.target.value)}
        />

        {signup && (
          <input
            placeholder="Phone"
            className="w-full mb-3 p-2 rounded bg-[#091626]"
            onChange={(e) => setPhone(e.target.value)}
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 rounded bg-[#091626]"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400 mb-3">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-[#4f8cff] py-2 rounded"
        >
          {signup ? "Create Account" : "Login"}
        </button>

        <p
          className="text-center mt-4 text-sm cursor-pointer text-[#4f8cff]"
          onClick={() => setSignup(!signup)}
        >
          {signup ? "Already have account? Login" : "Create new account"}
        </p>
      </div>
    </div>
  );
}
