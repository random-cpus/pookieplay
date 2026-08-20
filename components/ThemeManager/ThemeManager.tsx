"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getThemeByPath } from "@/data/themes";

function ThemeSync() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const countryParam = searchParams?.get("country") || searchParams?.get("c");
    const theme = getThemeByPath(pathname || "", countryParam);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme.themeId);
      document.body.setAttribute("data-theme", theme.themeId);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function ThemeManager() {
  return (
    <Suspense fallback={null}>
      <ThemeSync />
    </Suspense>
  );
}
