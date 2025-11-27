import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seanliu.dev"),
  title: {
    default: "Sean Liu",
    template: "%s | Sichao (Sean) Liu",
  },
  description:
    "Senior Software Engineer with 8+ years of experience in AI, full-stack development, and scalable systems. Specializing in JavaScript, TypeScript, Python, React, and AI technologies.",
  keywords: [
    "Senior Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "LLMs",
    "React",
    "Python",
    "TypeScript",
    "Machine Learning",
    "FastAPI",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Sichao (Sean) Liu", url: "https://seanliu.dev" }],
  creator: "Sichao (Sean) Liu",
  publisher: "Sichao (Sean) Liu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sichao (Sean) Liu | Senior Software Engineer",
    description:
      "Senior Software Engineer with 8+ years of experience in AI, full-stack development, and scalable systems.",
    url: "https://seanliu.dev",
    siteName: "Sichao (Sean) Liu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sichao (Sean) Liu - Senior Software Engineer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Liu | Senior Software Engineer",
    description:
      "Senior Software Engineer with 8+ years of experience in AI, full-stack development, and scalable systems.",
    images: ["/og-image.png"],
    creator: "@seanliu",
    site: "@seanliu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "your-google-verification-code", // TODO: Add actual verification code
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sichao (Sean) Liu",
              url: "https://seanliu.dev",
              email: "sichliu.us@gmail.com",
              image: "https://seanliu.dev/og-image.png",
              sameAs: [
                "https://github.com/seanliu",
                "https://linkedin.com/in/seanliu",
              ],
              jobTitle: "Senior Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Scale AI",
              },
              description:
                "Senior Software Engineer with 8+ years of experience in AI, full-stack development, and scalable systems.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sichao (Sean) Liu Portfolio",
              url: "https://seanliu.dev",
              description:
                "Portfolio of Sichao (Sean) Liu, Senior Software Engineer",
              author: {
                "@type": "Person",
                name: "Sichao (Sean) Liu",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
