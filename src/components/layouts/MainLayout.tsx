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
    <div className="font-roboto h-dvh flex flex-col">
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <adsgram-task
        data-block-id='task-10982'
        data-debug="false"
        className="task"
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
      </adsgram-task>
      <div className="flex-1 overflow-y-auto">
        <Outlet/>
      </div>
      <BottomNavigation/>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <adsgram-task
        data-block-id='task-10982'
        data-debug="false"
        className="task"
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
      </adsgram-task>
    </div>
  )
}

export default MainLayout