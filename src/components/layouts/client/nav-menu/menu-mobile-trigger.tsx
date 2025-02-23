import { ChevronUp } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

interface Props {
  open: string;
  setOpen: (open: string) => void;
}

export const MenuMobileTrigger = ({ open, setOpen }: Props) => {
  return (
    <div className="mx-auto px-3 sm:hidden flex justify-center items-center transition-[bottom,rotate] ease-linear duration-300 fixed z-40 w-full max-sm:group-data-[state=open]:bottom-20 bottom-1 max-sm:group-data-[state=open]:rotate-180">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full"
              size="icon"
              onClick={() => setOpen(open === "" ? "open" : "")}
            >
              <ChevronUp />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{open === ""? "Open": "Close"} Menu</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
