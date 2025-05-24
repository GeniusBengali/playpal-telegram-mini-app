import AppBottomSheet from "../AppBottomSheet.tsx";
import type {MatchPrize} from "../../../data-types.ts";

const MatchPrizepools = ({
  open,
  setOpen,
  prizes,
  scoreTitle,
}:{
  open: boolean;
  setOpen: (open: boolean) => void;
  prizes: MatchPrize[];
  scoreTitle: string;
}) => {
  return (
    <AppBottomSheet isOpen={open} onOpenChange={setOpen}>
      <div className="m-3 mt-0 overflow-x-auto">
        <table className="table table-xs text-xs">
          <thead>
            <tr className="uppercase text-center">
              <th className="border border-gray-600">RANK</th>
              <th className="border border-gray-600">RANK PRIZE</th>
              <th className="border border-gray-600">PER {scoreTitle}</th>
            </tr>
          </thead>
          <tbody>
            {prizes.map(prize => (
              <tr key={prize.position}>
                <td className="border border-gray-600 text-center">{prize.position}</td>
                <td className="border border-gray-600 text-end">{prize.position_prize}</td>
                <td className="border border-gray-600 text-end">{prize.score_prize == 0 ? "N/A" : prize.score_prize / prize.per_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppBottomSheet>
  )
}
export default MatchPrizepools