import {Outlet, useNavigate} from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation.tsx";
import {useAuth} from "../../context/auth-provider.tsx";
import {AuthState} from "../../data-types.ts";
import BannerAds from "../ui/BannerAds.tsx";

const MainLayout = () => {
  const {authState} = useAuth();
  const navigate = useNavigate()

  if(authState == AuthState.UNAUTHENTICATED){
    navigate("/auth/sign-in", {
      replace: true
    })
  }



  return (
    <div className="font-roboto h-dvh flex flex-col">
      <BannerAds />
      <div className="flex-1 flex flex-col overflow-y-auto app-gradient-background">
        <Outlet/>
      </div>
      <BottomNavigation/>
      <BannerAds />
    </div>
  )
}

export default MainLayout