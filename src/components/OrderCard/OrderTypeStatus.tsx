import { Transit } from "../../assets/transit.tsx";
import { Assigned } from "../../assets/assigned.tsx";

interface OrderTypeStatusProps {
  inTransit: boolean;
  type: string;
}

const OrderTypeStatus = ({ inTransit, type }: OrderTypeStatusProps) => (
  <div className='flex items-center justify-between border-b-[0.6px] border-[#606364] !mb-5'>
    <div className='flex items-center gap-2 !p-3.5'>
      {inTransit ? <Transit /> : <Assigned />}
      <h1 className='text-[15.5px]'>{type}</h1>
    </div>
    <div className='!mr-7'>
      {inTransit ? (
        <h1 className='text-[10px] flex items-center gap-2'>
          <p className='w-2.5 h-2.5 rounded-full bg-[#0C7DED]'></p> In Transit
        </h1>
      ) : (
        <h1 className='text-[10px] flex items-center gap-2'>Assigned</h1>
      )}
    </div>
  </div>
);

export default OrderTypeStatus;

