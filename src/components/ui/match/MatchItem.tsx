import {LiaGamepadSolid} from "react-icons/lia";
import {IoLocationOutline, IoPeopleOutline} from "react-icons/io5";
import type {DailyMatch, Game} from "../../../data-types.ts";
import {matchTeamLabel} from "../../../utils/matchTeamLabel.ts";
import {matchPrizepool} from "../../../utils/matchPrizepool.ts";
import {perScorePrize} from "../../../utils/perScorePrize.ts";
import type {ReactNode, MouseEvent} from "react";
import {FaCaretDown} from "react-icons/fa";

export const MatchItem = ({
  game,
  match,
  onPrizepoolClick,
  startTime,
  onClick,
  children,
}: {
  game?: Game;
  match?: DailyMatch;
  onPrizepoolClick?: (e: MouseEvent) => void;
  startTime?: string;
  onClick?: (e: MouseEvent) => void;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 border border-dashed bg-purple-1000 p-2 rounded-sm" key={match?.id ?? "random"}>
      <button onClick={onClick}>
        <div className="flex gap-2">
          <img
            src={game?.icon}
            className="size-18 rounded-sm"
            loading="lazy"
            alt={game?.title}
          />
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex gap-2 items-start">
              <h1 className="flex-1 truncate uppercase font-bold font-play app-gradient-font text-start text-sm">{match?.title}</h1>
              <span className="p-1 bg-purple-950 rounded-sm">{startTime ?? match?.startHumanTime}</span>
              <span className="text-[8px] px-1 rounded-xs text-white bg-green-600">LIVE</span>
            </div>
            <div className="flex gap-1">
              <LiaGamepadSolid size={16} />
              <span>{game?.mode}</span>
            </div>
            <div className="flex gap-1">
              <div className="flex-1 flex gap-1">
                <IoLocationOutline size={16} />
                <span>{match?.infos.find(i => i.title.toLowerCase() == "map")?.value ?? "NO MAP"}</span>
              </div>
              <div className="flex-1 flex gap-1">
                <IoPeopleOutline size={16} />
                <span>{matchTeamLabel(match?.team_size ?? 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </button>
      <div className="flex justify-between items-start uppercase">
        <div className="flex gap-2" onClick={onPrizepoolClick}>
          <div className="border-r pr-2">
            <h4 className="font-bold">PRIZEPOOL</h4>
            {onPrizepoolClick ? (
              <div className="flex justify-between">
                <span className="text-[10px]">Details</span>
                <FaCaretDown size={16} />
              </div>
            ) : <span>{matchPrizepool(match?.prizes ?? [], 50)}</span>}
          </div>
          <div className="border-r pr-2">
            <h4 className="font-bold">ENTRY FEE</h4>
            <span className="text-[10px]">{match?.entry_fee == 0 ? "Free" : match?.entry_fee}</span>
          </div>
          <div>
            <h4 className="font-bold">PER {match?.score_title}</h4>
            <span className="text-[10px]">{perScorePrize(match?.prizes ?? [])}</span>
          </div>
        </div>
        {children}
      </div>
      <progress className="progress w-full" value={match?.booked ?? 95} max={match?.match_size ?? 100}></progress>
      <div className="flex justify-between items-center text-xs text-gray-500 text-[10px]">
        <span>{(match?.match_size ?? 100) - (match?.booked ?? 95)} SLOTS LEFT</span>
        <span>{match?.booked}/{match?.match_size}</span>
      </div>
    </div>
  )
}