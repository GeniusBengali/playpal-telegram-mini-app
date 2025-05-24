import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import type {ReactNode} from "react";


const AppBottomSheet = ({
  isOpen,
  onOpenChange,
  children
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children: ReactNode;
}) => {
  return (
    <SwipeableDrawer
      sx={{'& .MuiDrawer-paper': { borderTopLeftRadius: 8, borderTopRightRadius: 8, overflow: 'hidden'} }}
      anchor="bottom"
      open={isOpen}
      onClose={() => onOpenChange(false)}
      onOpen={() => onOpenChange(true)}
    >
      <div className="w-full rounded-t-[8px] py-3 flex items-center justify-center">
        <div className="w-9 h-2 bg-gray-600 rounded-full"/>
      </div>
      <div className="max-h-[90dvh] overflow-y-auto overflow-x-hidden no-scrollbar">
        {children}
      </div>
    </SwipeableDrawer>
  )
}
export default AppBottomSheet