import {useEffect, useState} from "react";
import {supabase} from "../../../lib/supabase/client.ts";
import type {DailyMatch} from "../../../data-types.ts";
import {formatMatchTime} from "../../../utils/formatMatchTime.ts";
import {matchPrizepool} from "../../../utils/matchPrizepool.ts";

const useMatchList = (
  pageNumber: number,
  pageSize: number,
  matchStatus: "opened"|"played",
  gameId: string,
): {
  loading: boolean;
  error: boolean;
  matches: DailyMatch[];
  hasMore: boolean;
} => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [matches, setMatches] = useState<DailyMatch[]>([])
  const [hasMore, setHasMore] = useState(true)


  const fromRange = (pageNumber - 1) * pageSize
  const toRange = fromRange + pageSize

  useEffect(() => {
    setLoading(true)
    setError(false)

    supabase
      .from("daily_match")
      .select("*")
      .eq("status", matchStatus)
      .eq("game_id", gameId!)
      .order("start", {ascending: true})
      .range(fromRange, toRange)
      .overrideTypes<DailyMatch[]>()
      .then(({data, error}) => {
        setLoading(false)
        if(error){
          setError(true)
          return
        }

        setHasMore(data.length === pageSize)

        setMatches(prevState => {
          const existingMatchIds = new Set(prevState.map(m => m.id))
          const filteredNewData = data.filter(m => !existingMatchIds.has(m.id))
          return [
            ...prevState,
            ...filteredNewData.map(match => ({
              ...match,
              startHumanTime: formatMatchTime(match.start!),
              prizepool: matchPrizepool(match.prizes, 50)
            }))
          ]
        })
      })
  }, [pageNumber, pageSize, matchStatus, gameId]);

  return {
    loading,
    error,
    matches,
    hasMore,
  }
}

export default useMatchList