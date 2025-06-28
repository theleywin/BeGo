import OrderHeader from "./OrderHeader";
import OrderStatusBar from "./OrderStatusBar";
import OrderTypeStatus from "./OrderTypeStatus";
import OrderDetails from "./OrderDetails";
import OrderActions from "./OrderActions";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const OrderCard = ({order}) => {
    const [pickup, dropoff] = Array.isArray(order.destinations) ? order.destinations : [];

    const isInTransit = () => order?.status_string === 'Recolección completada';

    const inTransit = isInTransit();

    return (
        <div className="!mx-[40px] !mb-[39px] w-[349px] h-[336px] flex flex-col">
            <OrderHeader orderNumber={order.order_number} />
            <div className="relative bg-[#3534344e] rounded-[20px] h-full">
                <OrderStatusBar inTransit={inTransit} />
                <div className="mb-4 h-full flex flex-col justify-between rounded-[20px] p-[2.5px] relative z-10">
                    <div className="flex flex-col justify-between h-full w-full rounded-[17.5px] bg-[#3534344e]">
                        <OrderTypeStatus inTransit={inTransit} type={order.type} />
                        <OrderDetails pickup={pickup} dropoff={dropoff} />
                        <OrderActions inTransit={inTransit} orderNumber={order.order_number} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderCard;