
// @ts-ignore
export enum AuthState {
  UNINITIALIZED = "UNINITIALIZED",
  UNAUTHENTICATED = "UNAUTHENTICATED",
  AUTHENTICATED = "AUTHENTICATED"
}

// export type AuthState = typeof AuthState[keyof typeof AuthState];
export type AppUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  picture: string;
  banner_art: string;
  balance: number;
  daily_limit: number;
  extended_daily_limit: number;
  limit_expire: string;
  referrer: Profile;
  blocked: boolean;
  note: string;
}

export type Profile = {
  id: string;
  name: string;
  username: string;
  picture: string;
  banner_art: string;
  social: Social;
}
export type Social = {
  [key: string]: string | null | undefined | [];
}


export type DepositForm = {
  amount: string;
}