interface OrderStatusBarProps {
  inTransit: boolean;
}

const OrderStatusBar = ({ inTransit }: OrderStatusBarProps) => (
  <>
    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-t-[20px] "></div>
    {!inTransit && (
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-b-[20px] pointer-events-none"></div>
    )}
  </>
);

export default OrderStatusBar;

