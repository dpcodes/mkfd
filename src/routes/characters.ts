import { rootRoute } from "@/routes/router";
import { Route } from "@tanstack/react-router";
import CharacterList from "../components/characters/CharacterList";

export const charactersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "characters",
  component: CharacterList,
});
