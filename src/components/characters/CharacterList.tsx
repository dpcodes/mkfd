import { characterList } from "@/data/character-list";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const block1 = characterList.filter((c) => c.block === 1);
  const block2 = characterList.filter((c) => c.block === 2);
  const block3 = characterList.filter((c) => c.block === 3);

  return (
    <section className="grid w-[850px] grid-rows-3 gap-8">
      <div className="grid grid-cols-5 gap-2">
        {block1.map((c) => (
          <CharacterCard key={c.id} id={c.id} name={c.name} />
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {block2.map((c) => (
          <CharacterCard key={c.id} id={c.id} name={c.name} />
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {block3.map((c) => (
          <CharacterCard key={c.id} id={c.id} name={c.name} />
        ))}
      </div>
    </section>
  );
}
