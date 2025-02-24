import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import GeneralError from "~/features/errors/general-error";
import NotFoundError from "~/features/errors/not-found-error";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: () => (
    <>
      <Outlet />
      {import.meta.env.MODE === "development" && (
        <>
          <ReactQueryDevtools buttonPosition="bottom-left" />
          <TanStackRouterDevtools position="top-left" />
        </>
      )}
    </>
  ),
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})