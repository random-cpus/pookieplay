"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getThemeByPath } from "@/data/themes";

export default function ThemeManager() {
 const pathname = usePathname();

 useEffect(() => {
 const theme = getThemeByPath(pathname || '');
 if (typeof document !== 'undefined') {
 document.documentElement.setAttribute('data-theme', theme.themeId);
 document.body.setAttribute('data-theme', theme.themeId);
 }
 }, [pathname]);

 return null;
}
