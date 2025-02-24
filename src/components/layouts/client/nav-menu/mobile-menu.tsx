import { Button, buttonVariants } from "~/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Navlink } from "../header";
import { Link } from "@tanstack/react-router";
import { cn } from "~/lib/utils";

export const MobileMenu = ({ navLink }: { navLink: Navlink[] }) => {
  return (
    <div className="sm:hidden flex justify-center items-center gap-x-2">
      <TooltipProvider>
        {navLink?.map((item, i) => (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild>
                <Link
                  to={item.url}
                  className={cn(
                    "cursor-pointer !rounded-full flex flex-col gap-0",
                    buttonVariants({ variant: "outline", size: "icon" }),
                  )}
                >
                  {item.icon && item.icon}
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <span className="text-xs">{item.title}</span>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};
