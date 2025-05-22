import type {MatchPrize} from "../data-types.ts";

export const perScorePrize = (prizes: MatchPrize[]) => {
  const winner = prizes.find(prize => prize.position == 1)!
  return winner.score_prize==0 ? "0" : winner.score_prize / winner.per_score
}