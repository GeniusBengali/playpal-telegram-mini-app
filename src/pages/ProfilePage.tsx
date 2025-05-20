import {useAuth} from "../context/auth-provider.tsx";
import ProfileHeader from "../components/ui/ProfileHeader.tsx";
import AddBalanceForm from "../components/ui/AddBalanceForm.tsx";
import {GiSwordsPower} from "react-icons/gi";
import {IconContext} from "react-icons";

const ProfilePage = () => {
  const {user, updateUser} = useAuth()

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
            src="./src/assets/images/spaceship.png"
            alt="space ship"
            className="w-28"
          />
        </div>

        <div className="flex justify-stretch gap-2 mt-4">
          <div className="flex-1 flex flex-col items-center justify-center gap-2 aspect-video font-serif text-xs border rounded-md p-3 bg-linear-120 from-black to-purple-900">
            <svg width="36" height="36" viewBox="0 0 36 36">
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ffff" />
                  <stop offset="100%" stopColor="#d400ff" />
                </linearGradient>

                <filter id="multiGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="#fff" flood-opacity="1" />
                  <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#fff" flood-opacity="1" />
                  <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#00ffff" flood-opacity="1" />
                </filter>
              </defs>

              <g filter="url(#multiGlow)">
                <IconContext.Provider value={{ attr: { fill: "url(#neonGradient)" } }}>
                  <GiSwordsPower size={36} />
                </IconContext.Provider>
              </g>
            </svg>

            <h4 className=" uppercase text-[#00ffff]">Offerwall</h4>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 aspect-video font-serif text-xs border rounded-md p-3 bg-linear-120 from-black to-purple-900">
            <GiSwordsPower size={36} className="text-[#00ffff]" />
            <h4 className=" uppercase text-[#00ffff]">Offerwall</h4>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 aspect-video font-serif text-xs border rounded-md p-3 bg-linear-120 from-black to-purple-900">
            <svg width="36" height="36">
              <defs>
                <linearGradient id="neonGradient" gradientTransform="rotate(45)">
                  <stop offset="0%" stopColor="#00ffff" />
                  <stop offset="100%" stopColor="#d400ff" />
                </linearGradient>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g filter="url(#neonGlow)">
                <IconContext.Provider value={{ attr: { fill: "url(#neonGradient)" } }}>
                  <GiSwordsPower size={36} />
                </IconContext.Provider>
              </g>
            </svg>
            <h4 className=" uppercase text-[#00ffff]">Offerwall</h4>
          </div>
        </div>
      </div>
      <AddBalanceForm />
    </div>
  )
}
export default ProfilePage