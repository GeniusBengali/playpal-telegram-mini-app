import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import type {DailyMatch, Game} from "../data-types.ts";
import MatchPlayerInput from "../components/ui/match/MatchPlayerInput.tsx";
import Button from "@mui/material/Button";
import {toast} from "sonner";
import {useAuth} from "../context/auth-provider.tsx";
import {supabase} from "../lib/supabase/client.ts";
import {useApp} from "../context/app-provider.tsx";

const JoinMatchPage = () => {
  useTelegramBackButton(true)
  const navigete = useNavigate()
  const {state} = useLocation()
  const {user} = useAuth()
  const {showInterstitialAd} = useApp()
  const scrollableComponentRef = useRef<HTMLDivElement>(null)

  const game = state?.game as Game | undefined
  const match = state?.match as DailyMatch | undefined
  const emptyPlayer = {
    name: "",
    hasError: false,
    error: ""
  }

  const [players, setPlayers] = useState([emptyPlayer])
  const [loading, setLoading] = useState(false)

  const onBookMatch = () => {
    if(loading){
      return
    }
    const isValid = players.every(player => player.name.trim() != "" && !player.hasError)
    if(!isValid){
      toast.error("Please fix the errors")
      return
    }

    if(match!.entry_fee! * players.length > user!.balance){
      toast.error("You don't have enough balance")
    }

    if(match?.joined){
      toast.error("Match already joined")
      return
    }

    const playersNames = players.map(player => player.name)

    setLoading(true)

    supabase
      .rpc("join_match", {
        "p_match_id": match!.id!,
        "p_players": playersNames
      })
      .single<{
        status: boolean,
        message?: string,
      }>()
      .then(({data, error}) => {
        setLoading(false)
        if(error){
          toast.error(error.message)
          return
        }
        if(!data!.status){
          toast.success(data!.message)
          return
        }

        toast.success("Match booked successfully")
        setPlayers([emptyPlayer])
        navigete(`/match`, {
          state: {
            game: game!,
            match: match!
          }
        })
      })
  }

  const onValueChange = (value: string, index: number) => {
    const newPlayers = [...players]
    const hasAlready = players.find(player => player.name == value)
    newPlayers[index] = {
      name: value,
      hasError: hasAlready != undefined,
      error: hasAlready != undefined ? "Player already exists" : ""
    }
    setPlayers(newPlayers)
  }

  const onAddPlayer = () => {
    if(match!.entry_fee == 0 && players.length == match!.team_size!){
      toast.error(`Only ${match!.team_size} players are allowed`)
      return
    }
    setPlayers([...players, {name: "", hasError: false, error: ""}])
  }

  const onRemovePlayer = (index: number) => {
    const newPlayers = [...players]
    newPlayers.splice(index, 1)
    setPlayers(newPlayers)
  }

  useEffect(() => {
    if(state == null){
      navigete(-1)
      return
    }

    showInterstitialAd(() => {}, ()=> {})
  }, []);

  useEffect(() => {
    scrollableComponentRef.current?.scrollTo({
      top: scrollableComponentRef.current?.scrollHeight ?? 0,
      behavior: "smooth"
    })
  }, [players]);

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col gap-4">
      <h1 className="text-center text-md uppercase font-play font-bold mt-2 app-gradient-font">
        {game?.title} {game?.mode}
      </h1>
      <div
        className={`flex-1 overflow-y-auto flex flex-col gap-4 mx-4 text-xs`}
        ref={scrollableComponentRef}
      >
        {players.map((player, index) => (
          <MatchPlayerInput
            gameIcon={game?.icon ?? ""}
            gameTitle={game?.title ?? ""}
            value={player.name}
            onChange={(e) => onValueChange(e.target.value, index)}
            hideDeleteButton={index == 0}
            hideAddButton={index != players.length - 1 || match!.booked!+players.length >= match!.match_size! }
            onClickAdd={onAddPlayer}
            onClickDelete={() => onRemovePlayer(index)}
            hasError={player.hasError}
            errorText={player.error}
            key={index}
          />
        ))}
      </div>
      <Button
        className="!m-4"
        variant="contained"
        color="warning"
        onClick={onBookMatch}
        disabled={loading}
        loading={loading}
        loadingPosition="start"
      >
        BOOK
      </Button>
    </div>
  )
}
export default JoinMatchPage