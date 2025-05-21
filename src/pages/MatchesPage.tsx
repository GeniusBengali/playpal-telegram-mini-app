import {useParams} from "react-router-dom";

const MatchesPage = () => {
  const {gameId} = useParams()

  return (
    <>
      <h1>Matches Page</h1>
      <p>Game ID: {gameId}</p>
    </>
  )
}
export default MatchesPage