import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";

const PayoutPage = () => {
  useTelegramBackButton(true)
  return (
    <div className="flex-1 flex flex-col justify-end m-4">
      Payout Page
    </div>
  )
}
export default PayoutPage