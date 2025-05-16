import {useAuth} from "../context/auth-provider.tsx";
import {IconContext} from "react-icons";
import {FaGoogle} from "react-icons/fa6";
import {toast} from "sonner";
import {useState} from "react";
import Loading from "../components/ui/Loading.tsx";
import {AuthState} from "../data-types.ts";
import {useNavigate} from "react-router-dom";

const SigninPage = () => {
  const {signInWithGoogleGoogle, authState} = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  if(authState == AuthState.AUTHENTICATED){
    navigate("/", {
      replace: true,
    })
  }

  const onSignInWithGoogle = async () => {
    if(isLoading) return
    setIsLoading(true)
    const {error} = await signInWithGoogleGoogle()
    setIsLoading(false)
    if(error){
      toast.error(error.message)
    }
  }

  return (
    <div className={`h-dvh w-dvw bg-purple-1000 flex flex-col items-center justify-end`}>
      {isLoading && <Loading/>}
      <div className="w-full flex-1">
      </div>
      <div
        onClick={onSignInWithGoogle}
        className="flex gap-2 items-center py-2 px-4 m-4 cursor-pointer rounded-md neumorphic-purple">
        <svg width="24" height="24">
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(0)">
              <stop offset="5%"  stopColor="#27C9FF" />
              <stop offset="95%" stopColor="#FBD130" />
            </linearGradient>
          </defs>
          <IconContext.Provider value={{ attr: {fill: "url('#myGradient')"}}}>
            <FaGoogle size={24}  />
          </IconContext.Provider>
        </svg>
        <p className="font-roboto text-xs gradient-font">CONTINUE WITH GOOGLE</p>
      </div>
    </div>
  )
}
export default SigninPage