import type { Metadata } from "next";

import { Layout } from "./Layout/Layout";

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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Arvo&family=Lato:ital,wght@0,400;0,700;1,400&display=swap"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
