import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {backButton} from "@telegram-apps/sdk-react";

const SignupPage = () => {
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
    <div>Sign-up Page</div>
  )
}
export default SignupPage