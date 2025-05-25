import {useEffect, useState} from "react";
import {useApp} from "../../../context/app-provider.tsx";
import {supabase} from "../../../lib/supabase/client.ts";
import type {DailyMatch, MatchTeam, MatchWithParticipants} from "../../../data-types.ts";
import {formatCountDown} from "../../../utils/formatMatchTime.ts";

const useSingleMatch = (
  matchData: DailyMatch
): {
  error: boolean;
  match: MatchWithParticipants;
} => {
  const {setLoadings} = useApp()
  const [error, setError] = useState(false)
  const [match, setMatch] = useState<MatchWithParticipants>(matchData as MatchWithParticipants)
  const [timeDifference, setTimeDifference] = useState<number|null>(null)

  useEffect(() => {
    setLoadings(true)

    supabase.from("match_teams_and_players")
      .select("seat, position, players")
      .eq("local_match_id", matchData.id!)
      .order("seat", {ascending: true})
      .overrideTypes<MatchTeam[]>()
      .then(({data, error: loadError}) => {
        setLoadings(false)
        if(loadError){
          setError(true)
          return
        }

        setMatch(prevState => ({
          ...prevState,
          teams: data,
        }))
      })

  }, []);

  useEffect(() => {
    const now = new Date();
    const startDate = new Date(matchData.start!)
    const diffMs = startDate.getTime() - now.getTime();
    const timerCanStart = diffMs > 0 && diffMs < 86400000;

    if(timerCanStart){
      setTimeDifference(diffMs)
    } else {
      setTimeDifference(0)
    }
  }, []);

  useEffect(() => {
    if (timeDifference === null || timeDifference <= 0) return;

    const timeOut = setTimeout(() => {
      setTimeDifference(prev => {
        if (prev === null || prev <= 1000) {
          clearInterval(timeOut);
          return 0;
        }
        return prev - 1000;
      });

      setMatch(prev => ({
        ...prev,
        start: formatCountDown(timeDifference!),
      }));
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [timeDifference]);

  return {
    error,
    match,
  }
}
export default useSingleMatch