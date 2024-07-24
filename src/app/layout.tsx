import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Template from "@/components/Template";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Syahri's",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Template>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </Template>
      </body>
    </html>
  );
}
