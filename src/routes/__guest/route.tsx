import { createFileRoute } from "@tanstack/react-router";
import { LayoutClient } from "~/components/layouts/client/layout-client";

export const Route = createFileRoute("/__guest")({
  component: LayoutClient,
})