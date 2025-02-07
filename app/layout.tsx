import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";


const k2d = K2D({
  variable: "--font-k2d",
  weight: ['400','500','600', '700','800'],
  subsets: ["latin"],
  style: "normal", // normal, italic, or oblique are the possible values
  display: "swap", // swap, fallback, or fallback-italic are the possible values
})


export const metadata: Metadata = {
  title: "Denvers",
  description: "Feel at home , away from home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${k2d.variable} antialiased`}
        >
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
