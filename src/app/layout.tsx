import type { Metadata } from "next";
import "./globals.css";
import "@/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css";
import "flickity/dist/flickity.min.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

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
