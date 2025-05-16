import {useAuth} from "../context/auth-provider.tsx";
import ProfileHeader from "../components/ui/ProfileHeader.tsx";
import AddBalanceForm from "../components/ui/AddBalanceForm.tsx";

const ProfilePage = () => {
  const {user, updateUser} = useAuth()

  return (
    <div className="flex-1 bg-[#041218]">
      <ProfileHeader
        user={user}
        updateUser={updateUser}
      />
      <AddBalanceForm />
    </div>
  )
}
export default ProfilePage