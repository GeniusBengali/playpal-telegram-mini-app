import {Navigate, Outlet} from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation.tsx";
import {useAuth} from "../../auth-provider.tsx";

const MainLayout = () => {
  const {session} = useAuth();

  if(!session) return <Navigate to="/auth/sign-in" />;

  return (
    <div className="font-roboto">
      <Outlet />
      <BottomNavigation />
    </div>
  )
}

export default MainLayout