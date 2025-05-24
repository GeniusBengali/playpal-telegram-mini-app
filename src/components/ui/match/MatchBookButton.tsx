import type {MouseEvent} from "react";
import {useNavigate} from "react-router-dom";

const MatchBookButton = ({userJoined, matchSize, bookedSize, gameId, matchId}:{
  gameId: string;
  userJoined: boolean;
  matchSize: number;
  bookedSize: number;
  matchId: string;
}) => {
  const navigate = useNavigate()
  const onMatchJoin = (e: MouseEvent) => {
    e.stopPropagation()
    navigate(`/join-match/${gameId}/${matchId}`)
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