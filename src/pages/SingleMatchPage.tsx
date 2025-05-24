import ScrollableComponent from "../components/ui/ScrollableComponent.tsx";
import {useNavigate, useParams} from "react-router-dom";
import useSingleMatch from "../components/ui/match/useSingleMatch.ts";
import {MatchItem} from "../components/ui/match/MatchItem.tsx";
import {useEffect, useState} from "react";
import {useApp} from "../context/app-provider.tsx";
import MatchBookButton from "../components/ui/match/MatchBookButton.tsx";
import MatchPrizepools from "../components/ui/match/MatchPrizepools.tsx";

const SingleMatchPage = () => {
  const navigate = useNavigate()
  const {gameId, matchId} = useParams()
  const {findGame} = useApp()
  const game = findGame(gameId!)
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false)

  const {match} = useSingleMatch(matchId!)

  useEffect(() => {
    if(game == null){
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
        <div className="flex flex-col gap-2 mx-4 text-xs relative">
          {game != null && match != null &&
            <MatchItem
              game={game}
              match={match}
              onPrizepoolClick={() => {
                setBottomSheetOpen(true)
              }}
            >
              <MatchBookButton
                gameId={gameId!}
                userJoined={match.joined!}
                matchSize={match.match_size!}
                bookedSize={match.booked!}
                matchId={matchId!}/>
            </MatchItem>
          }
        </div>
      </ScrollableComponent>
    </>
  )
}
export default SingleMatchPage