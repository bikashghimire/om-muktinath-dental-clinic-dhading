import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="focus:outline-none rounded-full hover:bg-primary/10 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100 text-amber-500"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "scale-100 opacity-100 text-indigo-400" : "scale-0 opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
