import { useNavigate, useRouter } from "@tanstack/react-router";
import React from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface GeneralErrorPops extends React.HTMLAttributes<HTMLDivElement> {
  minimal?: boolean;
}

const GeneralError = ({ className, minimal = false }: GeneralErrorPops) => {
  const navigate = useNavigate();
  const { history } = useRouter();

  return (
    <div className={cn("h-svh w-full", className)}>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        {!minimal && (
          <h1 className="text-[7rem] font-bold leading-tight">500</h1>
        )}
        <span className="font-medium">Oops! Something went wrong {`:')`}</span>
        <p className="text-center text-muted-foreground">
          We apologize for the inconvenience. <br /> Please try again later.
        </p>
        {!minimal && (
          <div className="mt-6 flex gap-4">
            <Button variant="outline" onClick={() => history.go(-1)}>
              Go Back
            </Button>
            <Button onClick={() => navigate({ to: "/" })}>Back to Home</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralError;
