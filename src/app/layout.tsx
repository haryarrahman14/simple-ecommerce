import { ReactQueryClientProvider } from "@/context/ReactQueryClientProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.scss";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Ecommerce App",
  description: "Hary - Simple Ecommerce Apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
