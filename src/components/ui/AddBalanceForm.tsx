import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import type {DepositForm} from "../../data-types.ts";
import {GiTwoCoins} from "react-icons/gi";
import {Constants} from "../../utils/Constants.ts";
import {useAuth} from "../../context/auth-provider.tsx";
import {toast} from "sonner";
import {openLink} from "@telegram-apps/sdk-react";

const AddBalanceForm = () => {
  const {session} = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<DepositForm>({
    amount: "",
  })

  const onProceed = async () => {
    if(form.amount.trim() === ""){
      setIsOpen(false)
      return;
    }
    setLoading(true)

    const response = await fetch(Constants.DEPOSIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: form.amount,
        reference: session?.user.id
      }),
    })
    const data = await response.json()
    setLoading(false)
    setIsOpen(false)

    if(data.status){
      if(openLink.isAvailable()){
        openLink(data.bkashURL)
      } else {
        toast.error("Unable to open link, please try install chrome")
      }
    } else {
      toast.error(data.message)
    }
  }

  useEffect(() => {
    setForm({
      amount: "",
    })
  }, [isOpen]);

  return (
    <>
      <input
        type="checkbox"
        id="add_balance_form"
        className="modal-toggle"
        checked={isOpen}
        onChange={(e) => {
          setIsOpen(e.target.checked)
        }}
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <label htmlFor="add_balance_form" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
          <h3 className="font-bold font-roboto mb-2">Deposit</h3>
          <div className="flex flex-col">
            <div>
              <label className="input validator">
                <GiTwoCoins />
                <input
                  type="number"
                  className="tabular-nums"
                  required
                  placeholder="Amount"
                  pattern="[0-9]*"
                  min={10}
                  max={10000}
                  title="Must be between 10 and 10000"
                  autoComplete="off"
                  value={form.amount}
                  onChange={(e) => setForm({...form, amount: e.target.value})}
                />
              </label>
              <p className="validator-hint">Must be between 10 and 10000</p>
            </div>
          </div>
          <div className="modal-action">
            <Button
              onClick={onProceed}
              variant="outlined"
              loading={loading}
            >{form.amount.length == 0 ? "Close" : "Proceed"}</Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddBalanceForm