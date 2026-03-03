"use client";

import Image from "next/image";
import { User, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isLoggedIn = pathname.startsWith("/dashboard");

  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.jpg"
          alt="ElitePay"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-bold text-blue-400">ElitePay</h1>
      </div>

      {isLoggedIn && (
        <div className="flex items-center gap-6 text-blue-400">
          <User size={22} className="cursor-pointer" />
          <LogOut
            size={22}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
      )}
    </nav>
  );
}
