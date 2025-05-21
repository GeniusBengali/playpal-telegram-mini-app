import {useEffect} from "react";
import {backButton} from "@telegram-apps/sdk-react";
import {useNavigate} from "react-router-dom";

const TopupPage = () => {
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
    <div>TopupPage</div>
  )
}
export default TopupPage