import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes.tsx'
import {Toaster} from "sonner";
import {AuthContextProvider} from "./context/auth-provider.tsx";
// import {init,  backButton, miniApp} from "@telegram-apps/sdk-react";
//
//
// init()
// if(miniApp.mountSync.isAvailable()){
//   miniApp.mountSync()
// }
//
// if (miniApp.ready.isAvailable()) {
//   miniApp.ready();
// }
//
// if(backButton.mount.isAvailable()){
//   backButton.mount()
// }


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <Toaster position="top-right" />
      <RouterProvider router={AppRoutes}/>
    </AuthContextProvider>
  </StrictMode>,
)
