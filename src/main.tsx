import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes.tsx'
import {Toaster} from "sonner";
import {AuthContextProvider} from "./context/auth-provider.tsx";
import {AppContextProvider} from "./context/app-provider.tsx";
import {addToHomeScreen, backButton, checkHomeScreenStatus, init} from "@telegram-apps/sdk-react";

// const teleWebApp = window.Telegram.WebApp

if(import.meta.env.PROD){
  init()
  backButton.mount()
  if(checkHomeScreenStatus.isAvailable()){
    checkHomeScreenStatus().then(status => {
      if(status == "missed"){
        addToHomeScreen();
      }
    })
  }

  /*teleWebApp.setBackgroundColor("#262626")
  teleWebApp.enableClosingConfirmation()
  // @ts-ignore
  teleWebApp.checkHomeScreenStatus((status: "unsupported"|"unknown"|"added"|"missed")=> {
    if(status == "missed"){
      // @ts-ignore
      teleWebApp.addToHomeScreen()
    }
  })*/
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <AppContextProvider>
        <Toaster position="top-right" />
        <RouterProvider router={AppRoutes}/>
      </AppContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
