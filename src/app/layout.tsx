import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avzentric",
  description: "Avzentric is a software development firm and our expertise extends to artificial intelligence solutions. Innovation is what drives our company forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}