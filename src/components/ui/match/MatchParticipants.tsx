import type {MatchTeam} from "../../../data-types.ts";

const MatchParticipants = ({teams, matchSize, teamSize}: {
  teams: MatchTeam[];
  teamSize: number;
  matchSize: number;
}) => {
  const EmptyPlayer = ({size}: {size?: number}) => Array.from({length: size == undefined ? teamSize : size}).map((_, i) => (
    <span className="flex-1 p-2 border border-t-0" key={i}>&nbsp;</span>
  ))

  const EmptyTeam = () => {
    const teamsBookedSize = teams.length
    const availableSeats = (matchSize / teamSize) - teamsBookedSize;
    return Array.from({length: availableSeats}).map((_, i) => {
      const seat = teamsBookedSize + i + 1;
      return (
        <div className="flex items-stretch" key={seat}>
          <span className="w-10 p-2 text-center border-l border-b">{seat}</span>
          <div className="flex-1 flex flex-col items-stretch">
            <EmptyPlayer/>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="flex flex-col items-stretch bg-purple-1000">
      <div className="flex text-center font-bold">
        <span className="w-10 p-2 border border-r-0">Rank</span>
        <span className="flex-1 py-2 border">Name</span>
      </div>

      {teams.map(team => (
        <div className="flex items-stretch" key={team.seat}>
          <span className="w-10 p-2 text-center border-l border-b">{team.seat}</span>
          <div className="flex-1 flex flex-col items-stretch">
            {team.players.map(player => (
              <span className="flex-1 p-2 border border-t-0" key={player.score}>{player.name}</span>
            ))}
            <EmptyPlayer size={teamSize - team.players.length}/>
          </div>
        </div>
      ))}
      <EmptyTeam />
    </div>
  )
}
export default MatchParticipants;