import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "玉石坊 - 天然玉石珠宝商城",
  description: "精选天然翡翠、和田玉、水晶蜜蜡，手工打造每一件艺术品",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
