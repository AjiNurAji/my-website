import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { CatIcon, ChevronUp, MenuSquareIcon } from "lucide-react";
import { ThemeToggle } from "../../theme/theme-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useState } from "react";
import { MenuMobileTrigger } from "./nav-menu/menu-mobile-trigger";

export const Header = () => {
  const [open, setOpen] = useState<string>("");

  return (
    <div data-state={open} className="group peer h-fit">
      <MenuMobileTrigger open={open} setOpen={setOpen} />
      
      <div className="mx-auto p-3 fixed top-0 left-0 w-full z-50 max-sm:-bottom-20 max-sm:top-auto max-sm:group-data-[state=open]:bottom-0 transition-[bottom] ease-linear duration-300">
        <Card className="flex flex-row justify-between items-center px-4 py-3 ">
          <a className="inline-block">
            <CatIcon />
          </a>

          <nav className="sm:block hidden">
            <Button
              variant="link"
              className="cursor-pointer hover:no-underline"
            >
              Home
            </Button>
            <Button
              variant="link"
              className="cursor-pointer text-muted-foreground hover:text-primary hover:no-underline"
            >
              Projects
            </Button>
            <Button
              variant="link"
              className="cursor-pointer text-muted-foreground hover:text-primary hover:no-underline"
            >
              About
            </Button>
            <Button
              variant="link"
              className="cursor-pointer text-muted-foreground hover:text-primary hover:no-underline"
            >
              Contact
            </Button>
          </nav>

          <div className="sm:hidden block">
            <Button
              variant="outline"
              className="cursor-pointer text-muted-foreground hover:text-primary rounded-full"
            >
              <MenuSquareIcon />
              Menu
            </Button>
          </div>

          <div>
            <ThemeToggle />
          </div>
        </Card>
      </div>
    </div>
  );
};
