import { Button, buttonVariants } from "~/components/ui/button";
import { Navlink } from "../header";
import { Link } from "@tanstack/react-router";
import { cn } from "~/lib/utils";

export const DesktopMenu = ({ navLink }: { navLink: Navlink[] }) => {
  return (
    <nav className="sm:block hidden">
      {navLink?.map((item, i) => (
        <Button variant="link"  className="cursor-pointer hover:!no-underline" asChild key={i}>
          <Link
            to={item.url}
            className={cn(
              "cursor-pointer hover:!no-underline",
              buttonVariants({ variant: "link" })
            )}
          >
            {item.icon && item.icon}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
};
