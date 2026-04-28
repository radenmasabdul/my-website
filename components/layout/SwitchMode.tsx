"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export default function SwitchMode() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) return <div className="w-14 h-7" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-14 h-7 rounded-full transition-all duration-300 ${
        isDark
          ? "bg-linear-to-r from-purple-600 to-violet-500"
          : "bg-linear-to-r from-orange-600 to-orange-400"
      }`}
      aria-label="Toggle theme"
    >
      <span
        className={`absolute flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ${
          isDark ? "translate-x-8" : "translate-x-1"
        }`}
      >
        {isDark ? (
          <Moon size={11} className="text-purple-600" />
        ) : (
          <Sun size={11} className="text-orange-500" />
        )}
      </span>
    </button>
  );
}