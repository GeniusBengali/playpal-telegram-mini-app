import {createContext, use, useEffect, useState} from "react";
import * as React from "react";
import type {AdsGramShowPromiseResult} from "../utils/AdsGramShowPromiseResult.ts";

type AppContextType = {
  showRewardedAd: (onClose: () => void, onError: () => void) => void;
  showInterstitialAd: (onClose: () => void, onError: () => void) => void;
}

const AppProvider = createContext<AppContextType>({
  showRewardedAd: () => {},
  showInterstitialAd: () => {},
})

export const AppContextProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
  const [adsGramRewardedAdController, setAdsGramRewardedAdController] = useState<any>(null)
  const [adsGramInterstitialAdController, setAdsGramInterstitialAdController] = useState<any>(null)
  const debugOnly = (import.meta.env.VITE_BASE_URL as string).includes("localhost");

  useEffect(() => {


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
        interval: 30,
        timeout: 5,
        everyPage: false
      }
    })

    setAdsGramRewardedAdController(() => {
      // @ts-ignore
      return window.Adsgram.init({ blockId: "10980", debug: debugOnly });
    })

    setAdsGramInterstitialAdController(() => {
      // @ts-ignore
      return window.Adsgram.init({ blockId: "int-10981", debug: debugOnly });
    })
  }, [])

  const showRewardedAd = (onClose: () => void, onError: () => void) => {
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

  return (
    <AppProvider value={{ showRewardedAd, showInterstitialAd }}>
      {children}
    </AppProvider>
  )
}

export const useApp = () => use(AppProvider);