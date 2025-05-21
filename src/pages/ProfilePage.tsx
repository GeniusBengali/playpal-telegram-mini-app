import {useAuth} from "../context/auth-provider.tsx";
import ProfileHeader from "../components/ui/ProfileHeader.tsx";
import AddBalanceForm from "../components/ui/AddBalanceForm.tsx";
import {PiGameControllerDuotone} from "react-icons/pi";
import {AppIcon} from "../components/ui/AppIcon.tsx";
import {BiTask} from "react-icons/bi";
import { LuClipboardList } from "react-icons/lu";
import {toast} from "sonner";
import {useEffect} from "react";
import {backButton} from "@telegram-apps/sdk-react";
import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";



const ProfilePage = () => {
  const {user, updateUser} = useAuth()

  useTelegramBackButton(false)

  const onClickOfferwall = () => {
    toast.info("Coming soon")
  }

  useEffect(() => {
    if(import.meta.env.PROD){
      if(backButton.isVisible()){
        backButton.hide()
      }
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-4">
      <ProfileHeader
        user={user}
        updateUser={updateUser}
      />
      <AddBalanceForm />
      <div className="flex-1 flex flex-col gap-4 px-4">
        <div className="border rounded-md p-4 flex items-center justify-between bg-linear-120 from-black to-purple-900">
          <h1 className="text-2xl text-white app-icon-shadow font-share-tech">Claim Rewards <br/> Today</h1>
          <div className="bg-[url('/assets/images/spaceship.webp')] bg-center bg-cover h-14 w-24"></div>
        </div>

        <div
          onClick={onClickOfferwall}
          className="flex justify-stretch gap-2 text-xs font-serif capitalize app-icon-shadow text-center"
        >
          <div className="flex-1 flex flex-col items-center justify-center gap-2 border rounded-md p-3 bg-linear-120 from-[#161616] to-purple-900">
            <div className="text-[#d6d6d6]"><AppIcon Icon={LuClipboardList} /></div>
            <h4 className="text-white">Offerwall</h4>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 border rounded-md p-3 bg-linear-120 from-[#161616] to-purple-900">
            <div className="text-[#d6d6d6]"><AppIcon Icon={BiTask} /></div>
            <h4 className="text-white">Tasks</h4>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 border rounded-md p-3 bg-linear-120 from-[#161616] to-purple-900">
            <div className="text-[#d6d6d6]"><AppIcon Icon={PiGameControllerDuotone} /></div>
            <h4 className="text-white">Matches</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage