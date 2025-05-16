import {useAuth} from "../auth-provider.tsx";
import {Navigate} from "react-router-dom";
import {IconContext} from "react-icons";
import {FaGoogle} from "react-icons/fa6";
import {toast} from "sonner";

const SigninPage = () => {
  const {signInWithGoogleGoogle, session} = useAuth()

  if(session){
    return <Navigate to="/"/>
  }

  const onSignInWithGoogle = async () => {
    const {error} = await signInWithGoogleGoogle()
    if(error){
      toast.error(error.message)
    }
  }

  return (
    <div className={`h-dvh w-dvw bg-purple-1000 flex flex-col items-center justify-end`}>
      <div className="w-full flex-1">
      </div>
      <div
        onClick={onSignInWithGoogle}
        className="flex gap-2 items-center py-2 px-4 m-4  rounded-md neumorphic-purple">
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
        <p className="font-roboto text-xs text-transparent bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-clip-text">CONTINUE WITH GOOGLE</p>
      </div>
    </div>
  )
}
export default SigninPage