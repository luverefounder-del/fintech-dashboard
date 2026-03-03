import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1C] text-white relative overflow-hidden">

      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1e3a8a20,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#2563eb20,transparent_40%)]" />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 relative z-10">
        <h1 className="text-2xl font-semibold tracking-wide">
          Elite<span className="text-blue-500">Pay</span>
        </h1>

        <div className="flex gap-6 text-sm items-center">
          <Link href="/login" className="text-gray-300 hover:text-white transition">
            Login
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center text-center mt-32 px-6">

        <div className="mb-6 px-5 py-2 text-sm rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
          Trusted by 25,000+ Businesses
        </div>

        <h2 className="text-6xl md:text-7xl font-semibold leading-tight mb-6 max-w-4xl">
          The Most Powerful
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Digital Payment
          </span>
          <br />
          Infrastructure
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mb-10">
          Fast. Secure. Scalable. Built for modern finance platforms
          and next-generation digital businesses.
        </p>

        <div className="flex gap-6">
          <Link href="/signup">
            <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-lg transition shadow-lg shadow-blue-600/30">
              Start Free
            </button>
          </Link>

          <Link href="/login">
            <button className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 text-lg transition">
              Login
            </button>
          </Link>
        </div>

      </section>

      {/* Floating Card Mockup */}
      <div className="relative z-10 mt-28 flex justify-center px-6">
        <div className="w-full max-w-4xl rounded-3xl bg-gradient-to-br from-[#111827] to-[#0f172a] p-8 border border-white/10 shadow-2xl shadow-blue-900/20 backdrop-blur-xl">

          <div className="flex justify-between mb-8">
            <div>
              <p className="text-gray-400 text-sm">Total Volume</p>
              <p className="text-3xl font-semibold mt-2">$8,942,301</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Transactions</p>
              <p className="text-3xl font-semibold mt-2">1,24,890</p>
            </div>
          </div>

          <div className="h-40 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 flex items-center justify-center text-gray-400">
            Live Analytics Dashboard Preview
          </div>

        </div>
      </div>

    </main>
  );
}
