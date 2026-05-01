import { useTranslations } from "next-intl";
import iconGithub from "@/public/icons/icon-github.svg";
import iconInstagram from "@/public/icons/icon-instagram.svg";
import iconLinkedIn from "@/public/icons/icon-linkedin.svg";
import iconMail from "@/public/icons/icon-mail.svg";
import iconThreads from "@/public/icons/icon-threads.svg";
import iconTiktok from "@/public/icons/icon-tiktok.svg";
import SocialBar from "../features/SocialBar";

export default function Footer() {
  const t = useTranslations("footer");

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

  const sectionClass = `footer-bg px-6 py-16 md:px-16 lg:px-20`;
  const headerClass = `flex flex-col justify-center items-center gap-2 mb-6 md:mb-10 text-black dark:text-white text-center
    font-sans font-medium text-lg md:text-xl lg:text-2xl`;

  return (
    <section className={sectionClass}>
      <div className={headerClass}>
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      <SocialBar
        links={socialLinks}
        iconSize={30}
        withBackground={false}
        className="justify-center w-auto gap-4"
      />
    </section>
  );
}