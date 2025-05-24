import {useNavigate, useParams} from "react-router-dom";
import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";
import {useApp} from "../context/app-provider.tsx";
import type {Game} from "../data-types.ts";
import {useEffect, useState} from "react";
import useMatchList from "../components/ui/match/useMatchList.ts";
import {MatchItem} from "../components/ui/match/MatchItem.tsx";
import BannerAds from "../components/ui/BannerAds.tsx";
import ScrollableComponent from "../components/ui/ScrollableComponent.tsx";
import MatchBookButton from "../components/ui/match/MatchBookButton.tsx";

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

    const foundGame = findGame(gameId)
    if(foundGame == null){
      navigate(-1)
      return
    }
    
    setGame(foundGame)
  }, [findGame, gameId, navigate]);

  useTelegramBackButton(true)


  const onMatchDetail = (matchId: string) => {
    navigate(`/match/${game!.id}/${matchId}`)
  }

  return (
    <ScrollableComponent
      title={`${game?.title} TOURNAMENTS`}
      className="flex flex-col gap-3 mx-4 text-xs"
    >
      {matches.map((match, index) => (
        <div className="flex flex-col gap-2" key={match.id}>
          <MatchItem
            onClick={()=> onMatchDetail(match.id!)}
            match={match}
            game={game!}
          >
            <MatchBookButton
              userJoined={match.joined!}
              matchSize={match.match_size!}
              bookedSize={match.booked!}
              matchId={match.id!}
              gameId={game!.id!}
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