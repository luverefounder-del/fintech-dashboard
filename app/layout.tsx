import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "ElitePay",
  description: "Secure Payment Gateway",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#071428] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
