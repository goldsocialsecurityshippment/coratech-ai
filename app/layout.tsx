import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coratechai.com"),
  title: {
    default: "Coratech AI — Enterprise AI and Technology Infrastructure | Accra, Ghana",
    template: "%s | Coratech AI Ghana",
  },
  description: "Coratech AI is a Ghana-based enterprise technology company building AI automation, compliance systems, data intelligence and digital infrastructure for organisations in Africa and beyond.",
  keywords: ["AI company Ghana", "enterprise AI Africa", "artificial intelligence Accra", "AI automation Ghana", "digital transformation Ghana", "enterprise software Africa", "AI consulting Accra", "Coratech AI", "Canmore Digital", "machine learning Ghana"],
  authors: [{ name: "Coratech AI" }],
  creator: "Coratech AI",
  publisher: "Coratech AI",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://coratechai.com",
    siteName: "Coratech AI",
    title: "Coratech AI — Enterprise AI and Technology Infrastructure | Ghana",
    description: "Ghana-based enterprise technology company building AI systems, automation platforms and digital infrastructure for organisations in Africa and globally.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coratech AI — Enterprise AI from Ghana",
    description: "Building AI systems and digital infrastructure for enterprise organisations in Africa and beyond.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "5dXLmp2xIe2i3xqPkN2Q7KiiEAsayer1YKKc6KP8UxU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
