import {useTelegramBackButton} from "../utils/useTelegramBackButton.ts";
import useTopupItemList from "../components/ui/topup/useTopupItemList.ts";
import ScrollableComponent from "../components/ui/ScrollableComponent.tsx";

const TopupPage = () => {
  useTelegramBackButton(true)
  const {topupItems, onTopUp} = useTopupItemList()


  return (
    <ScrollableComponent
      title="Top-up Store"
    >
      <div
        className="grid grid-cols-2 gap-4 mx-4 text-xs"
      >
        {topupItems.map(item => (
          <div
            onClick={() => {onTopUp(item.id!)}}
            className="rounded-md overflow-hidden bg-gray-300 cursor-pointer"
            key={item.id}
          >
            <div className="bg-black aspect-video w-full flex flex-col items-center justify-center">
              <img src="/assets/images/playpal_trophy.webp" className="size-20" alt={item.title + " trophy"} />
              <strong className="text-2xl font-chakra-patch">{item.title}</strong>
            </div>
            <div className="text-gray-900 h-9 flex flex-col items-center justify-center">
              <span className={item.discount_price != null ? "line-through" : ""}>{item.price} TK</span>
              {(item.discount_price && <span>{item.discount_price} TK</span>)}
            </div>
          </div>
        ))}
      </div>
    </ScrollableComponent>
  )
}
export default TopupPage