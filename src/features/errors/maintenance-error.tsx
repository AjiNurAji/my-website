import { useRouter } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";

const MaintenanceError = ({ page }: { page?: boolean }) => {
  const { history } = useRouter();

  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">503</h1>
        <span className="font-medium">
          {page ? "Page" : "Website"} is under maintenance!
        </span>
        <p className="text-center text-muted-foreground">
          The {page ? "page" : "site"} is not available at the moment. <br />
          We'll be back online shortly.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" asChild>
            <a href="https://en.wikipedia.org/wiki/Maintenance" target="_blank">
              Learn More
            </a>
          </Button>
          <Button onClick={() => history.go(-1)}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceError;
