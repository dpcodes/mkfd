import { BlockType } from "../enums/block-type";

export type Move = {
  info: {
    name: string;
    input: string;
    damage: number;
    blockType: BlockType;
  };
  frameData?: {
    startUp: number;
    hitAdv: number;
    blockAdv: number;
  };
};
