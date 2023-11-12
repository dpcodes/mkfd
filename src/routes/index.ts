import { rootRoute } from "@/routes/router";
import { Route } from "@tanstack/react-router";
import CharacterList from "../components/characters/CharacterList";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: CharacterList,
});
