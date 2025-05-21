import {useEffect, useState} from "react";
import {toast} from "sonner";
import type {Tables} from "../lib/supabase/types.ts";
import {useApp} from "../context/app-provider.tsx";

const GamesPage = () => {
  const [games, setGames] = useState<Tables<'games'>[]>()
  const {getGames} = useApp();

  useEffect(() => {
    getGames((_games) => {
      setGames(_games)
    }, (error) => {
      toast.error(error.message)
    })
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-4">
      <h1 className="text-center text-xl uppercase font-play mt-2 app-gradient-font">Games</h1>
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 mx-4 text-xs leading-4">
          {games?.map(game => (
            <div className="flex flex-col rounded-sm overflow-hidden border" key={game.id}>
              <img src={game.thumbnail} alt={game.title} className="w-full" />
              <div className="flex gap-2 items-end bg-linear-120 from-gray-900 to-purple-900 p-1">
                <img src={game.icon} alt={game.title} className="size-12 rounded-sm overflow-hidden" />
                <div>
                  <p className="uppercase font-play font-bold app-gradient-font">{game.title}</p>
                  <p className="capitalize font-roboto">{game.mode}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GamesPage