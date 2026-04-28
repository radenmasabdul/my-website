"use client";

import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

export default function ScrollDown() {
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
