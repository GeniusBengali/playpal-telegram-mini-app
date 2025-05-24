import type {MouseEvent} from "react";
import {useNavigate} from "react-router-dom";
import type {DailyMatch, Game} from "../../../data-types.ts";

const MatchBookButton = ({userJoined, matchSize, bookedSize, game, match}:{
  game: Game;
  match: DailyMatch
  userJoined: boolean;
  matchSize: number;
  bookedSize: number;
}) => {
  const navigate = useNavigate()
  const onMatchJoin = (e: MouseEvent) => {
    e.stopPropagation()
    navigate(`/join-match`, {
      state: {
        game: game,
        match: match
      }
    })
  }

  if(userJoined || matchSize <= bookedSize) {
    return <button className="self-center btn btn-disabled btn-dash btn-secondary btn-sm uppercase">
    {matchSize <= bookedSize ? "Booked" : "Joined"}
    </button>
  } else {
    return <button
      className="self-center btn btn-dash btn-secondary btn-sm"
    onClick={onMatchJoin}>
      Book Now
    </button>
  }
}
export default MatchBookButton;