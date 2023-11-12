type CharListModel = {
  id: string;
  name: string;
  block: number;
  released?: boolean;
};

const characterList: CharListModel[] = [
  { id: "ermac", block: 1, released: false },
  { id: "kitana", block: 1 },
  { id: "mileena", block: 1 },
  { id: "tanya", block: 1 },
  { id: "rain", block: 1 },
  { id: "takahashi-takeda", block: 1, released: false },
  { id: "shang-tsung", block: 1 },
  { id: "general-shao", block: 1 },
  { id: "sindel", block: 1 },
  { id: "reiko", block: 1 },

  { id: "smoke", block: 2 },
  { id: "scorpion", block: 2 },
  { id: "reptile", block: 2 },
  { id: "sub-zero", block: 2 },
  { id: "li-mei", block: 2 },
  { id: "raiden", block: 2 },
  { id: "liu-kang", block: 2 },
  { id: "johnny-cage", block: 2 },
  { id: "kung-lao", block: 2 },

  { id: "kenshi-takahashi", block: 3 },
  { id: "baraka", block: 3 },
  { id: "geras", block: 3 },
  { id: "omni-man", block: 3 },
  { id: "peacemaker", block: 3, released: false },
  { id: "ashrah", block: 3 },
  { id: "nitara", block: 3 },
  { id: "havik", block: 3 },
  { id: "quang-chi", block: 3, released: false },
  { id: "homelander", block: 3, released: false },
];

export { characterList };
