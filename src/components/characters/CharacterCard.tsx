import { Button } from "../ui/button";
import { Card } from "../ui/card";

type Props = {
  name: string;
};

export default function CharacterCard({ name }: Props) {
  return (
    <Button variant="ghost" asChild className="px-0 pb-2">
      <Card className="h-45 flex w-40 cursor-pointer flex-col gap-2">
        <img
          className="h-38 w-32"
          src={`https://cdn-mk1.mortalkombat.com/roster/${name}/thumb.webp`}
          alt={name}
        />
        <span className="px-10 font-bold capitalize">{name}</span>
      </Card>
    </Button>
  );
}
