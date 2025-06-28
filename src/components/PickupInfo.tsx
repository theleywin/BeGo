import {Truck} from '../assets/truck.tsx';
import { getCityFromAddress, formatDate, formatTime } from '../utils/formatters.ts';
import {Ubi} from "../assets/ubi.tsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const PickupInfo = ({destination, type}) => {
    return (
        <div className='flex items-center gap-3 justify-around'>
            <div>{type === 'pickup' ? <Truck /> : <Ubi/>}</div>
            <div className='gap-1 flex flex-col'>
                <h1 className='text-[8px] text-[#535455]'>{type === 'pickup' ? 'PICKUP' : 'DROPOFF'}</h1>
                <h1 className='text-[15px]'>{getCityFromAddress(destination.address)}</h1>
                <p className='text-xs text-[#909192] truncate w-[189px]'>{destination.address}</p>
            </div>
            <div className='text-end'>
                <h1 className='text-[10px] text-[#696A6B]'>{formatDate(destination.start_date)}</h1>
                <h1 className='text-[12px] font-medium !mt-1'>{formatTime(destination.start_date)}</h1>
            </div>
        </div>
    );
};

export default PickupInfo;