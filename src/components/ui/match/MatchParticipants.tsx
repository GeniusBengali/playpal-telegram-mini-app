import type {MatchTeam} from "../../../data-types.ts";
import {supabase} from "../../../lib/supabase/client.ts";
import {useEffect, useState} from "react";
import BannerAds from "../BannerAds.tsx";

const MatchParticipants = ({teams, matchSize, teamSize}: {
  teams: MatchTeam[];
  teamSize: number;
  matchSize: number;
}) => {
  const [userId, setUserId] = useState<string|undefined>(undefined)

  useEffect(() => {
    supabase
      .auth
      .getSession()
      .then(({data}) => {
        setUserId(data.session?.user.id)
      })
  }, []);

  const EmptyPlayer = ({size}: {size?: number}) => Array.from({length: size == undefined ? teamSize : size}).map((_, i) => (
    <span className="flex-1 p-2 border-l border-t" key={i}>&nbsp;</span>
  ))

  const EmptyTeam = () => {
    const teamsBookedSize = teams.length
    const availableSeats = (matchSize / teamSize) - teamsBookedSize;
    return Array.from({length: availableSeats}).map((_, i) => {
      const seat = teamsBookedSize + i + 1;
      return (
        <div className="flex items-stretch" key={seat}>
          <span className="w-10 p-2 text-center border-t">{seat}</span>
          <div className="flex-1 flex flex-col items-stretch">
            <EmptyPlayer/>
            {seat % 6 == 0 && (
              <span className="flex-1 p-2 border-l border-t" key={seat+"ads"} >
                <BannerAds />
              </span>
            )}
          </div>
        </div>
      )
    })
  }

  return (
    <div className="flex flex-col items-stretch bg-purple-1000 border rounded-sm">
      <div className="flex text-center font-bold">
        <span className="w-10 p-2">Rank</span>
        <span className="flex-1 p-2 border-l">Player</span>
      </div>

      {teams.map((team) => (
        <div className="flex items-stretch" key={team.seat}>
          <span className={"w-10 p-2 text-center border-t"}>{team.seat}</span>
          <div className="flex-1 flex flex-col items-stretch">
            {team.players.map((player, playerIndex) => (
              <>
                <span className={`flex-1 p-2 border-l border-t ${player.user_id == userId && "bg-purple-700"}`} key={playerIndex}>{player.name}</span>
                {team.seat % 6 == 0 && (
                  <span className="flex-1 p-2 border-l border-t" key={team.seat+"-ads"} >
                    <BannerAds />
                  </span>
                )}
              </>
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