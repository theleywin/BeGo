import PickupInfo from "../PickupInfo.tsx";
import type {Destination} from "../../types/destination.ts";

interface OrderDetailsProps {
  pickup: Destination;
  dropoff: Destination;
}

const OrderDetails = ({ pickup, dropoff }: OrderDetailsProps) => (
  <div className='!px-5 flex flex-col gap-6'>
    <PickupInfo destination={pickup} type="pickup" />
    <PickupInfo destination={dropoff} type="dropoff" />
  </div>
);

export default OrderDetails;

