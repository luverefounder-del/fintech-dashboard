"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) return;

    localStorage.setItem("isLoggedIn", "true");
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050b18] text-white p-6">
      <div className="w-full max-w-md bg-[#071427] p-8 rounded-3xl border border-blue-500/20">

        <h1 className="text-2xl text-blue-400 font-semibold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 bg-[#0c1f3f] rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 bg-[#0c1f3f] rounded-xl"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Login
        </button>

      </div>
    </main>
  );
}
