"use client";

import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import { useState } from "react";

export interface ProjectCardProps {
  image: StaticImageData;
  imageAlt: string;
  category: string;
  tags: string[];
  title: string;
  description: string;
  projectUrl?: string;
  buttonLabel: string;
  showButton?: boolean;
}

export default function ProjectCard({
  image,
  imageAlt,
  category,
  tags,
  title,
  description,
  projectUrl = "#",
  buttonLabel,
  showButton = true,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      className="relative flex flex-col w-full max-w-sm pt-0 overflow-hidden rounded-none shadow-md transition-shadow duration-300 hover:shadow-xl h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-t-2xl shrink-0">
        <Image
          src={image}
          alt={imageAlt}
          width={640}
          height={360}
          className={`aspect-video w-full object-cover p-2 rounded-2xl transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 640px"
        />
      </div>

      <CardHeader className="flex flex-col gap-2 px-5 pt-4 pb-2 flex-1">
        <span className="font-sans font-medium text-sm md:text-base lg:text-lg text-purple-950 dark:text-white">
          {category}
        </span>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-jakarta font-medium text-sm rounded-full px-3 py-3 bg-purple-900 text-white"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="font-sans font-semibold text-base md:text-lg lg:text-xl text-black dark:text-white leading-snug mt-1">
          {title}
        </CardTitle>
        <CardDescription className="font-sans font-normal text-sm md:text-base lg:text-lg text-gray-600 dark:text-white flex-1">
          {description}
        </CardDescription>
      </CardHeader>

      {showButton && (
        <div className="px-5 pb-5 mt-auto">
          <Button
            variant="outline"
            asChild
            className="min-w-1/2 rounded-none py-5 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950 transition cursor-pointer gap-2"
          >
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              {buttonLabel}
              <MoveRight size={15} />
            </a>
          </Button>
        </div>
      )}
    </Card>
  );
}