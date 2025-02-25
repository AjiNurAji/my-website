import { Button } from "~/components/ui/button";

const MaintenanceError = () => {
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">503</h1>
        <span className="font-medium">Website is under maintenance!</span>
        <p className="text-center text-muted-foreground">
          The site is not available at the moment. <br />
          We'll be back online shortly.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" asChild>
            <a href="https://en.wikipedia.org/wiki/Maintenance" target="_blank">
              Learn More
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceError;
