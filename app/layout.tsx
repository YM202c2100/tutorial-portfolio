import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "turtorial-portfolio",
  description: "tutorial of making portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
