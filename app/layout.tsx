import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
