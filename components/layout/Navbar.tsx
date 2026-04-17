"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

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

    const switchLocale = (next: string) => {
        router.replace(pathname, { locale: next });
    };
    
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b">
            <span className="font-bold text-lg">{t("home")}</span>
            
            <ul className="flex gap-6 text-sm">
                <li>{t("about")}</li>
                <li>{t("project")}</li>
                <li>{t("experience")}</li>
                <li>{t("contact")}</li>
            </ul>
            
            <div className="flex gap-2">
                {["en", "id", "ja"].map((loc) => (
                    <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={`px-3 py-1 border rounded text-sm ${
                        locale === loc
                            ? "bg-black text-white"
                            : "hover:bg-gray-100"
                        }`}
                    >
                        {localeLabels[loc]}
                    </button>
                ))}
            </div>
        </nav>
    );
}