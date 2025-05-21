import {createContext, use, useEffect, useState} from "react";
import * as React from "react";
import type {AdsGramShowPromiseResult} from "../utils/AdsGramShowPromiseResult.ts";
import type {PostgrestError} from "@supabase/supabase-js";
import {supabase} from "../lib/supabase/client.ts";
import type {Game} from "../data-types.ts";

type AppContextType = {
  showRewardedAd: (onClose: () => void, onError: () => void) => void;
  showInterstitialAd: (onClose: () => void, onError: () => void) => void;
  isLoadings: boolean;
  setLoadings: (value: boolean) => void;
  getGames: (successCallback: (data: Game[]) => void, errorCallback: (error: PostgrestError|null) => void) => void;
}

const AppProvider = createContext<AppContextType>({
  showRewardedAd: () => {},
  showInterstitialAd: () => {},
  isLoadings: false,
  setLoadings: () => {},
  getGames: () => {},
})

export const AppContextProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
  const [adsGramRewardedAdController, setAdsGramRewardedAdController] = useState<any>(null)
  const [adsGramInterstitialAdController, setAdsGramInterstitialAdController] = useState<any>(null)
  const [isLoadings, setLoadings] = useState(false)
  const [_games, setGames] = useState<Game[]>([])


  const isDev = import.meta.env.DEV

  const preventContext = (event: Event) => event.preventDefault()
  const preventDevTools = (event: KeyboardEvent) => {
    if(event.key == "F12" || (event.ctrlKey && event.key == "I")){
      event.preventDefault()
    }
  }

  useEffect(() => {
    if(!isDev) {
      window.addEventListener("contextmenu", preventContext)
      window.addEventListener("keydown", preventDevTools)
    }

    if(!isDev) {
      /*
        This value is decoded as follows:
        - show automatically 2 ads
          within 0.1 hours (6 minutes)
          with a 30-second interval between them
          and a 5-second delay before the first one is shown.
          The last digit, 0, means that the session will be saved when you navigate between pages.
          If you set the last digit as 1, then at any transition between pages,
          the session will be reset, and the ads will start again.
      */
      // In-App Interstitial
      // @ts-ignore
      show_9339498({
        type: 'inApp',
        inAppSettings: {
          frequency: 2,
          capping: 0.1,
          interval: 120,
          timeout: 90,
          everyPage: false
        }
      })

      setAdsGramRewardedAdController(() => {
        // @ts-ignore
        return window.Adsgram.init({blockId: "10980", debug: isDev});
      })

      setAdsGramInterstitialAdController(() => {
        // @ts-ignore
        return window.Adsgram.init({blockId: "int-10981", debug: isDev});
      })
    }


    return () => {
      if(!isDev){
        window.removeEventListener("contextmenu", preventContext)
        window.removeEventListener("keydown", preventDevTools)
      }
    }
  }, [])

  const showRewardedAd = (onClose: () => void, onError: () => void) => {
    if(isDev){
      onClose()
      return
    }
    adsGramRewardedAdController
      .show()
      .then((result: AdsGramShowPromiseResult) => {
        if(result.done){
          onClose()
        }
      })
      .catch((result: AdsGramShowPromiseResult) => {
        if(result.error){
          // Rewarded interstitial
          // @ts-ignore
          show_9339498().then(() => {
            // You need to add your user reward function here, which will be executed after the user watches the ad.
            // For more details, please refer to the detailed instructions.
            onClose()
          }).catch(() => {
            onError()
          })
        }
      })
  }
  const showInterstitialAd = (onClose: () => void, onError: () => void) => {
    if(isDev){
      onClose()
      return
    }
    adsGramInterstitialAdController
      .show()
      .then((result: AdsGramShowPromiseResult) => {
        if(result.done){
          onClose()
        }
      })
      .catch((result: AdsGramShowPromiseResult) => {
        if(result.error) {
          onError()
        }
      })
  }

  const getGames = (successCallback: (gameArray: Game[]) => void, errorCallback: (errorResponse: PostgrestError|null) => void) => {
    if(_games.length > 0){
      successCallback(_games)
    } else {
      setLoadings(true)
      supabase.from("games")
        .select("id, icon, thumbnail, title, mode")
        .order("sort", {ascending: true})
        .eq("visible", true)
        .overrideTypes<Game[]>()
        .then(({data, error}) => {
          setLoadings(false)
          if(error){
            errorCallback(error)
            return
          }

          const modifiedGame = data.map(item => ({
            ...item,
            thumbnail: `https://nthlryuqjkkqesxdlzva.supabase.co/storage/v1/object/public/app/${item.thumbnail}`,
            icon: `https://nthlryuqjkkqesxdlzva.supabase.co/storage/v1/object/public/app/${item.icon}`
          })) as Game[]
          setGames(modifiedGame)
          successCallback(modifiedGame)
        })
    }
  }
  return (
    <AppProvider value={{ showRewardedAd, showInterstitialAd, isLoadings, setLoadings, getGames }}>
      {children}
    </AppProvider>
  )
}

export const useApp = () => use(AppProvider);