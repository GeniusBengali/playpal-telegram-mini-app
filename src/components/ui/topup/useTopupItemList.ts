import {useEffect, useState} from "react";
import type {Tables} from "../../../lib/supabase/types.ts";
import {supabase} from "../../../lib/supabase/client.ts";
import {useAuth} from "../../../context/auth-provider.tsx";
import {useApp} from "../../../context/app-provider.tsx";
import {openLink} from "@telegram-apps/sdk-react";
import {toast} from "sonner";

const useTopupItemList = () => {
  const {user} = useAuth();
  const {setLoadings} = useApp()

  const [topupItems, setTopupItems] = useState<Tables<"topup_items">[]>([])

  useEffect(() => {
    setLoadings(true)
    supabase
      .from("topup_items")
      .select()
      .then(({data, error}) => {
        setLoadings(false)
        if(error){
          toast.error(error.message)
          return
        }
        setTopupItems(data)
      })
  }, []);

  const onTopUp = (id: string) => {
    setLoadings(true)
    supabase.functions
      .invoke("nagorik-pay-payment-create", {
        body: {
          "email":user?.email,
          "name": user?.name,
          "uid": user?.id,
          "paymentype": "topup",
          "productid": id
        }
      })
      .then(({data, error})=> {
        setLoadings(false)
        if(error){
          toast.error(error.message)
          return
        }
        if(data.status){
          if(openLink.isAvailable()){
            openLink(data.data)
          } else {
            toast.error("Unable to open link, please try install chrome")
          }
        } else {
          toast.error(data.error)
        }
      })
  }

  return {
    topupItems,
    onTopUp
  }
}

export default useTopupItemList