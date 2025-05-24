import {useEffect, useState} from "react";
import {useApp} from "../../../context/app-provider.tsx";
import {supabase} from "../../../lib/supabase/client.ts";
import type {MatchWithParticipants} from "../../../data-types.ts";
import {formatCountDown, formatMatchTime} from "../../../utils/formatMatchTime.ts";

const useSingleMatch = (
  matchId: string,
): {
  error: boolean;
  match: MatchWithParticipants | null;
} => {
  const {setLoadings} = useApp()
  const [error, setError] = useState(false)
  const [match, setMatch] = useState<MatchWithParticipants|null>(null)
  const [timeDifference, setTimeDifference] = useState<number|null>(null)

  useEffect(() => {
    setLoadings(true)

    supabase.from("match_participants")
      .select("*")
      .eq("id", matchId)
      .single<MatchWithParticipants>()
      .then(({data, error: loadError}) => {
        setLoadings(false)
        if(loadError){
          setError(true)
          return
        }
        const now = new Date();
        const startDate = new Date(data.start!)
        const diffMs = startDate.getTime() - now.getTime();

        const timerCanStart = diffMs > 0 && diffMs < 86400000;

        if(timerCanStart){
          setTimeDifference(diffMs)
        } else {
          setTimeDifference(0)
        }

        setMatch({
          ...data!,
          start: timerCanStart ? formatCountDown(timeDifference!) : formatMatchTime(data.start!),
        })
      })

  }, [matchId]);

  useEffect(() => {
    if (timeDifference === null || timeDifference <= 0) return;

    const interval = setInterval(() => {
      setTimeDifference(prev => {
        if (prev === null || prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
      setMatch(prev => {
        if (prev === null) return null;
        return {
          ...prev,
          start: formatCountDown(timeDifference!),
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeDifference]);

  return {
    error,
    match,
  }
}
export default useSingleMatch