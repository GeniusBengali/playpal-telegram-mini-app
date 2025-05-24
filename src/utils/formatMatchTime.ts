import {isBefore} from "date-fns/isBefore";
import {format} from "date-fns/format";
import {isToday} from "date-fns/isToday";
import {isTomorrow} from "date-fns/isTomorrow";
import {differenceInCalendarDays} from "date-fns/differenceInCalendarDays";

export const formatMatchTime = (utcDate: string | Date): string => {
  const startDate = new Date(utcDate)
  const now = new Date()

  if(isBefore(startDate, now)){
    return format(startDate, "dd MMM h:mm a");
  }

  if(isToday(startDate)){
    return `Today ${format(startDate, "h:mm a")}`;
  }

  if(isTomorrow(startDate)){
    return `Tomorrow ${format(startDate, "h:mm a")}`;
  }
  const daysAway = differenceInCalendarDays(startDate, now)
  return `Start in ${daysAway} days`
}

export const formatCountDown = (diffMs: number): string => {
  if(diffMs > 0){
    const hours = String(Math.floor(diffMs / (1000 * 60 * 60))).padStart(2, "0")
    const minutes = String(Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0")
    const seconds = String(Math.floor((diffMs % (1000 * 60)) / 1000)).padStart(2, "0")
    return `${hours}:${minutes}:${seconds}`
  } else {
    return "00:00:00"
  }
}