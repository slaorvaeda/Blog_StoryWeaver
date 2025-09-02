import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header, AOSProvider } from "../components/ui";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Story Weaver - Tales & Adventures",
  description: "A storyteller's blog where imagination meets reality through captivating tales and adventures",
  keywords: "stories, storytelling, fantasy, adventure, romance, mystery, blog, fiction",
  authors: [{ name: "Sarah Weaver" }],
  creator: "Story Weaver",
  publisher: "Story Weaver",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://storyweaver.com'),
  openGraph: {
    title: "Story Weaver - Tales & Adventures",
    description: "A storyteller's blog where imagination meets reality through captivating tales and adventures",
    url: 'https://storyweaver.com',
    siteName: 'Story Weaver',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Story Weaver - Tales & Adventures',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Story Weaver - Tales & Adventures",
    description: "A storyteller's blog where imagination meets reality through captivating tales and adventures",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Fallback favicon link */}
        <link rel="icon" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <AOSProvider>
          {/* Main Navigation */}
          <Header
            title="Story"
            subtitle="Weaver"
            navItems={["Home", "Stories", "About", "Contact"]}
            showSearch={true}
          />

          {/* Page Content */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <Footer />
       
        </AOSProvider>
      </body>
    </html>
  );
}
