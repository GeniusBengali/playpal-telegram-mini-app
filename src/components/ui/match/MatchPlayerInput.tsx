import {IconButton} from "@mui/material";
import {IoTrashOutline} from "react-icons/io5";
import {AiOutlineUserAdd} from "react-icons/ai";
import type {ChangeEvent} from "react";

const MatchPlayerInput = ({
  gameIcon,
  gameTitle,
  value,
  onChange,
  onClickAdd,
  onClickDelete,
  hideDeleteButton = false,
  hideAddButton = false,
  hasError = false,
  errorText = "",
}: {
  gameIcon: string;
  gameTitle: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickAdd?: () => void;
  onClickDelete?: () => void;
  hideDeleteButton?: boolean;
  hideAddButton?: boolean;
  hasError?: boolean;
  errorText?: string;
}) => {
  return (
    <div className={`flex gap-2 ${hasError ? "bg-red-950" : "bg-purple-950"} p-2 rounded-sm`}>
      <img
        src={gameIcon}
        alt={gameTitle}
        className="size-14 rounded-sm overflow-hidden"
        loading="lazy"
      />
      <div className="flex-1 flex flex-col justify-between gap-2">
        <div className="flex items-start justify-between">
          <span className="uppercase font-play font-bold">{gameTitle}</span>
          <span className="text-red-600">{errorText}</span>
        </div>
        <input
          placeholder="IN-GAME NAME"
          className="input input-sm bg-purple-1000"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className={`flex flex-col items-center gap-2 ${!hideDeleteButton && !hideAddButton ? "justify-between" : "justify-end"}`}>
        {!hideDeleteButton && (
          <IconButton className="!p-0" onClick={onClickDelete}>
            <IoTrashOutline size={18} color="#fb2c36" />
          </IconButton>
        )}

        {!hideAddButton && (
          <IconButton className="!p-0" onClick={onClickAdd}>
            <AiOutlineUserAdd size={18} />
          </IconButton>
        )}
      </div>
    </div>
  )
}
export default MatchPlayerInput