import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthra Voting - Democracy Reimagined",
  description: "Secure, transparent, and delightfully simple voting for the modern world. Powered by blockchain. Make voting accessible, transparent, secure, and exciting.",
  keywords: ["voting", "blockchain", "democracy", "elections", "secure voting", "online voting", "student elections", "corporate voting"],
  authors: [{ name: "Anthra Voting" }],
  openGraph: {
    title: "Anthra Voting - Democracy Reimagined",
    description: "Secure, transparent, and delightfully simple voting for the modern world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
