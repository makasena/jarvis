import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BASED JARVIS",
  description:
    "Where AI Companions Meet Blockchain Innovation. Join the JARVIS ecosystem inspired by Grok's AI companions system.",
  keywords: "JARVIS, Grok, AI Companions, Blockchain, Cryptocurrency, Elon Musk, xAI",
  authors: [{ name: "JARVIS Team" }],
  creator: "JARVIS",
  publisher: "JARVIS",
  robots: "index, follow",
  openGraph: {
    title: "BASED JARVIS",
    description: "Where AI Companions Meet Blockchain Innovation",
    type: "website",
    locale: "en_US",
    siteName: "BASED JARVIS",
  },
  twitter: {
    card: "summary_large_image",
    title: "BASED JARVIS",
    description: "Where AI Companions Meet Blockchain Innovation",
    creator: "@jarvis",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
