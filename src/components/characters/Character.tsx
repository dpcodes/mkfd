import { charactersRoute } from "@/routes/characters";
import { useParams } from "@tanstack/react-router";

export default function Character() {
  const params = useParams({ from: charactersRoute.id });
  console.log({ params });
  return <>helllllllo</>;
}
