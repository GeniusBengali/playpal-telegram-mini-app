import {FaSackDollar} from "react-icons/fa6";
import {IoAddCircle, IoLogOutOutline} from "react-icons/io5";
import {useState} from "react";
import {supabase} from "../../lib/supabase/client.ts";
import type {AppUser} from "../../data-types.ts";
import {toast} from "sonner";
import {useApp} from "../../context/app-provider.tsx";

const ProfileHeader = ({
  user,
  updateUser,
}: Readonly<{
  user: AppUser | null;
  updateUser: (data: AppUser) => void;
}>) => {
  const {showRewardedAd} = useApp()
  const [balanceVisible, setBalanceVisible] = useState(false)
  const [balanceLoading, setBalanceLoading] = useState(false)

  const onRequestBalanceVisibility = async () => {
    if(balanceLoading || balanceVisible) return
    setBalanceLoading(true)
    const {data, error} = await supabase
      .from("who_am_i")
      .select("*")
      .single<AppUser>()
    setBalanceLoading(false)

    if(error){
      toast.error(error.message)
      return
    }

    updateUser(data!)

    showRewardedAd(() =>{
      setBalanceVisible(true)
      setTimeout(() => {
        setBalanceVisible(false)
      }, 3000)
    }, ()=> {
      setBalanceVisible(true)
      setTimeout(() => {
        setBalanceVisible(false)
      }, 3000)
    });
  }

  return (
    <div className="bg-[#00000033] rounded-bl-4xl rounded-br-4xl relative overflow-hidden">
      <div className="bg-[#27C9FF59] rounded-full absolute -top-[50px] -left-[190px] w-[155px] h-[340px] rotate-45 blur-[130px]" />
      <div className="bg-[#FBD13066] rounded-full absolute -bottom-[190px] -right-[140px] w-[155px] h-[340px] -rotate-[16px] blur-[130px]" />
      <div className="flex gap-2 items-end p-4 relative">
        <button className="absolute top-0 right-0 m-2" onClick={async () => {await supabase.auth.signOut()}}>
          <IoLogOutOutline size={24} />
        </button>
        <img src={user?.picture} alt="avatar" className="size-20 rounded-full object-cover border border-transparent bg-linear-120 from-[#27C9FF] to-[#d400ff] bg-clip-border p-1" />
        <div>
          <h6 className="font-roboto font-bold mb-2 text-xl app-gradient-font">{user?.name}</h6>
          <div className="w-36 h-7 bg-white border border-white rounded-full overflow-hidden relative flex items-center">
            <p className="px-2 text-gray-800">{user?.balance} TK</p>

            <div onClick={onRequestBalanceVisibility} className={`absolute top-0 left-0 w-full h-full bg-purple-900 rounded-full flex items-center gap-2 text-white transition-transform ${balanceVisible && "translate-x-[116px]"}`}>
              <div className="relative size-[20px] ml-[4px]">
                <FaSackDollar
                  className="text-yellow-300"
                  size={18}
                />
                {balanceLoading && (
                  <div className="absolute size-6 border-2 p-2 border-dashed border-white top-1/2 left-1/2 -translate-1/2 rounded-full bg-yellow-500 animate-spin"></div>
                )}
              </div>
              <p className="font-roboto text-sm">Playpal</p>
            </div>
          </div>
        </div>
        <label htmlFor="add_balance_form" className="h-7 flex items-center justify-center gap-1 text-yellow-300">
          <IoAddCircle size={24} />
          <p className="font-roboto text-xs">Deposit</p>
        </label>
      </div>
    </div>
  )
}
export default ProfileHeader