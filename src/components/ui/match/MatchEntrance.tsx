import useRealtimeMatchEntrance from "./useRealtimeMatchEntrance.ts";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {toast} from "sonner";
import {IoCopySharp} from "react-icons/io5";

const MatchEntrance = ({matchId}:{matchId: string}) => {
  const {entrance} = useRealtimeMatchEntrance(matchId!)

  return entrance && (
      <div className="flex flex-col justify-stretch bg-linear-[135deg] from-purple-1000 to-purple-700 rounded-md border border-dashed">
        <h1 className="font-bold font-play p-2 uppercase text-center text-sm border-b">Match Entrance</h1>
        {entrance.map((data, index)=> (
          <CopyToClipboard
            onCopy={() => toast.success("Copied")}
            text={data.value}
            key={index}
          >
            <div className="flex gap-2 cursor-pointer p-2 w-fit">
              <IoCopySharp />
              <strong className="font-bold uppercase">{data.title}:</strong>
              <span>{data.value}</span>
            </div>
          </CopyToClipboard>
        ))}
      </div>
    )
}

export default MatchEntrance