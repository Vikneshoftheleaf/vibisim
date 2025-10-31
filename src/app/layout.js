import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  name: "Vibism",
  short_name: "Vibism",
  title: "Vibism — Generate Perfect Java Code Instantly",
  description:
    "Vibism is an AI-powered Java code generator that strictly follows a custom DSL to produce clean, optimized, and production-ready Java programs. Designed for developers who value precision, clarity, and efficiency.",
  keywords: [
    "Java code generator",
    "AI Java assistant",
    "DSL-based code generation",
    "Java automation",
    "LLM code generation",
    "Gemini 2.0 Flash",
    "GPT-5",
    "Vibism AI",
  ],
  author: "Vicky",
  theme_color: "#101820",
  background_color: "#ffffff",
  lang: "en",
  type: "website",
  url: "https://vibism.vercel.app",
  image: "https://vibism.vercel.app/og-image.png",
  twitter: {
    card: "summary_large_image",
    title: "Vibism — AI Java Code Generator",
    description:
      "Generate perfect Java code instantly using Vibism’s LLM-powered DSL engine.",
    image: "https://vibism.vercel.app/og-image.png",
    creator: "@vickydev",
  },
  openGraph: {
    type: "website",
    title: "Vibism — Java Code Generator",
    description:
      "AI that writes Java code exactly the way you want — clean, strict, and fast.",
    url: "https://vibism.vercel.app",
    image: "https://vibism.vercel.app/og-image.png",
    site_name: "Vibism",
  },
  llm_context: {
    purpose: "AI-assisted Java code generation using a domain-specific DSL.",
    style_guidelines: "Strict adherence to DSL rules, optimized and minimal Java syntax.",
    target_audience: "Developers, engineers, and students seeking AI-assisted Java generation.",
    tone: "Direct, technical, reliable, professional.",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
