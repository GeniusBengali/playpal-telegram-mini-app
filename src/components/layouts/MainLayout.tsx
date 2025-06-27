import {Outlet, useNavigate} from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation.tsx";
import {useAuth} from "../../context/auth-provider.tsx";
import {AuthState} from "../../data-types.ts";
import {useApp} from "../../context/app-provider.tsx";
import Loading from "../ui/Loading.tsx";

const MainLayout = () => {
  const {authState} = useAuth();
  const {isLoadings} = useApp();
  const navigate = useNavigate()

  if(authState == AuthState.UNAUTHENTICATED){
    navigate("/auth/sign-in", {
      replace: true
    })
  }


  return (
    <div>To continue please download Playpal from google play store</div>
  )

  return (
    <div className="font-roboto h-dvh flex flex-col">
      <Loading isLoading={isLoadings} />
      <div className="flex-1 mb-16 flex flex-col app-gradient-background">
        <Outlet/>
      </div>
      <BottomNavigation/>
    </div>
  )
}

export default MainLayout