import type { Metadata } from "next";
import "./globals.css";
import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "Riley Boyd: Senior Frontend Engineer",
  description: "Riley Boyd: Senior Frontend Engineer",
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
