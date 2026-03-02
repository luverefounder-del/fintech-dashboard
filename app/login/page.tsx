"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-[#0f172a] p-8 rounded-2xl w-[90%] max-w-md shadow-xl border border-blue-500/20">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-[#1e293b] border border-blue-500/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-[#1e293b] border border-blue-500/20"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
