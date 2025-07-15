import type {Tables} from "./lib/supabase/types.ts";

export const AuthState =  {
  UNINITIALIZED:"UNINITIALIZED",
  UNAUTHENTICATED: "UNAUTHENTICATED",
  AUTHENTICATED:"AUTHENTICATED"
}
export type AuthState = (typeof AuthState)[keyof typeof AuthState];

// export type AuthState = typeof AuthState[keyof typeof AuthState];
export type AppUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  picture: string;
  banner_art: string;
  balance: number;
  topup_balance: number;
  daily_limit: number;
  extended_daily_limit: number;
  limit_expire: string;
  referrer: Profile;
  social: Social;
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

export type Game = Omit<Tables<"games">, "admin_id"|"updated_at"|"created_at"|"visible"|"sort">
export type DailyMatch = Omit<Tables<"daily_match">, "infos"|"prizes"> & {
  infos: TitleValue[],
  prizes: MatchPrize[],
  prizepool?: number;
  startHumanTime?: string;
}

export type TitleValue = {
  title: string;
  value: string;
}

export type MatchPrize = {
  position: number;
  position_prize: number;
  position_title: string
  per_score: number;
  score_prize: number;
}

export type MatchWithParticipants = DailyMatch & {
  teams: MatchTeam[],
}

export type MatchPlayer = {
  "user_id": string;
  "name": string;
  "score": number;
  "reward": number;
}

export type MatchTeam = {
  "seat": number;
  "players": MatchPlayer[],
  "position": number;
}

export type MatchEntrance = {
  credentials: TitleValue[]
}