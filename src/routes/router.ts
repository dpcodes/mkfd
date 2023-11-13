import App from "@/App";
import { RootRoute, Router } from "@tanstack/react-router";
import {
  characterMoveListRoute,
  charactersIndexRoute,
  charactersRoute,
} from "./characters";
import { kameosRoute } from "./kameos";

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Create a root route
export const rootRoute = new RootRoute({
  component: App,
});

const routeTree = rootRoute.addChildren([
  charactersRoute.addChildren([charactersIndexRoute, characterMoveListRoute]),
  kameosRoute,
]);

const router = new Router({ routeTree });
export default router;
