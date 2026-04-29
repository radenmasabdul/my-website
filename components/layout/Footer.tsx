import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import iconGithub from "@/public/icons/icon-github.svg";
import iconInstagram from "@/public/icons/icon-instagram.svg";
import iconLinkedIn from "@/public/icons/icon-linkedin.svg";
import iconMail from "@/public/icons/icon-mail.svg";
import iconThreads from "@/public/icons/icon-threads.svg";
import iconTiktok from "@/public/icons/icon-tiktok.svg";

export default function Footer() {
  const t = useTranslations("footer");

  const sectionClass = `footer-bg px-6 py-16 md:px-16 lg:px-20`;
  const headerClass = `flex flex-col justify-center items-center gap-2 mb-6 md:mb-10 text-black dark:text-white text-center
    font-sans font-medium text-lg md:text-xl lg:text-2xl`;

  return (
    <section className={sectionClass}>
      <div className={headerClass}>
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      <div className="flex flex-row justify-center items-center gap-4">
        <Link
          href="https://github.com/radenmasabdul"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          <Image src={iconGithub} alt="Github" width={30} height={30} />
        </Link>
        <Link
          href="https://linkedin.com/in/abdulrahmanalhafizh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          <Image src={iconLinkedIn} alt="LinkedIn" width={30} height={30} />
        </Link>
        <Link
          href="https://instagram.com/radenmasabdul"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          <Image src={iconInstagram} alt="Instagram" width={30} height={30} />
        </Link>
        <Link
          href="mailto:abdul.tamsis@gmail.com"
          className="hover:opacity-70 transition"
        >
          <Image src={iconMail} alt="Mail" width={30} height={30} />
        </Link>
        <Link
          href="https://threads.com/radenmasabdul"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          <Image src={iconThreads} alt="Threads" width={30} height={30} />
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
    </section>
  );
}