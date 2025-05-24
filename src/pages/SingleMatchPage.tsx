import ScrollableComponent from "../components/ui/ScrollableComponent.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import useSingleMatch from "../components/ui/match/useSingleMatch.ts";
import {MatchItem} from "../components/ui/match/MatchItem.tsx";
import {useEffect, useState} from "react";
import MatchBookButton from "../components/ui/match/MatchBookButton.tsx";
import MatchPrizepools from "../components/ui/match/MatchPrizepools.tsx";
import MatchParticipants from "../components/ui/match/MatchParticipants.tsx";
import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";
import MatchEntrance from "../components/ui/match/MatchEntrance.tsx";
import type {Game} from "../data-types.ts";

const SingleMatchPage = () => {
  const navigate = useNavigate()
  const {state} = useLocation()
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false)
  const game = state?.game as Game | undefined

  useTelegramBackButton(true)

  const {match} = useSingleMatch(state.match)

  useEffect(() => {
    if(state == null){
      navigate(-1)
    }
  }, []);

  return (
    <>
      <MatchPrizepools
        open={bottomSheetOpen}
        setOpen={setBottomSheetOpen}
        prizes={match?.prizes ?? []}
        scoreTitle={match?.score_title ?? ""}
      />
      <ScrollableComponent title={`${game?.title} ${game?.mode}`}>
        <div className="flex flex-col gap-4 mx-4 text-xs mb-4">
          {game != null && match != null &&
            <>
              <MatchItem
                game={game}
                match={match}
                onPrizepoolClick={() => {
                  setBottomSheetOpen(true)
                }}
              >
                <MatchBookButton
                  userJoined={match.joined!}
                  matchSize={match.match_size!}
                  bookedSize={match.booked!}
                  game={game}
                  match={match}/>
              </MatchItem>
              <div className="flex flex-wrap gap-2 items-start justify-stretch">
                {match.infos.map((info, index) => (
                  <div className="flex-1 min-w-[calc(33.333%-6px)] bg-linear-[135deg] from-purple-1000 to-purple-700 rounded-sm border flex flex-col items-center p-1" key={index}>
                    <span className="uppercase font-bold">{info.title}</span>
                    <span>{info.value}</span>
                  </div>
                ))}
              </div>

              {match.joined && <MatchEntrance matchId={match.id!}/>}
              
              <MatchParticipants
                matchStatus={match.status!}
                teams={match.teams}
                teamSize={match.team_size!}
                matchSize={match.match_size!}
              />
            </>
          }
        </div>
      </ScrollableComponent>
    </>
  )
}
export default SingleMatchPage