import {
  ContactRoundIcon,
  FolderClosedIcon,
  HouseIcon,
  UserRoundIcon,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export const MobileMenu = () => {
  return (
    <div className="sm:hidden flex justify-center items-center gap-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full flex flex-col gap-0"
            >
              <HouseIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <span className="text-xs">Home</span>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer text-muted-foreground hover:text-primary rounded-full flex flex-col gap-0"
            >
              <UserRoundIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
              <span className="text-xs">About</span>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer text-muted-foreground hover:text-primary rounded-full flex flex-col gap-0"
            >
              <FolderClosedIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
              <span className="text-xs">Projects</span>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer text-muted-foreground hover:text-primary rounded-full flex flex-col gap-0"
            >
              <ContactRoundIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
              <span className="text-xs">Contact</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
