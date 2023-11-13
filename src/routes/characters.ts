import CharacterList from "@/components/characters/CharacterList";
import MoveList from "@/components/characters/Character";
import { rootRoute } from "@/routes/router";
import { Route } from "@tanstack/react-router";

const charactersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "characters",
});

const charactersIndexRoute = new Route({
  getParentRoute: () => charactersRoute,
  path: "/",
  component: CharacterList,
});

const characterRoute = new Route({
  component: MoveList,
  getParentRoute: () => charactersRoute,
  path: "$id",
});

export { charactersRoute, charactersIndexRoute, characterRoute };
