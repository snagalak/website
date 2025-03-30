import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const morangaMed = localFont({
  src: "Moranga-Medium.otf",
});


export const metadata: Metadata = {
  title: "Sravya Nagalakunta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${morangaMed.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
