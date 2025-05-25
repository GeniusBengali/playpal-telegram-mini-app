import type {MatchTeam} from "../data-types.ts";

const matchCountPlayers = (teams: MatchTeam[]): number => {
  return teams.reduce((acc, cur) => acc + cur.players.length, 0)
}
export default matchCountPlayers