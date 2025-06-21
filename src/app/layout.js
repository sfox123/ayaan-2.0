import React from "react";
import { Poppins, Inter } from "next/font/google";
import "../app/globals.css";
import ClientSideWrapper from "./Components/ClientSideWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Ayaan Tours",
  description: "Explore the world with Ayaan Tours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins} ${inter}`}>
        <ClientSideWrapper>{children}</ClientSideWrapper>
      </body>
    </html>
  );
}
