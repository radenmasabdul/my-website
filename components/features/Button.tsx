"use client";

import { Button } from "../ui/button";
import { ChevronDown, Download, Phone } from "lucide-react";

export function ButtonContact({ label }: { label: string }) {
  return (
    <Button
      className="hidden lg:flex rounded-sm bg-purple-600 hover:opacity-80 p-5 text-sm transition whitespace-nowrap cursor-pointer"
      onClick={() => window.open("https://wa.me/628988416727", "_blank")}
    >
      <Phone size={15} className="text-white" />
      <span className="font-jakarta font-bold text-sm text-white">{label}</span>
    </Button>
  );
}

export function ButtonView({ label }: { label: string }) {
  return (
    <Button
      className="rounded-none py-5 bg-purple-600 hover:opacity-80 px-5 transition cursor-pointer"
      onClick={() =>
        document
          .getElementById("project")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <span className="font-sans font-semibold text-xs md:text-sm lg:text-base text-white">
        {label}
      </span>
    </Button>
  );
}

export function ButtonDownload({ label }: { label: string }) {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/CV_ABDUL_RAHMAN_ALHAFIZH.pdf";
    link.download = "CV_ABDUL_RAHMAN_ALHAFIZH.pdf";
    link.click();
  };

  const downloadClass = `rounded-none py-5 border-purple-500 dark:border-purple-500 text-purple-500
    hover:opacity-80 dark:hover:opacity-80 px-5 transition cursor-pointer`;

  return (
    <Button variant="outline" onClick={downloadCV} className={downloadClass}>
      <Download size={15} className="text-purple-600 dark:text-white" />
      <span className="font-sans font-semibold text-xs md:text-sm lg:text-base text-purple-600 dark:text-white">
        {label}
      </span>
    </Button>
  );
}

export function ButtonScrollDown() {
  const chevronClass = `w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-purple-500
    bg-white dark:bg-[linear-gradient(135deg,#130428_0%,#251043_25%,#38126D_50%,#261045_75%,#190634_100%)]
    hover:bg-purple-500 group transition cursor-pointer`;

  return (
    <div className="absolute bottom-3 md:bottom-40 lg:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
      <Button
        variant="outline"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className={chevronClass}
        aria-label="Scroll down"
      >
        <ChevronDown
          size={20}
          className="text-black dark:text-white group-hover:text-white transition"
        />
      </Button>
    </div>
  );
}