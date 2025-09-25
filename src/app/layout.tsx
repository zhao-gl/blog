import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navigation from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "我的个人博客",
  description: "一个使用 Next.js 和 Contentful 构建的个人博客网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                我的博客
              </Link>
              
              <Navigation />
            </div>
          </div>
        </header>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="mb-4">
                © {new Date().getFullYear()} 我的个人博客. 保留所有权利.
              </p>
              <div className="flex justify-center space-x-6">
                <Link href="/" className="hover:text-gray-300 transition-colors">
                  首页
                </Link>
                <Link href="/posts" className="hover:text-gray-300 transition-colors">
                  文章
                </Link>
                <Link href="/about" className="hover:text-gray-300 transition-colors">
                  关于
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
