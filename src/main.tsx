import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {backButton, closingBehavior, init} from "@telegram-apps/sdk-react";
import {createTheme, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import AppRoutes from "./routes.tsx";
import {AuthContextProvider} from "./context/auth-provider.tsx";
import {AppContextProvider} from "./context/app-provider.tsx";
import {Toaster} from "sonner";


if(import.meta.env.PROD){
  init()
  if(backButton.mount.isAvailable()){
    backButton.mount()
  }
  if(closingBehavior.mount.isAvailable()){
    closingBehavior.mount()
  }
}

const theme = createTheme({
  colorSchemes: {
    dark: {}
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider enableCssLayer>
        <AuthContextProvider>
          <AppContextProvider>
            <Toaster theme="dark" position="top-right" />
            <RouterProvider router={AppRoutes}/>
          </AppContextProvider>
        </AuthContextProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  </StrictMode>
)
