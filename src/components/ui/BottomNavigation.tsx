import {GiSwordsPower} from "react-icons/gi";
import {FaHandHoldingDollar} from "react-icons/fa6";
import {IoDiamond, IoHome} from "react-icons/io5";
import {Link, useLocation} from "react-router-dom";
import {IconContext, type IconType} from "react-icons";

const BottomNavigation = () => {
  const getPath = useLocation().pathname
  const links: {
    Icon: IconType;
    path: string;
    label: string;
    childPath: string[];
  }[] = [
    {
      Icon: IoHome,
      path: "/",
      label: "Home",
      childPath: ["/"]
    },
    {
      Icon: GiSwordsPower,
      path: "/games",
      label: "Games",
      childPath: ["/games"]
    },
    {
      Icon: IoDiamond,
      path: "/topup",
      label: "Topup",
      childPath: ["/topup"]
    },
    {
      Icon: FaHandHoldingDollar,
      path: "/payout",
      label: "Payout",
      childPath: ["/payout"]
    },
  ]

  return (
    <div className="dock uppercase">
      {links.map((link, index) => (
        <Link to={link.path} className={`${link.childPath.includes(getPath) ? "after:from-blue-600 after:to-yellow-300 after:bg-linear-120 app-gradient-font dock-active" : ""}`} key={index}>
          {link.childPath.includes(getPath) ? (
            <svg width="24" height="24">
              <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(0)">
                  <stop offset="5%"  stopColor="#27C9FF" />
                  <stop offset="95%" stopColor="#FBD130" />
                </linearGradient>
              </defs>
              <IconContext.Provider value={{ attr: {fill: "url('#myGradient')"}}}>
                <link.Icon size={24} />
              </IconContext.Provider>
            </svg>
          ) : (
            <link.Icon size={24} />
          )}
          <span className={`dock-label`}>{link.label}</span>
        </Link>
      ))}
    </div>
  )
}
export default BottomNavigation