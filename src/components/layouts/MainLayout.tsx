import {Outlet, useNavigate} from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation.tsx";
import {useAuth} from "../../context/auth-provider.tsx";
import {AuthState} from "../../data-types.ts";

const MainLayout = () => {
  const {authState} = useAuth();
  const navigate = useNavigate()

  if(authState == AuthState.UNAUTHENTICATED){
    navigate("/auth/sign-in", {
      replace: true
    })
  }

  return (
    <div className="font-roboto">
      <Outlet />
      <BottomNavigation />
    </div>
  )
}

export default MainLayout