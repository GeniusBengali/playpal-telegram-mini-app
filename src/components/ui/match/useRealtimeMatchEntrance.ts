import {useEffect, useState} from "react";
import type {MatchEntrance, TitleValue} from "../../../data-types.ts";
import {supabase} from "../../../lib/supabase/client.ts";

const useRealtimeMatchEntrance = (matchId: string):{
  entrance: TitleValue[]|null;
  error: boolean;
} => {
  const [entrance, setEntrance] = useState<TitleValue[]|null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    supabase.from("match_entrances")
      .select("credentials")
      .eq("id", matchId)
      .single<MatchEntrance>()
      .then(({data, error}) => {
        if(error){
          setError(true)
          return
        }

        setEntrance(data?.credentials)
      })
  }, []);

  useEffect(() => {
    if(entrance != null){
      return
    }
    const channel = supabase
      .channel("match entrance")
      .on("postgres_changes", {
        schema: "public",
        table: "match_entrances",
        event: "UPDATE",
        filter: "id=eq."+matchId,
      }, (payload) => {
        setEntrance(payload.new.credentials)
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, []);
  
  return {entrance, error}
}
export default useRealtimeMatchEntrance