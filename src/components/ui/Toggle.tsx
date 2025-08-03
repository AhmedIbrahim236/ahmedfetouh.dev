"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="outline"
      className="rounded-full w-10 h-10"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default Toggle;
