export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      carousels: {
        Row: {
          admin_id: string
          banner: string
          caption: string | null
          created_at: string
          id: string
          sort: number
          updated_at: string
          url: string | null
          visible: boolean
        }
        Insert: {
          admin_id?: string
          banner: string
          caption?: string | null
          created_at?: string
          id?: string
          sort: number
          updated_at?: string
          url?: string | null
          visible?: boolean
        }
        Update: {
          admin_id?: string
          banner?: string
          caption?: string | null
          created_at?: string
          id?: string
          sort?: number
          updated_at?: string
          url?: string | null
          visible?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "carousels_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "carousels_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "carousels_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      entries: {
        Row: {
          created_at: string
          id: string
          local_match_id: string
          total_entries: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          local_match_id: string
          total_entries: number
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          local_match_id?: string
          total_entries?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "entries_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "admin_daily_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entries_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "daily_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entries_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "local_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entries_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "match_participants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      games: {
        Row: {
          admin_id: string
          created_at: string
          icon: string
          id: string
          mode: string
          sort: number
          thumbnail: string
          title: string
          updated_at: string
          visible: boolean
        }
        Insert: {
          admin_id?: string
          created_at?: string
          icon: string
          id?: string
          mode: string
          sort: number
          thumbnail: string
          title: string
          updated_at?: string
          visible?: boolean
        }
        Update: {
          admin_id?: string
          created_at?: string
          icon?: string
          id?: string
          mode?: string
          sort?: number
          thumbnail?: string
          title?: string
          updated_at?: string
          visible?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "games_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "games_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "games_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      local_match: {
        Row: {
          admin_id: string
          created_at: string
          entry_fee: number
          game_id: string
          host_device: string | null
          id: string
          info_id: string
          match_size: number
          prize_id: string
          start: string
          status: string
          team_size: number
          title: string
          updated_at: string
        }
        Insert: {
          admin_id?: string
          created_at?: string
          entry_fee: number
          game_id: string
          host_device?: string | null
          id?: string
          info_id: string
          match_size?: number
          prize_id: string
          start: string
          status: string
          team_size?: number
          title: string
          updated_at?: string
        }
        Update: {
          admin_id?: string
          created_at?: string
          entry_fee?: number
          game_id?: string
          host_device?: string | null
          id?: string
          info_id?: string
          match_size?: number
          prize_id?: string
          start?: string
          status?: string
          team_size?: number
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "local_match_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "admin_games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_info_id_fkey"
            columns: ["info_id"]
            isOneToOne: false
            referencedRelation: "match_infos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_prize_id_fkey"
            columns: ["prize_id"]
            isOneToOne: false
            referencedRelation: "prizepools"
            referencedColumns: ["id"]
          },
        ]
      }
      match_entrances: {
        Row: {
          credentials: Json | null
          id: string
        }
        Insert: {
          credentials?: Json | null
          id: string
        }
        Update: {
          credentials?: Json | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "match_entrances_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "admin_daily_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_entrances_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "daily_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_entrances_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "local_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_entrances_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "match_participants"
            referencedColumns: ["id"]
          },
        ]
      }
      match_infos: {
        Row: {
          admin_id: string
          created_at: string
          id: string
          infos: Json
          title: string
          updated_at: string
        }
        Insert: {
          admin_id?: string
          created_at?: string
          id?: string
          infos: Json
          title: string
          updated_at?: string
        }
        Update: {
          admin_id?: string
          created_at?: string
          id?: string
          infos?: Json
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "match_infos_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_infos_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_infos_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      my_reward_links: {
        Row: {
          id: string
          last_refresh: string
          link_visited_at: string | null
          links: Json | null
          pagination: number | null
        }
        Insert: {
          id?: string
          last_refresh?: string
          link_visited_at?: string | null
          links?: Json | null
          pagination?: number | null
        }
        Update: {
          id?: string
          last_refresh?: string
          link_visited_at?: string | null
          links?: Json | null
          pagination?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "my_reward_links_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "my_reward_links_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "my_reward_links_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      players: {
        Row: {
          created_at: string
          id: string
          name: string
          reward: number | null
          score: number | null
          team_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          reward?: number | null
          score?: number | null
          team_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          reward?: number | null
          score?: number | null
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "players_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "send_money_preview"
            referencedColumns: ["id"]
          },
        ]
      }
      prizepools: {
        Row: {
          admin_id: string
          created_at: string
          id: string
          prizes: Json
          score_title: string
          title: string
          updated_at: string
        }
        Insert: {
          admin_id?: string
          created_at?: string
          id?: string
          prizes: Json
          score_title: string
          title: string
          updated_at?: string
        }
        Update: {
          admin_id?: string
          created_at?: string
          id?: string
          prizes?: Json
          score_title?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "prizepools_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prizepools_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prizepools_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          banner_art: string | null
          id: string
          name: string
          picture: string | null
          social: Json | null
          username: string | null
        }
        Insert: {
          banner_art?: string | null
          id?: string
          name: string
          picture?: string | null
          social?: Json | null
          username?: string | null
        }
        Update: {
          banner_art?: string | null
          id?: string
          name?: string
          picture?: string | null
          social?: Json | null
          username?: string | null
        }
        Relationships: []
      }
      reward_links: {
        Row: {
          admin_id: string
          created_at: string
          duration: number
          id: string
          is_active: boolean
          link_type: Database["public"]["Enums"]["LINK_TYPE"]
          primary_link: string
          reward: number
          secondary_link: string | null
        }
        Insert: {
          admin_id: string
          created_at?: string
          duration?: number
          id?: string
          is_active?: boolean
          link_type?: Database["public"]["Enums"]["LINK_TYPE"]
          primary_link: string
          reward: number
          secondary_link?: string | null
        }
        Update: {
          admin_id?: string
          created_at?: string
          duration?: number
          id?: string
          is_active?: boolean
          link_type?: Database["public"]["Enums"]["LINK_TYPE"]
          primary_link?: string
          reward?: number
          secondary_link?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reward_links_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reward_links_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reward_links_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          id: string
          role_name: string
        }
        Insert: {
          created_at?: string
          id?: string
          role_name: string
        }
        Update: {
          created_at?: string
          id?: string
          role_name?: string
        }
        Relationships: []
      }
      services_menu: {
        Row: {
          admin_id: string
          created_at: string
          icon: string
          id: string
          is_active: boolean
          route: string
          sort: number
          title: string
          updated_at: string
        }
        Insert: {
          admin_id?: string
          created_at?: string
          icon: string
          id?: string
          is_active?: boolean
          route: string
          sort: number
          title: string
          updated_at?: string
        }
        Update: {
          admin_id?: string
          created_at?: string
          icon?: string
          id?: string
          is_active?: boolean
          route?: string
          sort?: number
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_menu_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_menu_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_menu_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      supported_wallet: {
        Row: {
          created_at: string
          icon: string
          id: string
          name: string
          sort: number
          visible: boolean
        }
        Insert: {
          created_at?: string
          icon: string
          id?: string
          name: string
          sort: number
          visible?: boolean
        }
        Update: {
          created_at?: string
          icon?: string
          id?: string
          name?: string
          sort?: number
          visible?: boolean
        }
        Relationships: []
      }
      teams: {
        Row: {
          created_at: string
          id: string
          local_match_id: string
          position: number | null
          seat: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          local_match_id: string
          position?: number | null
          seat?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          local_match_id?: string
          position?: number | null
          seat?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "admin_daily_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "daily_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "local_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "match_participants"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          admin_id: string | null
          amount: number
          auditor_id: string | null
          created_at: string
          direction: Database["public"]["Enums"]["PAYMENT_DIRECTION"]
          fee: number | null
          id: string
          method_id: string | null
          remark: string | null
          status: Database["public"]["Enums"]["PAYMENT_STATUS"]
          target_row_id: string | null
          target_table: string | null
          type: Database["public"]["Enums"]["PAYMENT_TYPE"]
          updated_at: string
          user_id: string
          wallet_address: string | null
        }
        Insert: {
          admin_id?: string | null
          amount: number
          auditor_id?: string | null
          created_at?: string
          direction: Database["public"]["Enums"]["PAYMENT_DIRECTION"]
          fee?: number | null
          id?: string
          method_id?: string | null
          remark?: string | null
          status?: Database["public"]["Enums"]["PAYMENT_STATUS"]
          target_row_id?: string | null
          target_table?: string | null
          type: Database["public"]["Enums"]["PAYMENT_TYPE"]
          updated_at?: string
          user_id?: string
          wallet_address?: string | null
        }
        Update: {
          admin_id?: string | null
          amount?: number
          auditor_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["PAYMENT_DIRECTION"]
          fee?: number | null
          id?: string
          method_id?: string | null
          remark?: string | null
          status?: Database["public"]["Enums"]["PAYMENT_STATUS"]
          target_row_id?: string | null
          target_table?: string | null
          type?: Database["public"]["Enums"]["PAYMENT_TYPE"]
          updated_at?: string
          user_id?: string
          wallet_address?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_auditor_id_fkey"
            columns: ["auditor_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_auditor_id_fkey"
            columns: ["auditor_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_auditor_id_fkey"
            columns: ["auditor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_method_id_fkey"
            columns: ["method_id"]
            isOneToOne: false
            referencedRelation: "supported_wallet"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "send_money_preview"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          balance: number
          blocked: boolean
          created_at: string
          daily_limit: number
          device_id: string | null
          email: string
          extended_daily_limit: number
          fcm_token: string | null
          id: string
          limit_expire: string
          name: string
          note: string | null
          referred_by: string | null
          updated_at: string
        }
        Insert: {
          balance?: number
          blocked?: boolean
          created_at?: string
          daily_limit?: number
          device_id?: string | null
          email: string
          extended_daily_limit?: number
          fcm_token?: string | null
          id?: string
          limit_expire?: string
          name: string
          note?: string | null
          referred_by?: string | null
          updated_at?: string
        }
        Update: {
          balance?: number
          blocked?: boolean
          created_at?: string
          daily_limit?: number
          device_id?: string | null
          email?: string
          extended_daily_limit?: number
          fcm_token?: string | null
          id?: string
          limit_expire?: string
          name?: string
          note?: string | null
          referred_by?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_referred_by_fkey1"
            columns: ["referred_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_referred_by_fkey1"
            columns: ["referred_by"]
            isOneToOne: false
            referencedRelation: "send_money_preview"
            referencedColumns: ["id"]
          },
        ]
      }
      users_roles: {
        Row: {
          created_at: string
          id: string
          role_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role_id: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          role_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_roles_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_roles_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_roles_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      v_match: {
        Row: {
          admin_id: string | null
          created_at: string | null
          current_players: number | null
          current_teams: number | null
          entry_fee: number | null
          game_id: string | null
          host_device: string | null
          id: string | null
          info_id: string | null
          match_size: number | null
          max_teams: number | null
          prize_id: string | null
          start: string | null
          status: string | null
          team_size: number | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          admin_id?: string | null
          created_at?: string | null
          current_players?: number | null
          current_teams?: number | null
          entry_fee?: number | null
          game_id?: string | null
          host_device?: string | null
          id?: string | null
          info_id?: string | null
          match_size?: number | null
          max_teams?: number | null
          prize_id?: string | null
          start?: string | null
          status?: string | null
          team_size?: number | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_id?: string | null
          created_at?: string | null
          current_players?: number | null
          current_teams?: number | null
          entry_fee?: number | null
          game_id?: string | null
          host_device?: string | null
          id?: string | null
          info_id?: string | null
          match_size?: number | null
          max_teams?: number | null
          prize_id?: string | null
          start?: string | null
          status?: string | null
          team_size?: number | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      admin_carousels_services_menu: {
        Row: {
          carousels: Json | null
          services_menu: Json | null
        }
        Relationships: []
      }
      admin_daily_match: {
        Row: {
          admin_id: string | null
          admin_name: string | null
          created_at: string | null
          entry_fee: number | null
          game_id: string | null
          id: string | null
          info_id: string | null
          match_size: number | null
          participants: number | null
          prize_id: string | null
          start: string | null
          status: string | null
          team_size: number | null
          title: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "local_match_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "admin_games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_info_id_fkey"
            columns: ["info_id"]
            isOneToOne: false
            referencedRelation: "match_infos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_prize_id_fkey"
            columns: ["prize_id"]
            isOneToOne: false
            referencedRelation: "prizepools"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_games: {
        Row: {
          admin_id: string | null
          admin_name: string | null
          admin_picture: string | null
          created_at: string | null
          icon: string | null
          id: string | null
          mode: string | null
          sort: number | null
          thumbnail: string | null
          title: string | null
          updated_at: string | null
          visible: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "games_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "full_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "games_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "user_with_role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "games_admin_id_fkey1"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      app_data: {
        Row: {
          carousels: Json | null
          games: Json | null
          services_menu: Json | null
          supported_wallet: Json | null
        }
        Relationships: []
      }
      daily_match: {
        Row: {
          booked: number | null
          entry_fee: number | null
          game_id: string | null
          id: string | null
          infos: Json | null
          joined: boolean | null
          match_size: number | null
          prizes: Json | null
          score_title: string | null
          start: string | null
          status: string | null
          team_size: number | null
          title: string | null
        }
        Relationships: [
          {
            foreignKeyName: "local_match_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "admin_games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      full_users: {
        Row: {
          balance: number | null
          blocked: boolean | null
          created_at: string | null
          daily_limit: number | null
          device_id: string | null
          email: string | null
          extended_daily_limit: number | null
          fcm_token: string | null
          id: string | null
          limit_expire: string | null
          name: string | null
          note: string | null
          picture: string | null
          referred_by: string | null
          referrer_name: string | null
          role: string | null
          updated_at: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_referred_by_fkey1"
            columns: ["referred_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_referred_by_fkey1"
            columns: ["referred_by"]
            isOneToOne: false
            referencedRelation: "send_money_preview"
            referencedColumns: ["id"]
          },
        ]
      }
      match_participants: {
        Row: {
          booked: number | null
          entry_fee: number | null
          game_id: string | null
          id: string | null
          infos: Json | null
          joined: boolean | null
          match_size: number | null
          prizes: Json | null
          score_title: string | null
          start: string | null
          status: string | null
          team_size: number | null
          teams: Json | null
          title: string | null
        }
        Relationships: [
          {
            foreignKeyName: "local_match_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "admin_games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "local_match_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      match_teams_and_players: {
        Row: {
          local_match_id: string | null
          players: Json | null
          position: number | null
          seat: number | null
        }
        Insert: {
          local_match_id?: string | null
          players?: never
          position?: number | null
          seat?: number | null
        }
        Update: {
          local_match_id?: string | null
          players?: never
          position?: number | null
          seat?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "admin_daily_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "daily_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "local_match"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_local_match_id_fkey"
            columns: ["local_match_id"]
            isOneToOne: false
            referencedRelation: "match_participants"
            referencedColumns: ["id"]
          },
        ]
      }
      my_transactions: {
        Row: {
          amount: number | null
          created_at: string | null
          direction: Database["public"]["Enums"]["PAYMENT_DIRECTION"] | null
          fee: number | null
          method_icon: string | null
          method_name: string | null
          remark: string | null
          status: Database["public"]["Enums"]["PAYMENT_STATUS"] | null
          type: Database["public"]["Enums"]["PAYMENT_TYPE"] | null
          updated_at: string | null
          wallet_address: string | null
        }
        Relationships: []
      }
      reports: {
        Row: {
          blocked_users: number | null
          recent_transactions: Json | null
          total_balance: number | null
          total_users: number | null
          weekly_report: Json | null
          yearly_report: Json | null
        }
        Relationships: []
      }
      send_money_preview: {
        Row: {
          banner_art: string | null
          charge: number | null
          id: string | null
          max_charge: number | null
          min_charge: number | null
          name: string | null
          picture: string | null
          social: Json | null
          username: string | null
        }
        Insert: {
          banner_art?: string | null
          charge?: never
          id?: string | null
          max_charge?: never
          min_charge?: never
          name?: string | null
          picture?: string | null
          social?: Json | null
          username?: string | null
        }
        Update: {
          banner_art?: string | null
          charge?: never
          id?: string | null
          max_charge?: never
          min_charge?: never
          name?: string | null
          picture?: string | null
          social?: Json | null
          username?: string | null
        }
        Relationships: []
      }
      user_with_role: {
        Row: {
          balance: number | null
          blocked: boolean | null
          created_at: string | null
          daily_limit: number | null
          device_id: string | null
          email: string | null
          extended_daily_limit: number | null
          fcm_token: string | null
          id: string | null
          limit_expire: string | null
          name: string | null
          picture: string | null
          referred_by: string | null
          role: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_referred_by_fkey1"
            columns: ["referred_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_referred_by_fkey1"
            columns: ["referred_by"]
            isOneToOne: false
            referencedRelation: "send_money_preview"
            referencedColumns: ["id"]
          },
        ]
      }
      who_am_i: {
        Row: {
          balance: number | null
          banner_art: string | null
          blocked: boolean | null
          daily_limit: number | null
          email: string | null
          extended_daily_limit: number | null
          limit_expire: string | null
          name: string | null
          picture: string | null
          referrer: Json | null
          social: Json | null
          username: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      claim_web_reward: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_match_info_and_prizes: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_reward_links: {
        Args: Record<PropertyKey, never>
        Returns: {
          reward_links: Json
          current_page: number
          visited_at: string
          refreshed_at: string
        }[]
      }
      get_today_web_reward: {
        Args: Record<PropertyKey, never>
        Returns: {
          today: number
        }[]
      }
      get_who_am_i: {
        Args:
          | Record<PropertyKey, never>
          | { p_device_id: string; p_fcm_token: string }
        Returns: {
          referrer: Json
          name: string
          email: string
          balance: number
          daily_limit: number
          extended_daily_limit: number
          blocked: boolean
          limit_expire: string
          username: string
          picture: string
          banner_art: string
          social: Json
        }[]
      }
      join_match: {
        Args: { p_match_id: string; p_players: string[] }
        Returns: undefined
      }
      link_click: {
        Args: { the_link: string }
        Returns: Json
      }
      my_referrer: {
        Args: { p_username: string }
        Returns: undefined
      }
      payout: {
        Args: { p_method: string; p_wallet: string; p_amount: number }
        Returns: undefined
      }
      referrer_reward: {
        Args: { referrer_id: string; u_id: string }
        Returns: undefined
      }
      reset_extended_daily_limit_if_expired: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      send_money: {
        Args: { p_sender_id: string; p_amount: number }
        Returns: undefined
      }
      send_money_preview_func: {
        Args: { p_email: string; p_amount: number }
        Returns: {
          r_id: string
          r_name: string
          r_username: string
          r_picture: string
          r_total_charge: number
        }[]
      }
      suspend_account: {
        Args: { reason: string }
        Returns: undefined
      }
      update_match_result: {
        Args: { p_result: Json }
        Returns: Json
      }
      update_reward_links: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_social: {
        Args: { uid: string; new_data: Json }
        Returns: undefined
      }
    }
    Enums: {
      LINK_TYPE:
        | "default"
        | "youtube_video"
        | "youtube_short"
        | "website"
        | "tiktok_video"
      LUDO_STATUS: "searching" | "playing" | "played"
      MATCH_STATUS:
        | "pending"
        | "opened"
        | "closed"
        | "playing"
        | "calculating"
        | "played"
        | "delayed"
        | "aborted"
      PAYMENT_DIRECTION: "in" | "out"
      PAYMENT_STATUS: "pending" | "done" | "failed"
      PAYMENT_TYPE:
        | "cash-in"
        | "cash-out"
        | "send-money"
        | "receive-money"
        | "purchase-shop"
        | "purchase-match"
        | "adjust"
        | "web-reward"
        | "match-reward"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      LINK_TYPE: [
        "default",
        "youtube_video",
        "youtube_short",
        "website",
        "tiktok_video",
      ],
      LUDO_STATUS: ["searching", "playing", "played"],
      MATCH_STATUS: [
        "pending",
        "opened",
        "closed",
        "playing",
        "calculating",
        "played",
        "delayed",
        "aborted",
      ],
      PAYMENT_DIRECTION: ["in", "out"],
      PAYMENT_STATUS: ["pending", "done", "failed"],
      PAYMENT_TYPE: [
        "cash-in",
        "cash-out",
        "send-money",
        "receive-money",
        "purchase-shop",
        "purchase-match",
        "adjust",
        "web-reward",
        "match-reward",
      ],
    },
  },
} as const
