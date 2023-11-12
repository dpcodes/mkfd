import App from "@/App";
import { RootRoute, Router } from "@tanstack/react-router";
import { indexRoute } from ".";
import { moveListRoute } from "./move-list";
import { charactersRoute } from "./characters";
import { kameosRoute } from "./kameos";

// Create a root route
export const rootRoute = new RootRoute({
  component: App,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  charactersRoute.addChildren([moveListRoute]),
  kameosRoute,
]);

const router = new Router({ routeTree });
export default router;
