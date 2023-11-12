import { rootRoute } from "@/routes/router";
import { useParams } from "@tanstack/react-router";

export default function MoveList() {
  const params = useParams({ from: rootRoute.id });
  console.log({ params });
  return <>helllllllo</>;
}
