import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { ThemeProvider } from "./components/theme/theme-provider";
import { handleServerError } from "./utils/handle-server-error";
import "./index.css"

// generated route
import { routeTree } from "./routeTree.gen";
import { LoaderCircleIcon } from "lucide-react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        // eslint-disable-next-line no-console
        if (import.meta.env.DEV) console.log({ failureCount, error });

        if (failureCount >= 0 && import.meta.env.DEV) return false;
        if (failureCount > 3 && import.meta.env.PROD) return false;

        return !(
          error instanceof AxiosError &&
          [401, 403].includes(error.response?.status ?? 0)
        );
      },
      refetchOnWindowFocus: import.meta.env.PROD,
      staleTime: 10 * 1000, // 10s
    },
    mutations: {
      onError: (error) => {
        handleServerError(error);

        if (error instanceof AxiosError) {
          if (error.response?.status === 304) {
            toast.error("Content not modifie!d");
          }
        }
      },
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error("Session expired!");
          // useAuthStore.getState().reset()
          const redirect = `${router.history.location.href}`;
          router.navigate({ to: "/", search: { redirect } });
        }

        if (error.response?.status === 500) {
          toast.error("Internal Server Error!");
          router.navigate({ to: "/500" });
        }

        if (error.response?.status === 403) {
          // router.navigate("/forbidden", { replace: true });
        }
      }
    },
  }),
});

// create a new router intance
const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPendingComponent: () => (
    <div className="min-h-screen h-full flex justify-center items-center">
      <LoaderCircleIcon className="animate-spin size-6" />
    </div>
  ),
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

// resgister the route intance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
