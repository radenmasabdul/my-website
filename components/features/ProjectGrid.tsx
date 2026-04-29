"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

interface ProjectGridProps {
  workingProjects: ProjectCardProps[];
  portfolioProjects: ProjectCardProps[];
}

export default function ProjectGrid({
  workingProjects,
  portfolioProjects,
}: ProjectGridProps) {
  const t = useTranslations("projects.tabs");
  const [activeTab, setActiveTab] = useState<"working" | "portfolio">(
    "working",
  );

  const projects =
    activeTab === "working" ? workingProjects : portfolioProjects;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center gap-3">
        {(["working", "portfolio"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-sans font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === tab
                ? "bg-purple-600 text-white shadow"
                : "bg-white dark:bg-neutral-800 text-[#515760] dark:text-gray-300 border border-gray-200 dark:border-neutral-700 hover:border-purple-400"
            }`}
          >
            {t(tab)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-stretch">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
}