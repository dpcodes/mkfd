import { rootRoute } from "@/routes/router";
import { Route } from "@tanstack/react-router";
import MoveList from "@/components/characters/MoveList";

export const moveListRoute = new Route({
  component: MoveList,
  getParentRoute: () => rootRoute,
  path: "$id",
});
