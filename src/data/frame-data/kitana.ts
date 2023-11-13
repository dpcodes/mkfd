import { BlockType } from "../enums/block-type";
import { Move } from "../models/move";

const moveList: Move[] = [
  {
    info: {
      name: "Side Slice",
      input: "1",
      damage: 20,
      blockType: BlockType.High,
    },
  },
  {
    info: {
      name: "Limitless",
      input: "1 1",
      damage: 30,
      blockType: BlockType.Mid,
    },
  },
  // Limitless	1, 1	Square, Square	X, X	Y, Y	30	Mid
  // Rising Up	1, 1, 2	Square, Square, Triangle	X, X, Y	Y, Y, X	70	Mid
  // Wind Damage	1, 4	Square, Circle	X, B	Y, A	70	Low
  // Fancy Strike	B + 1	Back + Square	Back + X	Back + Y	30	High
  // Who Runs The World	B + 1, 4	Back + Square, Circle	Back + X, B	Back + Y, A	70	High
  // Royal Bow	F + 1	Forward + Square	Forward + X	Forward + Y	30	Mid
  // Twisted Edenian	F + 1, 2	Forward + Square, Triangle	Forward + X, Y	Forward + Y, X	97.50	Mid
  // Side Swipe	D + 1	Down + Square	Down + X	Down + Y	20	Mid
  // Rising Fan	2	Triangle	Y	X	30	High
  // Step Off	2, 4	Triangle, Circle	Y, B	X, A	50	Mid
  // The Comeback	2, 4, 1, 2	Triangle, Circle, Square, Triangle	Y, B, X, Y	X, A, Y, X	N/A	N/A
  // Unbreakable	2, 4, 2	Triangle, Circle, Triangle	Y, B, Y	X, A, X	70	Mid
  // Step N' Stab	F + 1	Forward + Square	Forward + Y	Forward + X	50	Mid
  // Heavy Is The Krown	F + 1, 4	Forward + Square, Circle	Forward + Y, B	Forward + X, A	70	Mid
  // Tantalizing Twirl	D + 1	Down + Square	Down + Y	Down + X	140	High
  // High Heel	3	X	A	B	50	High
  // Knee Check	B + 3	Back + X	Back + A	Back+ B	50	Low
  // Finishing Touch	B + 3, 3	Back + X, X	Back + A, A	Back+ B, B	70	Low
  // Booty Bump	B + 3, 4	Back + X, Circle	Back + A, B	Back+ B, A	50	High
  // Simple Kommand	B + 3, 4, 3	Back + X, Circle, X	Back + A, B, A	Back+ B, A, B	70	Mid
  // Stiletto Strike	D + 3	Down + X	Down + A	Down + B	20	Low
  // Pretty Kick	4	Circle	B	A	50	High
  // Edenian Dance	4, F + 3, 3	Circle, Forward + X, X	B, Forward + A, A	A, Forward + B, B	N/A	N/A
  // Head Over Heels	4, F + 3, 3, 4	Circle, Forward + X, X, Circle	B, Forward + A, A, B	A, Forward + B, B, A	N/A	N/A
  // Sweeping Fan	B + 4	Back + Circle	Back + B	Back + A	70	Low
  // Heel Spin	D + 4	Down + Circle	Down + B	Down + A	30	Low
];

export default moveList;
