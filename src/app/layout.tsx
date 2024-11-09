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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
