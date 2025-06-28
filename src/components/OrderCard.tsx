import { Link } from 'react-router';

import {Eye} from "../assets/eye.tsx";
import {Transit} from "../assets/transit.tsx";
import {Assigned} from "../assets/assigned.tsx";
import PickupInfo from "./PickupInfo.tsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const OrderCard = ({order}) => {
    const [pickup, dropoff] = Array.isArray(order.destinations) ? order.destinations : [];

    const isInTransit = () => {
        if (order?.status_string === 'Orden Asignada') return false;
        if (order?.status_string === 'Recolección completada') return true;
    };


    return (
        <div className="!mx-[40px] !mb-[39px] w-[349px] h-[336px] flex flex-col">

            <section className='flex items-center gap-2 !mb-4'>
                <h3 className='text-[17px] text-[#969798] font-medium'>Order</h3>
                <span className='text-[17.3px] font-semibold'>#{order.order_number}</span>
            </section>

            <div className="relative bg-[#3534344e] rounded-[20px] h-full">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-t-[20px] "></div>
                {!isInTransit() && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-b-[20px] pointer-events-none"></div>
                )}
                <div className="mb-4 h-full flex flex-col justify-between rounded-[20px] p-[2.5px] relative z-10">
                    <div className="flex flex-col justify-between h-full w-full rounded-[17.5px] bg-[#3534344e]">
                        <div className='flex items-center justify-between border-b-[0.6px] border-[#606364] !mb-5'>
                            <div className='flex items-center gap-2 !p-3.5'>
                                {isInTransit() ? <Transit/> : <Assigned/>}
                                <h1 className='text-[15.5px]'>{order.type}</h1>
                            </div>
                            <div className='!mr-7'>
                                {isInTransit() ? (
                                    <h1 className='text-[10px] flex items-center gap-2'> <p className='w-2.5 h-2.5 rounded-full bg-[#0C7DED]'></p> In Transit</h1>
                                ) : (
                                    <h1 className='text-[10px] flex items-center gap-2'>Assigned</h1>
                                )}
                            </div>
                        </div>

                        <div className='!px-5 flex flex-col gap-6'>
                            <PickupInfo destination={pickup} type="pickup" />
                            <PickupInfo destination={dropoff} type="dropoff" />
                        </div>
                        <div className={`flex space-x-2 text-[13.3px] !mt-6 font-semibold ${isInTransit() ? ' justify-between' : 'justify-end'}`}>
                            {isInTransit() && (
                                <button className="!p-3 w-[199px] rounded-r-full rounded-bl-full !pl-5 bg-[#ffee00] text-[#080b11] backdrop-blur-[70px] shadow-[inset_-4px_-4px_4px_0px_rgba(194,181,0,1)]">
                                    It’s time for pickup
                                </button>
                            )}
                            <Link to={`/${order.order_number}`} className="!p-3 w-[130px] flex items-center justify-around rounded-l-full rounded-br-full bg-[#ffee00] text-[#080b11] backdrop-blur-[70px] shadow-[inset_-4px_-4px_4px_0px_rgba(194,181,0,1)]">
                                <p>Resume</p>
                                <Eye/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderCard;