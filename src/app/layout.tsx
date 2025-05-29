import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const pretendard = localFont({
  src: [
    {
      path: "../fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "../fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
    },
  ],
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "Homepage",
  description: "홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.className}>
      <body className="flex flex-col w-full mx-auto ">
        <Header />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
