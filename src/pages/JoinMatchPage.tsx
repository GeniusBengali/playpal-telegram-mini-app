import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import ScrollableComponent from "../components/ui/ScrollableComponent.tsx";
import type {DailyMatch, Game} from "../data-types.ts";
import MatchPlayerInput from "../components/ui/match/MatchPlayerInput.tsx";

const JoinMatchPage = () => {
  useTelegramBackButton(true)
  const navigete = useNavigate()
  const {state} = useLocation()
  const game = state?.game as Game | undefined
  const match = state?.match as DailyMatch | undefined
  const [players, setPlayers] = useState([""])


  useEffect(() => {
    if(state == null){
      navigete(-1)
      return
    }
  }, []);

  return (
    <ScrollableComponent
      title={`${game?.title} ${game?.mode}`}
      className="flex flex-col gap-4 mx-4 text-xs"
    >
      {players.map((player, index) => (
        <MatchPlayerInput
          gameIcon={game?.icon ?? ""}
          gameTitle={game?.title ?? ""}
          value={player}
          onChange={(e) => {
            const newPlayers = [...players]
            newPlayers[index] = e.target.value
            setPlayers(newPlayers)
          }}
          hideDeleteButton={index == 0}
          hideAddButton={index != players.length - 1 || match.booked!+players.length >= match.match_size! }
          onClickAdd={() => {
            setPlayers([...players, ""])
          }}
          onClickDelete={() => {
            const newPlayers = [...players]
            newPlayers.splice(index, 1)
            setPlayers(newPlayers)
          }}
          key={index}
        />
      ))}


    </ScrollableComponent>
  )
}
export default JoinMatchPage