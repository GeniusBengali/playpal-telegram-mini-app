import {GiSwordsPower} from "react-icons/gi";
import {FaHandHoldingDollar} from "react-icons/fa6";
import {IoDiamond, IoHome} from "react-icons/io5";
import {Link, useLocation} from "react-router-dom";
import {IconContext} from "react-icons";

const BottomNavigation = () => {
  const getPath = useLocation().pathname

  return (
    <div className="fixed bottom-0 z-50 w-full uppercase bg-[#262626] px-10 py-4 flex justify-between items-center">
      <Link to="/" className={`flex flex-col items-center gap-1 ${getPath === "/" ? "text-yellow-600" : ""}`}>
        { getPath === "/" ? (
          <svg width="24" height="24">
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(0)">
                <stop offset="5%"  stopColor="#27C9FF" />
                <stop offset="95%" stopColor="#FBD130" />
              </linearGradient>
            </defs>
            <IconContext.Provider value={{ attr: {fill: "url('#myGradient')"}}}>
              <IoHome size={24} />
            </IconContext.Provider>
          </svg>
        ) : (
          <IoHome size={24} />
        )}
        <h6 className={`font-roboto text-xs ${getPath === "/" ? "text-transparent bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-clip-text" : ""}`}>HOME</h6>
      </Link>
      <Link to="/games" className={`flex flex-col items-center gap-1 ${getPath === "/games" ? "text-yellow-600" : ""}`}>
        { getPath === "/games" ? (
          <svg width="24" height="24">
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(0)">
                <stop offset="5%"  stopColor="#27C9FF" />
                <stop offset="95%" stopColor="#FBD130" />
              </linearGradient>
            </defs>
            <IconContext.Provider value={{ attr: {fill: "url('#myGradient')"}}}>
              <GiSwordsPower size={24} />
            </IconContext.Provider>
          </svg>
        ) : (
          <GiSwordsPower size={24} />
        )}
        <h6 className={`font-roboto text-xs ${getPath === "/games" ? "text-transparent bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-clip-text" : ""}`}>GAMES</h6>
      </Link>
      <Link to="/topup" className={`flex flex-col items-center gap-1 ${getPath === "/topup" ? "text-yellow-600" : ""}`}>
        { getPath === "/topup" ? (
          <svg width="24" height="24">
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(0)">
                <stop offset="5%"  stopColor="#27C9FF" />
                <stop offset="95%" stopColor="#FBD130" />
              </linearGradient>
            </defs>
            <IconContext.Provider value={{ attr: {fill: "url('#myGradient')"}}}>
              <IoDiamond size={24} />
            </IconContext.Provider>
          </svg>
        ) : (
          <IoDiamond size={24} />
        )}
        <h6 className={`font-roboto text-xs ${getPath === "/topup" ? "text-transparent bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-clip-text" : ""}`}>TOPUP</h6>
      </Link>
      <Link to="/payout" className={`flex flex-col items-center gap-1 ${getPath === "/payout" ? "text-yellow-600" : ""}`}>
        { getPath === "/payout" ? (
          <svg width="24" height="24">
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(0)">
                <stop offset="5%"  stopColor="#27C9FF" />
                <stop offset="95%" stopColor="#FBD130" />
              </linearGradient>
            </defs>
            <IconContext.Provider value={{ attr: {fill: "url('#myGradient')"}}}>
              <FaHandHoldingDollar size={24} />
            </IconContext.Provider>
          </svg>
        ) : (
          <FaHandHoldingDollar size={24} />
        )}
        <h6 className={`font-roboto text-xs ${getPath === "/payout" ? "text-transparent bg-gradient-to-tr from-[#27C9FF] to-[#FBD130] bg-clip-text" : ""}`}>PAYOUT</h6>
      </Link>
    </div>
  )
}
export default BottomNavigation