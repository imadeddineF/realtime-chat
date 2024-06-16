"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid rehydration errors
  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger value="light" onClick={toggleTheme}>
          {/* <SunIcon className="h-[1.2rem] w-[1.2rem]" /> */}
          {theme === "light" ? (
            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
          )}
        </TabsTrigger>
        {/* <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
        </TabsTrigger> */}
      </TabsList>
    </Tabs>
  );
}
