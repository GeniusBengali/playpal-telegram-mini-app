import {Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import type {DepositForm} from "../../data-types.ts";

const AddBalanceForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState<DepositForm>({
    bkash_number: "",
    amount: "",
  })

  const onProceed = () => {
    if(form.bkash_number.trim() === "" || form.amount.trim() === ""){
      setIsOpen(false)
      return;
    }
  }

  useEffect(() => {
    setForm({
      bkash_number: "",
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
          <div className="flex flex-col gap-4">
            <TextField
              sx={{
                '& .MuiFormLabel-root ': {color: 'gray'},
                '& .MuiOutlinedInput-notchedOutline': {borderColor: 'gray'},
                '& .MuiInputBase-input': {color: 'white'}
              }}
              label="bKash Number"
              value={form.bkash_number}
              onChange={(e) => setForm({...form, bkash_number: e.target.value})}
              variant="outlined"
              size="small"
              autoComplete="off"
              fullWidth
            />
            <TextField
              sx={{
                '& .MuiFormLabel-root ': {color: 'gray'},
                '& .MuiOutlinedInput-notchedOutline': {borderColor: 'gray'},
                '& .MuiInputBase-input': {color: 'white'}
              }}
              label="Amount"
              value={form.amount}
              onChange={(e) => setForm({...form, amount: e.target.value})}
              variant="outlined"
              size="small"
              autoComplete="off"
              fullWidth
            />
          </div>
          <div className="modal-action">
            <Button
              onClick={onProceed}
              variant="outlined"
            >{(form.amount.length == 0 || form.bkash_number.length == 0) ? "Close" : "Proceed"}</Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddBalanceForm