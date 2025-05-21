import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import AppRoutes from './routes.tsx'
import {Toaster} from "sonner";
import {AuthContextProvider} from "./context/auth-provider.tsx";
import {AppContextProvider} from "./context/app-provider.tsx";
import {backButton, closingBehavior, init} from "@telegram-apps/sdk-react";

// const teleWebApp = window.Telegram.WebApp

if(import.meta.env.PROD){
  init()
  if(backButton.mount.isAvailable()){
    backButton.mount()
  }
  if(closingBehavior.mount.isAvailable()){
    closingBehavior.mount()
  }
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
