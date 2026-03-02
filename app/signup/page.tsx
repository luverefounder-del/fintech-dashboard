"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-6">

      <div className="w-full max-w-md bg-[#0f1c2e] p-8 rounded-2xl shadow-2xl border border-slate-700">

        <h2 className="text-3xl font-semibold text-white mb-8">
          Create your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-slate-400 text-sm">Full Name</label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#16243a] border border-slate-600 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-slate-400 text-sm">Phone Number</label>
            <input
              type="text"
              required
              placeholder="+91 XXXXX XXXXX"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#16243a] border border-slate-600 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-slate-400 text-sm">Email Address</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#16243a] border border-slate-600 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-slate-400 text-sm">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#16243a] border border-slate-600 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-slate-400 text-sm mt-6 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
