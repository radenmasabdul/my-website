import Image from "next/image";
import { useTranslations } from "next-intl";
import ProfileImage from "@/public/images/profile.webp";
import iconGithub from "@/public/icons/icon-github.svg";
import iconInstagram from "@/public/icons/icon-instagram.svg";
import iconLinkedIn from "@/public/icons/icon-linkedin.svg";
import iconMail from "@/public/icons/icon-mail.svg";
import iconThreads from "@/public/icons/icon-threads.svg";
import iconTiktok from "@/public/icons/icon-tiktok.svg";
import { ButtonView, ButtonDownload, ButtonScrollDown } from "../features/Button";
import SocialBar from "../features/SocialBar";

export default function HeroSection() {
  const t = useTranslations("content");

  const socialLinks = [
    {
      href: "https://github.com/radenmasabdul",
      icon: iconGithub,
      alt: "Github",
    },
    {
      href: "https://linkedin.com/in/abdulrahmanalhafizh",
      icon: iconLinkedIn,
      alt: "LinkedIn",
    },
    {
      href: "https://instagram.com/radenmasabdul",
      icon: iconInstagram,
      alt: "Instagram",
    },
    {
      href: "mailto:abdul.tamsis@gmail.com",
      icon: iconMail,
      alt: "Mail",
      external: false,
    },
    {
      href: "https://threads.com/radenmasabdul",
      icon: iconThreads,
      alt: "Threads",
    },
    {
      href: "https://tiktok.com/@sebariscode",
      icon: iconTiktok,
      alt: "TikTok",
    },
  ];
  
  const sectionClass = `hero-bg relative w-full min-h-[calc(100vh-64px)] flex flex-col-reverse md:flex-row items-center 
    p-4 md:px-10 md:py-8 lg:px-24 lg:py-20 gap-4 md:gap-8 lg:gap-16`;

  const headingClass = `space-y-1 font-sans font-semibold text-2xl md:text-3xl lg:text-5xl
    text-black dark:text-white leading-tight`;

  const descClass = ` text-sm md:text-base lg:text-xl font-jakarta font-medium
    text-gray-700 dark:text-white text-justify`;

  return (
    <section className={sectionClass}>
      <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left gap-5">
        <div className="flex flex-col gap-4 lg:gap-8">
          <div className={headingClass}>
            <p>{t("title")}</p>
            <p>{t("name")}</p>
          </div>

          <div className={descClass}>
            <p>{t("description")}</p>
            {/* <p>{t("description.paragraph-1")}</p>
            <p>{t("description.paragraph-2")}</p>
            <p>{t("description.paragraph-3")}</p> */}
          </div>
        </div>

        <div className="flex flex-row gap-3 py-5 lg:py-10">
          <ButtonView label={t("button.view")} />
          <ButtonDownload label={t("button.download")} />
        </div>
      </div>

      <div className="shrink-0 relative w-56 md:w-72 lg:w-96 pb-20 md:pb-20 lg:pb-0">
        <div className="relative w-56 h-56 mb-0 md:w-72 md:h-72 lg:w-96 lg:h-96 lg:mb-24 overflow-hidden">
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

        <SocialBar
          links={socialLinks}
          className="absolute bottom-7 lg:bottom-12 left-1/2 -translate-x-1/2"
          iconSize={20}
        />
      </div>

      <ButtonScrollDown />
    </section>
  );
}