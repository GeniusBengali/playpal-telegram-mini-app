import {useEffect, useState} from "react";
import {toast} from "sonner";
import {useApp} from "../context/app-provider.tsx";
import type {Game} from "../data-types.ts";
import {Link, useNavigate} from "react-router-dom";
import {backButton} from "@telegram-apps/sdk-react";

const GamesPage = () => {
  const navigation = useNavigate()
  const [games, setGames] = useState<Game[]>([])
  const {getGames} = useApp();

  useEffect(() => {
    if(import.meta.env.PROD){
      if(!backButton.isVisible()){
        backButton.show()
      }
      backButton.onClick(() => {
        navigation(-1)
      })
    }

    getGames(
      data => setGames(data),
      error => toast.error(error?.message)
    )
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-4">
      <h1 className="text-center text-xl uppercase font-play mt-2 app-gradient-font">Games</h1>
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-2 mx-4 text-xs leading-4">
          {games?.map(game => (
            <Link
              to={`/games/${game.id}`}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GamesPage