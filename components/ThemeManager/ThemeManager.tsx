"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getThemeByPath } from "@/data/themes";

export default function ThemeManager() {
  const pathname = usePathname();

  useEffect(() => {
    let countryParam: string | null = null;
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      countryParam = urlParams.get("country") || urlParams.get("c");
    }
    const theme = getThemeByPath(pathname || "", countryParam);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme.themeId);
      document.body.setAttribute("data-theme", theme.themeId);
    }
  }, [pathname]);

  return null;
}
