/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { ChevronDown, Globe, Menu, X, Phone } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import LogoBlack from "@/public/images/logo-black.png";
import LogoWhite from "@/public/images/logo-white.png";
import SwitchMode from "./SwitchMode";

const localeLabels: Record<string, string> = {
  en: "English",
  id: "Indonesia",
  ja: "日本語",
};

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: "home", key: "home" },
    { id: "about", key: "about" },
    { id: "project", key: "project" },
    { id: "experience", key: "experience" },
    { id: "sign", key: "sign" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        });
      },
      { threshold: 0.5 }
    );

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [])

  return (
    <header className="bg-white dark:bg-black w-full sticky top-0 z-50">
      <div className="w-full px-4 md:px-6 lg:px-10 py-4 flex items-center justify-between gap-2">
        <div className="shrink-0">
          <Image src={LogoBlack} alt="logo" className="h-7 md:h-8 lg:h-9 w-auto dark:hidden" />
          <Image src={LogoWhite} alt="logo" className="h-7 md:h-8 lg:h-9 w-auto hidden dark:block" />
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-sans flex-1 justify-center">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-jakarta text-sm font-medium transition whitespace-nowrap cursor-pointer
                ${activeSection === item.id
                  ? "text-purple-600"
                  : "text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-600"
                }`
              }
            >
              {t(item.key)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-4 lg:gap-4 shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2 h-9">
                <Globe size={15} className="text-black dark:text-white" />
                <span className="font-jakarta text-sm font-normal text-black dark:text-white">
                  {locale.charAt(0).toUpperCase() + locale.slice(1).toLowerCase()}
                </span>
                <ChevronDown size={13} className="text-black dark:text-white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.entries(localeLabels).map(([code, label]) => (
                <DropdownMenuItem key={code} onClick={() => switchLocale(code)}>
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <SwitchMode />

          <Button
            onClick={() => window.open("https://wa.me/628988416727","_blank")}
            className="hidden lg:flex rounded-sm bg-purple-600 hover:opacity-80 p-5 text-sm transition whitespace-nowrap"
          >
            <Phone size={15} className="text-white"/>
            <span className="font-jakarta font-bold text-sm text-white"> {t("contact")}</span>
          </Button>

          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md bg-transparent text-black dark:text-white transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-zinc-800 bg-white dark:bg-black px-4 py-4">
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-jakarta text-sm font-medium transition whitespace-nowrap cursor-pointer
                  ${activeSection === item.id
                    ? "text-purple-500"
                    : "text-black dark:text-white hover:text-purple-500 dark:hover:text-purple-500"
                  }`
                }
              >
                {t(item.key)}
              </button>
            ))}

            <Button
              onClick={() => window.open("https://wa.me/628988416727","_blank")}
              className="mt-3 w-full justify-center rounded-sm bg-purple-600 dark:bg-purple-600 text-white dark:text-black hover:opacity-80"
            >
              <Phone size={15} />
              <span className="font-jakarta font-bold text-sm ml-2">{t("contact")}</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}