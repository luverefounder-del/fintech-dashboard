import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-lg">
            EP
          </div>
          <h1 className="text-2xl font-semibold tracking-wide">
            ElitePay
          </h1>
        </div>

        <div className="flex gap-4">
          <Link href="/login">
            <button className="px-6 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition">
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 px-6 relative z-10">

        <div className="mb-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
          <span className="text-blue-400 text-sm">
            Next-Gen Secure Payment Platform
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6">
          Powering the Future of
        </h2>

        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 bg-clip-text text-transparent mb-10">
          Digital Payments
        </h2>

        <p className="text-gray-400 max-w-2xl mb-12 text-lg">
          Lightning fast transactions, enterprise-grade security,
          and seamless user experience — all in one ultra premium platform.
        </p>

        <div className="flex gap-6">
          <Link href="/signup">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-lg shadow-xl shadow-blue-500/30 hover:scale-105 transition duration-300">
              Get Started
            </button>
          </Link>

          <Link href="/login">
            <button className="px-8 py-4 rounded-2xl border border-white/20 text-lg hover:bg-white/10 transition duration-300">
              Login
            </button>
          </Link>
        </div>

      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-8 px-8 mt-32 pb-20 relative z-10">

        {[
          {
            title: "Instant Transfers",
            desc: "Real-time payment processing with zero delay."
          },
          {
            title: "Advanced Security",
            desc: "Bank-grade encryption and fraud protection."
          },
          {
            title: "Global Access",
            desc: "Multi-currency support & seamless integration."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {item.title}
            </h3>
            <p className="text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}

      </section>

    </main>
  );
}
