import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const JoinMatchPage = () => {
  useTelegramBackButton(true)
  const navigete = useNavigate()
  const {state} = useLocation()

  useEffect(() => {
    if(state == null){
      navigete(-1)
      return
    }
  }, []);

  return JSON.stringify(state)
}
export default JoinMatchPage