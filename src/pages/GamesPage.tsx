import {useEffect, useState} from "react";
import {toast} from "sonner";
import {useApp} from "../context/app-provider.tsx";
import type {Game} from "../data-types.ts";
import {useNavigate} from "react-router-dom";
import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";
import ScrollableComponent from "../components/ui/ScrollableComponent.tsx";

const GamesPage = () => {
  const navigate = useNavigate()
  const [games, setGames] = useState<Game[]>([])
  const {getGames} = useApp();

  useTelegramBackButton(true)

  const onGameToMatches = (game: Game) => {
    navigate(`/matches`, {
      state: {
        game: game
      }
    })
  }

  useEffect(() => {
    getGames(
      data => setGames(data),
      error => toast.error(error?.message)
    )
  }, []);

  return (

   <ScrollableComponent title="Games">
     <div className="grid grid-cols-2 gap-2 mx-4 text-xs leading-4">
       {games?.map(game => (
         <button
           onClick={() => onGameToMatches(game)}
           className="flex flex-col rounded-sm overflow-hidden border"
           key={game.id}
         >
           <img src={game.thumbnail} alt={game.title} className="w-full" loading="lazy" />
           <div className="flex gap-2 items-end bg-linear-120 from-gray-900 to-purple-900 p-1">
             <img src={game.icon} alt={game.title} className="size-10 rounded-sm overflow-hidden" loading="lazy" />
             <div>
               <p className="uppercase font-play font-bold app-gradient-font">{game.title}</p>
               <p className="capitalize font-roboto text-gray-300">{game.mode}</p>
             </div>
           </div>
         </button>
       ))}
     </div>
   </ScrollableComponent>
  )
}

export default GamesPage