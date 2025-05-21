import {useParams} from "react-router-dom";
import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";

const MatchesPage = () => {
  const {gameId} = useParams()

  useTelegramBackButton(true)
  return (
    <>
      <h1>Matches Page</h1>
      <p>Game ID: {gameId}</p>
    </>
  )
}
export default MatchesPage