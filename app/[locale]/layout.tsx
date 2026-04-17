import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../styles/globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.radenmasabdul.my.id"),
  title: "Abdul Rahman Alhafizh",
  description: "Personal portfolio of Abdul Rahman Alhafizh — Frontend Developer specializing React.js, Next.js, Vue.js and modern web development.",
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      id: "/id",
      ja: "/ja",
    },
  },
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
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rahman Alhafizh",
    description: "Personal portfolio of Abdul Rahman Alhafizh — Frontend Developer specializing React.js, Next.js, Vue.js and modern web development.",
    images: ["/images/og-image.png"],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
  messages: Promise<{default: Record<string, string>}>;
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}