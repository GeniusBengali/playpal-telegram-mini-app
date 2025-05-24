import {useLocation, useNavigate} from "react-router-dom";
import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";
import type {DailyMatch, Game} from "../data-types.ts";
import {useEffect, useState} from "react";
import useMatchList from "../components/ui/match/useMatchList.ts";
import {MatchItem} from "../components/ui/match/MatchItem.tsx";
import BannerAds from "../components/ui/BannerAds.tsx";
import ScrollableComponent from "../components/ui/ScrollableComponent.tsx";
import MatchBookButton from "../components/ui/match/MatchBookButton.tsx";

const MatchesPage = () => {
  const navigate = useNavigate()
  const {state} = useLocation()
  const game = state?.game as Game | undefined

  const [page] = useState(1)

  const {
    loading,
    hasMore,
    matches,
    error
  } = useMatchList(page, 10, "opened", game?.id ?? "")

  useEffect(() => {
    if(!state?.game){
      navigate(-1)
      return
    }
  }, [state]);

  useTelegramBackButton(true)


  const onMatchDetail = (match: DailyMatch) => {
    navigate(`/match`, {
      state: {
        game: game,
        match: match
      }
    })
  }

  return (
    <ScrollableComponent
      title={`${game?.title} TOURNAMENTS`}
      className="flex flex-col gap-3 mx-4 text-xs"
    >
      {matches.map((match, index) => (
        <div className="flex flex-col gap-2" key={match.id}>
          <MatchItem
            onClick={()=> onMatchDetail(match!)}
            match={match}
            game={game!}
          >
            <MatchBookButton
              userJoined={match.joined!}
              matchSize={match.match_size!}
              bookedSize={match.booked!}
              match={match!}
              game={game!}
            />
          </MatchItem>
          {index % 4 == 0 && <BannerAds />}
        </div>
      ))}
      {!loading && !hasMore && matches.length == 0 && (
        <p className="">No tournament available</p>
      )}
      {loading && <p className="flex items-center justify-center mb-4" ><span className="loading loading-bars loading-md"/></p>}
      {error && <p className="text-center mb-4">Oops! Something went wrong</p>}
      {!loading && !hasMore && matches.length > 0 && (
        <p className="text-center mb-4">No more</p>
      )}
    </ScrollableComponent>
  )
}
export default MatchesPage