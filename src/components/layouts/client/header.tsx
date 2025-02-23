import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { CatIcon, MoonIcon } from "lucide-react";
import { ThemeToggle } from '../../theme/theme-toggle';

export const Header = () => {
  return (
    <div className="mx-auto p-3 fixed top-0 left-0 w-full z-50">
      <Card className="flex flex-row justify-between items-center px-4 py-3">
        <a className="inline-block">
          <CatIcon />
        </a>

        <nav>
          <Button variant="link" className="cursor-pointer hover:no-underline">Home</Button>
          <Button variant="link" className="cursor-pointer text-muted-foreground hover:text-primary hover:no-underline">Projects</Button>
          <Button variant="link" className="cursor-pointer text-muted-foreground hover:text-primary hover:no-underline">About</Button>
          <Button variant="link" className="cursor-pointer text-muted-foreground hover:text-primary hover:no-underline">Contact</Button>
        </nav>

        <div>
          <ThemeToggle />
        </div>
      </Card>
    </div>
  );
};
