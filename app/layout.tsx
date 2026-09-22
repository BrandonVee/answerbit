import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/noto-sans-sc";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://answerbit.cn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AnswerBit｜大模型 GEO 优化服务",
    template: "%s｜AnswerBit",
  },
  description:
    "AnswerBit 为品牌提供生成式引擎优化（GEO）服务，让品牌信息更容易被 ChatGPT、DeepSeek、豆包、Kimi、元宝等 AI 搜索与大模型准确理解、引用和推荐。",
  keywords: [
    "GEO优化",
    "生成式引擎优化",
    "AI搜索优化",
    "大模型优化",
    "ChatGPT优化",
    "DeepSeek优化",
    "品牌AI可见度",
    "AnswerBit",
  ],
  authors: [{ name: "AnswerBit GEO 研究团队" }],
  creator: "AnswerBit",
  publisher: "AnswerBit",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "AnswerBit",
    title: "AnswerBit｜让大模型准确理解并推荐你的品牌",
    description: "面向 ChatGPT、DeepSeek、豆包、Kimi、元宝等平台的系统化 GEO 优化服务。",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AnswerBit GEO 优化" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnswerBit｜大模型 GEO 优化服务",
    description: "让品牌成为 AI 答案中的可信来源。",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f0e8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main">跳到主要内容</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
