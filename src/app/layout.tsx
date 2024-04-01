import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {Providers} from "@/components/redux/provider"

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" })
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="{pjs.ClassName}">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
