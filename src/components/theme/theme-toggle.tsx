import { Button } from "../ui/button";
import { useTheme } from "./theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full cursor-pointer relative"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="w-5 h-5 -rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
      <MoonIcon className="absolute w-5 h-5 rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
    </Button>
  );
};
