import {createContext, use, useEffect, useState} from "react";
import {type AppUser, AuthState} from "../data-types.ts";
import {type Session} from "@supabase/auth-js";
import * as React from "react";
import {supabase} from "../lib/supabase/client.ts";
import type {OAuthResponse} from "@supabase/supabase-js";
import {toast} from "sonner";
import {DummyData} from "../utils/DummyData.ts";
type AuthContextType = {
  user: null|AppUser;
  session: Session | null;
  authState: AuthState;
  updateUser: (data: AppUser) => void;
  signInWithGoogleGoogle: () => Promise<OAuthResponse>;
}
const AuthProvider = createContext<AuthContextType>({
  user: null,
  session: null,
  authState: AuthState.UNINITIALIZED,
  updateUser: () => {},
  signInWithGoogleGoogle: () => Promise.reject(),
})

export const AuthContextProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<null|AppUser>(null)
  const [authState, setAuthState] = useState<AuthState>(AuthState.UNINITIALIZED)
  let baseUrl: string = import.meta.env.VITE_BASE_URL
  if(!baseUrl.endsWith("/")){
    baseUrl += "/"
  }

  const updateUser = (session: Session | null) => {
    if(session){
      setAuthState(AuthState.AUTHENTICATED)
      supabase
        .from("who_am_i")
        .select("*")
        .single<AppUser>()
        .then(({data, error})=>{
          if(error){
            toast.error(error.message)
            return
          }

          setUser(data);
        })
    } else {
      setAuthState(AuthState.UNAUTHENTICATED)
      if(import.meta.env.DEV){
        setUser(DummyData.user)
        return
      }
      setUser(null)
    }
  }

  const updateUserData = (data: AppUser) => {
    setUser(data)
  }

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session)
      updateUser(session)
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session)
      updateUser(session)
      if(session){
        setAuthState(AuthState.AUTHENTICATED)
      } else {
        setAuthState(AuthState.UNAUTHENTICATED)
      }
    });

    return () => subscription.unsubscribe()
  }, []);

  const signInWithGoogleGoogle = async (): Promise<OAuthResponse> => supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: baseUrl + "auth/sign-in",
    }
  })

  return (
    <AuthProvider value={{ user, session, authState, signInWithGoogleGoogle, updateUser: updateUserData }}>
      {children}
    </AuthProvider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => use(AuthProvider);