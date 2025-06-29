import type { Order } from '../../../types/order.ts';

import OrderHeader from "./OrderHeader.tsx";
import OrderStatusBar from "./OrderStatusBar.tsx";
import OrderTypeStatus from "./OrderTypeStatus.tsx";
import OrderDetails from "./OrderDetails.tsx";
import OrderActions from "./OrderActions.tsx";


interface OrderCardProps {
    order: Order;
}

const OrderCard = ({order}: OrderCardProps) => {
    const [pickup, dropoff] = Array.isArray(order.destinations) ? order.destinations : [];

    const isInTransit = () => order?.status_string === 'Recolección completada';

    const inTransit = isInTransit();

    return (
        <div className="!mx-[40px] !mb-[39px] w-[347px] h-[336px] flex flex-col">
            <OrderHeader orderNumber={order.order_number} />
            <div className="relative bg-black rounded-[20px]">
                <OrderStatusBar inTransit={inTransit} />
                <div className="mb-4 h-full flex flex-col justify-between rounded-[20px] p-[2.5px] relative z-10">
                    <div className="flex flex-col justify-between h-full w-full rounded-[17.5px] bg-[#3534344e]">
                        <OrderTypeStatus inTransit={inTransit} type={order.type} />
                        <OrderDetails pickup={pickup} dropoff={dropoff} />
                        <OrderActions inTransit={inTransit} start_date={order.start_date} />
                        {/* <OrderActions inTransit={inTransit}  start_date={Date.now() + 36000000} />*/}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderCard;