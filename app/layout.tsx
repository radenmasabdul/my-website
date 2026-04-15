import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./styles/globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.radenmasabdul.my.id"),
  title: "Abdul Rahman Alhafizh",
  description: "Personal portfolio of Abdul Rahman Alhafizh — Frontend Developer specializing React.js, Next.js, Vue.js and modern web development.",
  keywords: [
    "Abdul Rahman Alhafizh",
    "Abdul Rahman",
    "Raden Mas Abdul",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "Web Developer",
    "Frontend Engineer",
    "JavaScript Developer",
    "React.js",
    "Next.js",
    "Vue.js",
    "Portfolio",
  ],
  authors: [{ name: "Abdul Rahman Alhafizh" }],
  creator: "Abdul Rahman Alhafizh",
  publisher: "Abdul Rahman Alhafizh",
  icons: {
    icon: "/images/fav-icon.jpg",
  },
  openGraph: {
    title: "Abdul Rahman Alhafizh",
    description: "Personal portfolio of Abdul Rahman Alhafizh — Frontend Developer specializing in React.js, Next.js, Vue.js, and modern web development.",
    url: "https://www.radenmasabdul.my.id/",
    siteName: "Abdul Rahman Alhafizh",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Rahman Alhafizh",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rahman Alhafizh",
    description: "Personal portfolio of Abdul Rahman Alhafizh — Frontend Developer specializing React.js, Next.js, Vue.js and modern web development.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
