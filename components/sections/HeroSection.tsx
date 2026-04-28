import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ProfileImage from "@/public/images/profile.webp";
import { Button } from "../ui/button";
import Download from "../features/Download";
import ScrollDown from "../features/ScrollDown";
import iconGithub from "@/public/icons/icon-github.svg";
import iconInstagram from "@/public/icons/icon-instagram.svg";
import iconLinkedIn from "@/public/icons/icon-linkedin.svg";
import iconMail from "@/public/icons/icon-mail.svg";
import iconThreads from "@/public/icons/icon-threads.svg";
import iconTiktok from "@/public/icons/icon-tiktok.svg";

export default function HeroSection() {
  const t = useTranslations("content");
  
  const sectionClass = `hero-bg relative w-full min-h-[calc(100vh-64px)] flex flex-col-reverse md:flex-row items-center 
    p-4 md:px-10 md:py-8 lg:px-24 lg:py-20 gap-4 md:gap-8 lg:gap-16`;

  const headingClass = `space-y-1 font-sans font-semibold text-2xl md:text-3xl lg:text-5xl
    text-black dark:text-white leading-tight`;

  const descClass = `space-y-1 text-sm md:text-base lg:text-xl font-jakarta font-medium
    text-gray-700 dark:text-white`;

  const socialbarClass = `absolute left-1/2 -translate-x-1/2 flex flex-row items-center justify-around
    bg-white dark:bg-[linear-gradient(135deg,#130428_0%,#251043_25%,#38126D_50%,#261045_75%,#190634_100%)]
    px-4 py-4 gap-3 md:gap-4 w-full rounded-sm`;

  return (
    <section className={sectionClass}>
      <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left gap-5">
        
        <div className="flex flex-col gap-4 lg:gap-8">
          <div className={headingClass}>
            <p>{t("title")}</p>
            <p>{t("name")}</p>
          </div>
          
          <div className={descClass}>
            <p>{t("description.paragraph-1")}</p>
            <p>{t("description.paragraph-2")}</p>
            <p>{t("description.paragraph-3")}</p>
          </div>
        </div>

        <div className="flex flex-row gap-3 py-5 lg:py-10">
          <Button className="rounded-none py-5 bg-purple-600 hover:opacity-80 px-5 transition cursor-pointer">
            <span className="font-sans font-semibold text-xs md:text-sm lg:text-base text-white">
              {t("button.view")}
            </span>
          </Button>

          <Download label={t("button.download")} />
        </div>
      </div>

      <div className="shrink-0 relative w-56 md:w-72 lg:w-96 pb-20 md:pb-20 lg:pb-0">
        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 overflow-hidden">
          <Image
            src={ProfileImage}
            alt="profile-image"
            loading="eager"
            fetchPriority="high"
            fill
            sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 384px"
            className="object-cover"
          />
        </div>
        
        <div className={socialbarClass}>
          <Link href="https://github.com/radenmasabdul" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
            <Image src={iconGithub} alt="Github" width={20} height={20} />
          </Link>
          <Link href="https://linkedin.com/in/abdulrahmanalhafizh" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
            <Image src={iconLinkedIn} alt="LinkedIn" width={20} height={20} />
          </Link>
          <Link href="https://instagram.com/radenmasabdul" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
            <Image src={iconInstagram} alt="Instagram" width={20} height={20} />
          </Link>
          <Link href="mailto:abdul.tamsis@gmail.com" className="hover:opacity-70 transition">
            <Image src={iconMail} alt="Mail" width={20} height={20} />
          </Link>
          <Link href="https://threads.com/radenmasabdul" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
            <Image src={iconThreads} alt="Threads" width={20} height={20} />
          </Link>
          <Link href="https://tiktok.com/@sebariscode" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
            <Image src={iconTiktok} alt="TikTok" width={20} height={20} />
          </Link>
        </div>
      </div>
      <ScrollDown />
    </section>
  );
}