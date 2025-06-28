import Nav from "../components/Nav.tsx";
import  useFetchUpcoming  from "../hooks/useFetchUpcoming.ts";
import SearchBar from "../components/SearchBar.tsx";
import OrderCard    from "../components/OrderCard.tsx";
import  { useState } from "react";
const CargoOrders = () => {

    const { ordersUpcoming } = useFetchUpcoming();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredOrders = searchTerm
        ? ordersUpcoming.filter(order =>
            order.order_number.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
        : ordersUpcoming;
    return (
        <main className="flex flex-col">
            <Nav/>
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <section className="flex flex-wrap items-center flex-col gap-2 justify-center md:flex-row">
                {filteredOrders.map((order) => {
                    return (
                        <OrderCard key={order._id} order={order} />
                    )
                })}
            </section>
        </main>
    )
}
export default CargoOrders
