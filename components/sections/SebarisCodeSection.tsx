import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardTitle } from "../ui/card";
import { CodeXml } from "lucide-react";
import imageArrow from "@/public/images/image-arrow.svg";
import imageAccount from "@/public/images/image-account.webp";
import imageFirst from "@/public/images/image-post-01.webp";
import imageSecond from "@/public/images/image-post-02.webp";
import iconInstagram from "@/public/icons/icon-instagram.svg";
import iconTiktok from "@/public/icons/icon-tiktok.svg";

export default function SebarisCodeSection() {
  const t = useTranslations("sc");
  const sectionClass = `sc-bg px-6 py-20 md:px-16 lg:px-24`;
  const contentClass = `grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mx-auto`;
  const leftContentClass = `relative flex justify-center lg:justify-start min-h-105 md:min-h-120 lg:min-h-130`;

  return (
    <section className={sectionClass}>
      <div className={contentClass}>
        <div className={leftContentClass}>
          <div className="sc-account">
            <Image src={imageAccount} alt="Account" />
          </div>

          <div className="sc-second">
            <Image src={imageSecond} alt="Second" />
          </div>

          <div className="sc-first">
            <Image src={imageFirst} alt="First" />
          </div>

          <div className="sc-arrow">
            <Image
              src={imageArrow}
              alt="Arrow"
              width={120}
              height={120}
              className="w-auto h-auto"
            />
          </div>
        </div>

        <Card className="p-5">
          <CardTitle className="flex flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-sans font-semibold text-xl md:text-2xl lg:text-[28px] text-black dark:text-[#C7D6EC]">
                Sebaris Kode
              </span>
              <CodeXml size={26} className="text-purple-500" />
            </div>

            <div className="flex items-center justify-end gap-2">
              <Link
                href="https://instagram.com/radenmasabdul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <Image
                  src={iconInstagram}
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </Link>

              <Link
                href="https://tiktok.com/@sebariscode"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <Image src={iconTiktok} alt="TikTok" width={30} height={30} />
              </Link>
            </div>
          </CardTitle>

          <CardContent className="p-0!">
            <p className="font-sans font-normal text-base md:text-lg lg:text-xl text-black dark:text-[#C7D6EC] text-justify">
              {t("description")}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
