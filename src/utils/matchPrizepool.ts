import type {MatchPrize} from "../data-types.ts";

export const matchPrizepool = (prizes: MatchPrize[], closest: number) => {
  const total = prizes.reduce((acc, cur) => acc + cur.position_prize + (cur.score_prize == 0 ? 0 : cur.score_prize / cur.per_score), 0)
  return Math.ceil(total / closest) * closest;
}