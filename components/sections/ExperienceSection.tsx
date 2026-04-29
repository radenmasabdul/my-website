import { useTranslations } from "next-intl";
import Image from "next/image";
import sisiImage from "@/public/images/image-sisi.svg";
import igloImage from "@/public/images/image-iglo.svg";
import jsdImage from "@/public/images/image-jsd.svg";
import zicareImage from "@/public/images/image-zi.svg";
import Download from "../features/Download";

export default function ExperienceSection() {
  const t = useTranslations("experience");

  const companies = [
    { src: sisiImage, alt: "SISI" },
    { src: igloImage, alt: "Iglo" },
    { src: jsdImage, alt: "Asuransi Jasindo" },
    { src: zicareImage, alt: "Zi.Care" },
  ];

  const sectionClass = `experience-bg px-6 py-16 md:px-16 lg:px-24`;
  const headerClass = `flex flex-col justify-center items-center gap-2 mb-6 md:mb-10 text-black dark:text-white text-center`;
  const expClass = `w-full mx-auto rounded-2xl md:rounded-3xl px-4 py-6 md:px-10 md:py-10 shadow-xl
    bg-[linear-gradient(135deg,#130428_0%,#251043_25%,#38126D_50%,#261045_75%,#190634_100%)]`;

  return (
    <section className={sectionClass}>
      <div className={headerClass}>
        <h2 className="font-sans font-semibold text-2xl md:text-3xl lg:text-4xl">
          {t("title")}
        </h2>
        <p className="font-jakarta font-medium text-lg md:text-xl lg:text-2xl text-[#515760] dark:text-white">
          {t("header")}
        </p>
      </div>

      <div className={expClass}>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="text-center shrink-0">
            <h3 className="text-white font-bold font-sans text-5xl md:text-6xl leading-none">
              2+
            </h3>
            <p className="font-sans font-medium text-sm md:text-lg lg:text-xl text-purple-400 mt-1">
              {t("years")}
            </p>
          </div>

          <div className="hidden md:block w-px self-stretch bg-purple-700/40" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-sm flex items-center justify-center p-3"
              >
                <Image
                  src={company.src}
                  alt={company.alt}
                  className="object-contain w-full h-full max-h-10 md:max-h-10 lg:max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 md:mt-10">
        <Download label={t("button.download")} />
      </div>
    </section>
  );
}