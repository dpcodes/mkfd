import { rootRoute } from "@/routes/router";
import { Route } from "@tanstack/react-router";
import CharacterList from "../components/characters/CharacterList";

export const kameosRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "kameos",
  component: CharacterList,
});
