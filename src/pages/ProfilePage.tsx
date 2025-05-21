import {useAuth} from "../context/auth-provider.tsx";
import ProfileHeader from "../components/ui/ProfileHeader.tsx";
import AddBalanceForm from "../components/ui/AddBalanceForm.tsx";
import spaceship from "../assets/images/spaceship.png";
import {PiGameControllerDuotone} from "react-icons/pi";
import {AppIcon} from "../components/ui/AppIcon.tsx";
import {BiTask} from "react-icons/bi";
import { LuClipboardList } from "react-icons/lu";
import {toast} from "sonner";

const ProfilePage = () => {
  const {user, updateUser} = useAuth()

  const onClickOfferwall = () => {
    toast.info("Coming soon")
  }

  return (
    <div className="flex-1 flex flex-col w-full">
      <ProfileHeader
        user={user}
        updateUser={updateUser}
      />
      <div className="flex-1 px-4">
        <div className="border rounded-md p-4 flex items-center justify-between mt-4 bg-linear-120 from-black to-purple-900">
          <h1 className="text-2xl text-white app-icon-shadow font-share-tech">Claim Rewards <br/> Today</h1>
          <img
            src={spaceship}
            alt="space ship"
            className="w-28"
          />
        </div>

        <div
          onClick={onClickOfferwall}
          className="flex justify-stretch gap-2 mt-4 text-xs font-serif text-white capitalize app-icon-shadow text-center"
        >
          <div className="flex-1 flex flex-col items-center justify-center gap-2 aspect-video border rounded-md p-3 bg-linear-120 from-black to-purple-900">
            <div className="text-[#d6d6d6]"><AppIcon Icon={LuClipboardList} /></div>
            <h4>Offerwall</h4>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 aspect-video border rounded-md p-3 bg-linear-120 from-black to-purple-900">
            <div className="text-[#d6d6d6]"><AppIcon Icon={BiTask} /></div>
            <h4>Tasks</h4>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 aspect-video border rounded-md p-3 bg-linear-120 from-black to-purple-900">
            <div className="text-[#d6d6d6]"><AppIcon Icon={PiGameControllerDuotone} /></div>
            <h4>Matches</h4>
          </div>
        </div>
      </div>
      <AddBalanceForm />
    </div>
  )
}
export default ProfilePage