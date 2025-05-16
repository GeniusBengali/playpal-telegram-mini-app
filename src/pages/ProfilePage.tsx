import {useAuth} from "../auth-provider.tsx";
import ProfileHeader from "../components/ui/ProfileHeader.tsx";
import AddBalanceForm from "../components/ui/AddBalanceForm.tsx";
import {supabase} from "../lib/supabase/client.ts";

const ProfilePage = () => {
  const {user, updateUser} = useAuth()

  return (
    <div className="min-h-dvh bg-[#041218]">
      <ProfileHeader
        user={user}
        updateUser={updateUser}
      />
      <AddBalanceForm />
      <button onClick={() => {supabase.auth.signOut()}}>Sign Out</button>
    </div>
  )
}
export default ProfilePage