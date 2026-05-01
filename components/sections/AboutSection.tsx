import { useTranslations } from "next-intl";
import { CardContent, CardTitle } from "../ui/card";
import { CodeXml } from "lucide-react";

const SkillRow = ({ title, technologies }: { title: string; technologies: string }) => (
  <div className="py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
    <p className="font-sans font-medium text-lg md:text-xl lg:text-2xl text-black dark:text-white mb-1">
      {title}
    </p>
    <p className="font-sans font-normal text-base md:text-lg lg:text-xl text-[#515760] dark:text-white">
      {technologies}
    </p>
  </div>
);

export default function AboutSection() {
  const t = useTranslations("about");

  const skills = [
    {
      name: t("skill.description.stack.title.frontend.name"),
      technologies: t("skill.description.stack.title.frontend.technologies"),
    },
    {
      name: t("skill.description.stack.title.backend.name"),
      technologies: t("skill.description.stack.title.backend.technologies"),
    },
    {
      name: t("skill.description.stack.title.database.name"),
      technologies: t("skill.description.stack.title.database.technologies"),
    },
    {
      name: t("skill.description.stack.title.testing.name"),
      technologies: t("skill.description.stack.title.testing.technologies"),
    },
  ];

  const paragraphs = [
    t("description.paragraph-1"),
    t("description.paragraph-2"),
    t("description.paragraph-3"),
    t("description.paragraph-4"),
    t("description.paragraph-5"),
  ];

  const sectionClass = `about-bg px-6 py-4 lg:py-20 md:px-16 lg:px-24`;
  const headerClass = `flex flex-col justify-center items-center gap-2 mb-6 md:mb-10 text-black dark:text-white text-center`;
  const contentClass = `grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mx-auto`
  const cardClass = `w-full p-5 shadow-lg border-none rounded-xl order-2 lg:order-1 dark:bg-transparent`;
  const descClass = `flex flex-col gap-4 font-sans font-normal text-sm md:text-base lg:text-lg leading-relaxed
    text-black dark:text-white text-justify order-1 lg:order-2`;

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

      <div className={contentClass}>
        <div className={cardClass}>
          <CardTitle className="flex items-center gap-2 pt-5">
            <span className="font-sans font-semibold text-xl md:text-2xl lg:text-[28px] text-black dark:text-white">
              {t("skill.title")}
            </span>
            <CodeXml size={26} className="text-purple-500" />
          </CardTitle>

          <CardContent className="p-0!">
            {skills.map((skill) => (
              <SkillRow
                key={skill.name}
                title={skill.name}
                technologies={skill.technologies}
              />
            ))}
          </CardContent>
        </div>

        <div className={descClass}>
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}