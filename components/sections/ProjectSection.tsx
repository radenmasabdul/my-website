import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import ProjectGrid from "../features/ProjectGrid";
import birthdayImage from "@/public/images/birthday-app.webp";
import lawImage from "@/public/images/hp-law-app.webp";
import esppaImage from "@/public/images/jsd-esppa-app.webp";
import healthImage from "@/public/images/jsd-health-app.webp";
import claimImage from "@/public/images/jsd-kbm-app.webp";
import ruangImage from "@/public/images/jsd-rdj-app.webp";
import nexoraApiImage from "@/public/images/nexora-api-app.webp";
import nexoraAppImage from "@/public/images/nexora-app.webp";
import pokedexImage from "@/public/images/pokedex-app.webp";
import ziImage from "@/public/images/zi-app.webp";
import zihubImage from "@/public/images/zihub-app.webp";

interface RawProject {
  image: StaticImageData;
  tags: string[];
  category: string;
  projectUrl?: string;
};

const WORKING_META: Record<string, RawProject> = {
  first: {
    image: zihubImage,
    tags: ["Svelte.js", "Typescript", "Javascript", "Tailwind CSS"],
    category: "Healthcare",
    projectUrl: "#",
  },
  second: {
    image: ziImage,
    tags: ["Svelte.js", "Typescript", "Javascript", "Tailwind CSS"],
    category: "Healthcare",
    projectUrl: "#",
  },
  third: {
    image: esppaImage,
    tags: ["React.js", "Typescript", "Javascript", "Tailwind CSS"],
    category: "Insurance",
    projectUrl: "#",
  },
  fourth: {
    image: ruangImage,
    tags: ["React.js", "Typescript", "Tailwind CSS"],
    category: "Enterprise",
    projectUrl: "#",
  },
  fifth: {
    image: claimImage,
    tags: ["React.js", "Javascript", "Tailwind CSS"],
    category: "Insurance",
    projectUrl: "#",
  },
  sixth: {
    image: healthImage,
    tags: ["React.js", "Javascript", "Tailwind CSS"],
    category: "Healthcare",
    projectUrl: "#",
  },
};

const PORTFOLIO_META: Record<string, RawProject> = {
  first: {
    image: nexoraAppImage,
    tags: ["React.js", "Typescript", "Tailwind CSS"],
    category: "Dashboard",
    projectUrl: "https://nexora-theta-lemon.vercel.app/",
  },
  second: {
    image: nexoraApiImage,
    tags: ["Node.js", "Express.js", "Javascript", "PostgreSQL", "Prisma"],
    category: "Backend",
    projectUrl: "https://nexora-api-rho.vercel.app/api-docs/#/",
  },
  third: {
    image: lawImage,
    tags: ["React.js", "Typescript", "Tailwind CSS"],
    category: "Landing Page",
    projectUrl: "https://hp-law.vercel.app/",
  },
  fourth: {
    image: birthdayImage,
    tags: ["React.js", "Typescript", "Tailwind CSS"],
    category: "Personal",
    projectUrl: "https://hp-law.vercel.app/",
  },
  fifth: {
    image: pokedexImage,
    tags: ["React.js", "Typescript", "Tailwind CSS"],
    category: "Web App",
    projectUrl: "https://pokedex-chi-three-25.vercel.app/",
  },
};

export default function ProjectSection() {
  const t = useTranslations("projects");

  const buildProjects = (
    translationKey: "app.main.working" | "app.main.portfolio",
    meta: Record<string, RawProject>,
    buttonLabel: string,
    showButton: boolean,
  ) =>
    Object.entries(meta).map(
      ([key, { image, tags, category, projectUrl }]) => ({
        image,
        imageAlt: `${t(`${translationKey}.${key}.name`)} cover`,
        category,
        tags,
        title: t(`${translationKey}.${key}.name`),
        description: t(`${translationKey}.${key}.description`),
        projectUrl,
        buttonLabel,
        showButton,
      }),
    );

  const workingProjects = buildProjects(
    "app.main.working",
    WORKING_META,
    t("button.project"),
    false,
  );
  const portfolioProjects = buildProjects(
    "app.main.portfolio",
    PORTFOLIO_META,
    t("button.project"),
    true,
  );

  const sectionClass = `project-bg px-6 py-16 md:px-16 lg:px-24`;
  const headerClass = `flex flex-col justify-center items-center gap-2 mb-8 md:mb-12 text-black dark:text-white text-center`;

  return (
    <section className={sectionClass}>
      <div className={headerClass}>
        <h2 className="font-sans font-semibold text-2xl md:text-3xl lg:text-4xl">
          {t("title")}
        </h2>
        <p className="font-jakarta font-medium text-base md:text-lg lg:text-xl text-[#515760] dark:text-gray-300 max-w-xl">
          {t("header")}
        </p>
      </div>

      <ProjectGrid
        workingProjects={workingProjects}
        portfolioProjects={portfolioProjects}
      />
    </section>
  );
}