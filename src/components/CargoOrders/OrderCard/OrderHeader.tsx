interface OrderHeaderProps {
  orderNumber: string | number;
}

const OrderHeader = ({ orderNumber }: OrderHeaderProps) => (
  <section className=' ml-3 flex items-center gap-2 !mb-4'>
    <h3 className='text-[17px] text-[#969798] font-medium'>Order</h3>
    <span className='text-[17.3px] font-semibold'>#{orderNumber}</span>
  </section>
);

export default OrderHeader;

