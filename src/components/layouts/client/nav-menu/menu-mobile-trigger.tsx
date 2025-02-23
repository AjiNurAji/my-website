import { ChevronUp } from "lucide-react";
import { Button } from "~/components/ui/button";

interface Props {
  open: string;
  setOpen: (open: string) => void;
}

export const MenuMobileTrigger = ({ open, setOpen }: Props) => {
  return (
    <div className="mx-auto px-3 sm:hidden flex justify-center items-center transition-[bottom] ease-linear duration-300 fixed z-40 w-full max-sm:group-data-[state=open]:bottom-20 bottom-1">
      <Button
        variant="ghost"
        className="rounded-full"
        size="icon"
        onClick={() => setOpen(open === "" ? "open" : "")}
      >
        <ChevronUp className="max-sm:group-data-[state=open]:rotate-180 transition-[rotate] duration-300 ease-linear" />
        <p className="text-[10px]">{open === "" ? "Open" : "Close"} Menu</p>
      </Button>
    </div>
  );
};
