import PickupDropoffCard from "../components/CargoDetails/PickupDropoff/PickupDropoffCard.tsx";
import TrackOrderCard from "../components/CargoDetails/TrackOrderCard/TrackOrderCard.tsx";
import DropDownMenu from "../components/CargoDetails/DropDownMenu/DropDownMenu.tsx";
import useFetchOrders from "../hooks/useFetchOrders.ts";
import {DetailsProvider} from "../context/detailsProvider.tsx";

const CargoDetails = () => {
    const { orders } = useFetchOrders()
    return (
        <DetailsProvider>
            <div className={"flex flex-col py-12 gap-2 overflow-hidden"}>
                <div className={"flex flex-col w-full md:flex-row-reverse gap-20 md:gap-4"}>
                    <div className={"flex pl-[40px] items-center justify-end"}>
                        <PickupDropoffCard order={orders}/>
                    </div>
                    <div className={"flex px-[40px] w-full items-center justify-center"}>
                        <TrackOrderCard order={orders}/>
                    </div>
                </div>
                <div className={"flex flex-col gap-12 p-[40px] items-center justify-center"}>
                    <DropDownMenu order={orders}/>
                </div>
            </div>
        </DetailsProvider>
    )
}
export default CargoDetails