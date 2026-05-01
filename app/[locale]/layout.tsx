import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://www.radenmasabdul.my.id";

const localeMap: Record<string, string> = {
  en: "en_US",
  id: "id_ID",
  ja: "ja_JP",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }>}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL(BASE_URL),
    title: "Abdul Rahman Alhafizh",
    description:
      "Personal portfolio of Abdul Rahman Alhafizh — Frontend Developer specializing React.js, Next.js, Vue.js and modern web development.",
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
      icon: "/images/fav-icon.png",
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        id: `${BASE_URL}/id`,
        ja: `${BASE_URL}/ja`,
        "x-default": `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title: "Abdul Rahman Alhafizh",
      description:
        "Personal portfolio of Abdul Rahman Alhafizh — Frontend Developer specializing in React.js, Next.js, Vue.js, and modern web development.",
      url: `${BASE_URL}/${locale}`,
      siteName: "Abdul Rahman Alhafizh",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Abdul Rahman Alhafizh",
        },
      ],
      locale: localeMap[locale] ?? "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Abdul Rahman Alhafizh",
      description:
        "Personal portfolio of Abdul Rahman Alhafizh — Frontend Developer specializing React.js, Next.js, Vue.js and modern web development.",
      images: ["/images/og-image.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${workSans.variable} ${jakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}