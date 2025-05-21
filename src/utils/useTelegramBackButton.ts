import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {backButton} from "@telegram-apps/sdk-react";

export const useTelegramBackButton = (enable: boolean = true) => {
  const navigate = useNavigate()
  useEffect(() => {
    const handleBack = () => {
      navigate(-1)
    }

    if(import.meta.env.PROD){
      if(!enable){
        backButton.hide()
        return
      }
      if(!backButton.isVisible()){
        backButton.show()
      }
      backButton.onClick(handleBack)

      return () => {
        backButton.offClick(handleBack)
      }
    }
  }, [enable, navigate]);
}