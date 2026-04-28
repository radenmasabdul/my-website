"use client";

import { Button } from "../ui/button";
import { Download as DownloadIcon } from "lucide-react";

export default function Download({ label }: { label: string }) {

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/CV_ABDUL_RAHMAN_ALHAFIZH.pdf";
    link.download = "CV_ABDUL_RAHMAN_ALHAFIZH.pdf";
    link.click();
  };

  const downloadClass = `rounded-none py-5 border-purple-500 dark:border-purple-500 text-purple-500
    hover:bg-teal-50 dark:hover:bg-teal-950 px-5 transition cursor-pointer`;

  return (
    <Button variant="outline" onClick={downloadCV} className={downloadClass}>
      <DownloadIcon size={15} className="text-purple-600 dark:text-white" />
      <span className="font-sans font-semibold text-xs md:text-sm lg:text-base text-purple-600 dark:text-white">
        {label}
      </span>
    </Button>
  );
}
