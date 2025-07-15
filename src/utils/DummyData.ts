import type {AppUser} from "../data-types.ts";

export const DummyData: {
  user: AppUser
} = {
  user: {
    id: "my_dummy_id",
    name: "<NAME>",
    email: "<EMAIL>",
    username: "<USERNAME>",
    balance: 123.45,
    topup_balance: 0,
    banner_art: "",
    blocked: false,
    note: "",
    picture: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    social: {},
    referrer: {
      id: "my_dummy_referrer_id",
      banner_art:"",
      name: "<NAME>",
      username: "<USERNAME>",
      picture: "",
      social: {}
    }
  }
}