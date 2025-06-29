import Nav from "../components/CargoOrders/Nav.tsx";
import useFetchUpcoming from "../hooks/useFetchUpcoming.ts";
import SearchBar from "../components/CargoOrders/SearchBar.tsx";
import OrderCard from "../components/CargoOrders/OrderCard/OrderCard.tsx";
import { useState } from "react";

const CargoOrders = () => {
    const { ordersUpcoming } = useFetchUpcoming();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTab, setSelectedTab] = useState(0); // 0: Upcoming, 1: Completed, 2: Past

    let filteredOrders = ordersUpcoming;
    if (selectedTab === 1) {
        filteredOrders = ordersUpcoming.filter(order => order?.status_string === 'Recolección completada');
    } else if (selectedTab === 2) {
        filteredOrders =ordersUpcoming.filter(order => order?.status_string === 'Orden Asignada');
    }

    if (searchTerm) {
        filteredOrders = filteredOrders.filter(order =>
            order.order_number.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return (
        <main className="flex flex-col">
            <Nav selected={selectedTab} setSelected={setSelectedTab} />
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mx-auto w-full max-w-7xl">
                {filteredOrders.map((order) => (
                    <OrderCard key={order._id} order={order} />
                ))}
            </section>
        </main>
    );
};

export default CargoOrders;