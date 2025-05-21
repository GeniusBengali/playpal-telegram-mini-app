import {Outlet} from "react-router-dom";
import {useApp} from "../../context/app-provider.tsx";
import Loading from "../ui/Loading.tsx";

const GuestLayout = () => {
  const {isLoadings} = useApp();
  return (
    <div>
      <Loading isLoading={isLoadings} />
      <Outlet />
    </div>
  )
}
export default GuestLayout