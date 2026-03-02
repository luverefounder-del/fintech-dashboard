export const metadata = {
  title: "Elite Pay",
  description: "Secure Digital Payment Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#0b0f19", color: "#ffffff" }}>
        {children}
      </body>
    </html>
  );
}
