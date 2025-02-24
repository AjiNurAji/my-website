import { createFileRoute } from "@tanstack/react-router";
import Guest from "~/features/guest";

export const Route = createFileRoute("/__guest/")({
  component: Guest,
});
