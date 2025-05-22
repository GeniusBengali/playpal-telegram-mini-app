import {useNavigate, useParams} from "react-router-dom";
import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";
import {useApp} from "../context/app-provider.tsx";
import type {Game} from "../data-types.ts";
import {useEffect, useState} from "react";
import useMatchList from "../components/ui/match/useMatchList.ts";
import {MatchItem} from "../components/ui/match/MatchItem.tsx";
import BannerAds from "../components/ui/BannerAds.tsx";

const MatchesPage = () => {
  const {gameId} = useParams()
  const {findGame} = useApp()
  const navigate = useNavigate()
  const [game, setGame] = useState<Game|null>()

  const [page] = useState(1)

  const {
    loading,
    hasMore,
    matches,
    error
  } = useMatchList(page, 10, "opened", gameId!)

  useEffect(() => {
    if(!gameId){
      navigate(-1)
      return
    }
    
    setGame(findGame(gameId))
  }, [findGame, gameId, navigate]);

  useTelegramBackButton(true)

  return (
    <div className="flex-1 flex flex-col gap-4">
      <h1 className="text-center text-xl uppercase font-play mt-2 app-gradient-font">
        {game?.title} TOURNAMENTS
      </h1>
      <div className="flex-1 flex flex-col gap-3 overflow-y-scroll mx-4 text-xs">
        {matches.map((match, index) => (
          <div className="flex flex-col gap-2" key={match.id}>
            <MatchItem match={match} game={game!} />
            {index % 4 == 0 && <BannerAds />}
          </div>
        ))}
        {!loading && !hasMore && matches.length == 0 && (
          <p className="">No tournament available</p>
        )}
        {loading && <p className="flex items-center justify-center" ><span className="loading loading-bars loading-md"/></p>}
        {error && <p>Oops! Something went wrong</p>}
        {!loading && !hasMore && matches.length > 0 && (
          <p className="text-center">No more</p>
        )}
      </div>
    </div>
  )
}
export default MatchesPage