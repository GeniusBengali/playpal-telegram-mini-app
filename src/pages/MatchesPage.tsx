import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {backButton} from "@telegram-apps/sdk-react";

const MatchesPage = () => {
  const {gameId} = useParams()
  const navigation = useNavigate()
  useEffect(() => {
    if(import.meta.env.PROD){
      if(!backButton.isVisible()){
        backButton.show()
      }
      backButton.onClick(() => {
        navigation(-1)
      })
    }
  }, []);

  return (
    <>
      <h1>Matches Page</h1>
      <p>Game ID: {gameId}</p>
    </>
  )
}
export default MatchesPage