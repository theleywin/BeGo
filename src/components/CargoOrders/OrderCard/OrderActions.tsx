import { Link } from 'react-router';
import { Eye } from "../../../assets/Eye.tsx";
import { formatTimeDiff } from "../../../utils/formatters.ts";
interface OrderActionsProps {
    inTransit: boolean;
    start_date: number;
}


const OrderActions = ({ inTransit, start_date }: OrderActionsProps) => {
    const now = Date.now();
    const timeDiff = start_date - now;
    const isPickupTime = timeDiff <= 0;

    return (
        <div className={`flex space-x-2 text-[13.3px] !mt-6 font-semibold ${inTransit ? ' justify-between' : 'justify-end'}`}>
            {inTransit && (
                isPickupTime ? (
                    <button
                        className="!p-3 w-[199px] rounded-r-full rounded-bl-full !pl-5 bg-bego text-[#080b11] backdrop-blur-[70px] shadow-[inset_-4px_-4px_4px_0px_rgba(194,181,0,1)]"
                        onClick={() => console.log('Navigate')}
                    >
                        It’s time for pickup
                    </button>
                ) : (
                    <button
                        className="!p-3 w-[199px] rounded-r-full rounded-bl-full !pl-5 bg-gradient-to-r from-[#3534340e] to-[#3534338e] text-white backdrop-blur-[70px] relative"
                    >
                        <div className="absolute top-0 left-0 right-3 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-t-[20px]"></div>
                        <div className="absolute bottom-0 left-0 right-3 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-b-[20px]"></div>
                        <span>
              <span className="text-white">Start pickup in </span>
              <span className="text-bego">{formatTimeDiff(timeDiff)}</span>
            </span>
                    </button>
                )
            )}
            <Link to={`/details`} className="!p-3 w-[130px] flex items-center justify-around rounded-l-full rounded-br-full bg-bego text-[#080b11] backdrop-blur-[70px] shadow-[inset_-4px_-4px_4px_0px_rgba(194,181,0,1)]">
                <p>Resume</p>
                <Eye />
            </Link>
        </div>
    );
};

export default OrderActions;
