import { Card } from "~/components/ui/card";
import {
  CatIcon,
  ContactRoundIcon,
  FolderClosedIcon,
  HouseIcon,
  UserRoundIcon,
} from "lucide-react";
import { ThemeToggle } from "~/components/theme/theme-toggle";
import React, { useState } from "react";
import { MenuMobileTrigger } from "./nav-menu/menu-mobile-trigger";
import { MobileMenu } from "./nav-menu/mobile-menu";
import { DesktopMenu } from "./nav-menu/desktop-menu";
import { useLocation } from "@tanstack/react-router";

export interface Navlink {
  title: string;
  url: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const navLink: Navlink[] = [
  {
    title: "Home",
    url: "/",
    icon: <HouseIcon />,
  },
  {
    title: "About",
    url: "/about",
    icon: <UserRoundIcon />,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: <FolderClosedIcon />,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: <ContactRoundIcon />,
  },
];

export const checkIsActive = (path: string) => {
  const { pathname } = useLocation();

  if (path === pathname) return true;

  return false;
};

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

          <DesktopMenu navLink={navLink} />

          <MobileMenu navLink={navLink} />

          <div>
            <ThemeToggle />
          </div>
        </Card>
      </div>
    </div>
  );
};
