import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  CatIcon,
  ContactRoundIcon,
  FolderClosedIcon,
  HouseIcon,
  UserRoundIcon,
} from "lucide-react";
import { ThemeToggle } from "~/components/theme/theme-toggle";
import { useState } from "react";
import { MenuMobileTrigger } from "./nav-menu/menu-mobile-trigger";
import { MobileMenu } from "./nav-menu/mobile-menu";

export const Header = () => {
  const [open, setOpen] = useState<string>("");

  return (
    <div data-state={open} className="group peer h-fit">
      <MenuMobileTrigger open={open} setOpen={setOpen} />

      <div className="mx-auto p-3 fixed top-0 left-0 w-full z-50 max-sm:-bottom-20 max-sm:top-auto max-sm:group-data-[state=open]:bottom-0 transition-[bottom] ease-linear duration-300">
        <Card className="flex flex-row justify-between items-center px-4 py-3">
          <a className="inline-block">
            <CatIcon />
          </a>

          <nav className="sm:block hidden">
            <Button
              variant="link"
              className="cursor-pointer hover:no-underline"
            >
              <HouseIcon />
              Home
            </Button>
            <Button
              variant="link"
              className="cursor-pointer text-muted-foreground hover:text-primary hover:no-underline"
            >
              <FolderClosedIcon />
              Projects
            </Button>
            <Button
              variant="link"
              className="cursor-pointer text-muted-foreground hover:text-primary hover:no-underline"
            >
              <UserRoundIcon />
              About
            </Button>
            <Button
              variant="link"
              className="cursor-pointer text-muted-foreground hover:text-primary hover:no-underline"
            >
              <ContactRoundIcon />
              Contact
            </Button>
          </nav>

          <MobileMenu />

          <div>
            <ThemeToggle />
          </div>
        </Card>
      </div>
    </div>
  );
};
