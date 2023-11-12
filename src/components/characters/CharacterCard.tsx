import { useNavigate } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

type Props = {
  id: string;
  name?: string;
};

export default function CharacterCard({ id, name }: Props) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate({ to: "/$id", params: { id } })}
      variant="ghost"
      asChild
      className="px-0 pb-2"
    >
      <Card className="h-45 flex w-40 cursor-pointer flex-col gap-2">
        <img
          className="h-full w-full"
          src={`https://cdn-mk1.mortalkombat.com/roster/${id}/thumb.webp`}
          alt={name ?? id}
        />
        <span className="pt-2 font-bold capitalize">{name ?? id}</span>
      </Card>
    </Button>
  );
}
