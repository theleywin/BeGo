import { Link } from 'react-router';
import { Eye } from "../../assets/eye.tsx";

interface OrderActionsProps {
  inTransit: boolean;
  orderNumber: string | number;
}

const OrderActions = ({ inTransit, orderNumber }: OrderActionsProps) => (
  <div className={`flex space-x-2 text-[13.3px] !mt-6 font-semibold ${inTransit ? ' justify-between' : 'justify-end'}`}>
    {inTransit && (
      <button className="!p-3 w-[199px] rounded-r-full rounded-bl-full !pl-5 bg-bego text-[#080b11] backdrop-blur-[70px] shadow-[inset_-4px_-4px_4px_0px_rgba(194,181,0,1)]">
        It’s time for pickup
      </button>
    )}
    <Link to={`/${orderNumber}`} className="!p-3 w-[130px] flex items-center justify-around rounded-l-full rounded-br-full bg-bego text-[#080b11] backdrop-blur-[70px] shadow-[inset_-4px_-4px_4px_0px_rgba(194,181,0,1)]">
      <p>Resume</p>
      <Eye />
    </Link>
  </div>
);

export default OrderActions;

