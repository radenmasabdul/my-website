import Navbar from "@/components/layout/Navbar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("content");
  
  return (
    <>
      <Navbar />

      <main className="p-8 space-y-4">
        <h1 className="text-4xl font-bold text-red-500">
          {t("title")}
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
          {t("description")}
        </p>
      </main>
    </>
  )
}