import Truck from "../../../assets/YellowTruck.tsx";
import OffSwitch from "../../../assets/OffSwitch.tsx";
import {useContext} from "react";
import type {CargoDetailsProps} from "../../../types/CargoDetailsProps.ts";
import {DetailsContext} from "../../../context/detailsContext.tsx";
import {getCityFromAddress} from "../../../utils/formatters.ts";
import LocationStatusCard from "./LocationStatusCard.tsx";
import VerticalGradientLine from "./VerticalGradientLine";
import HorizontalGradientLine from "../HorizontalGradientLine.tsx";

const PickupDropoffCard = ({order}: CargoDetailsProps) => {

    const { setSwitchTab ,switchTab} = useContext(DetailsContext)

    return (
        <div
            className="flex flex-col w-full items-start justify-center backdrop-blur-[1px] gap-4 py-5 px-12
                       bg-white/5 border-0.5 border-gray-800 border-r-0 rounded-l-[16px] h-full">
            <HorizontalGradientLine position="top" />
            <HorizontalGradientLine position="bottom" />

            <div className={"flex flex-col items-start justify-start"}>
                <p className={"font-[400] text-[13px] text-[#EDEDED]"}>Referencia {order?.reference_number}</p>
                <p className={"font-[400] text-[17px] text-[#EDEDED]"}>Order #{order?.order_number}</p>
            </div>

            <div className={"flex flex-row gap-4"}>
                <div className={"relative flex flex-col items-center justify-between"}>
                    <div
                        className={`absolute items-center justify-center border-1 rounded-full
                                    w-[42px] h-[42px] p-1 transition-all duration-200 border-[#FFFF00] ${switchTab ? 
                                    "top-0" : "top-full -translate-y-full"}`}
                    >
                        <div className={"flex items-center justify-center rounded-full w-[32px] h-[32px] bg-[#FFEE00]"}>
                            <Truck/>
                        </div>
                    </div>

                    <button
                        className={"flex items-center justify-center w-[38px] h-[38px] "}
                        onClick={() => setSwitchTab(!switchTab)}
                    >
                        <OffSwitch/>
                    </button>

                    <VerticalGradientLine switchTab={switchTab} />

                    <button
                        className={"flex items-center justify-center w-[38px] h-[38px]"}
                        onClick={() => setSwitchTab(!switchTab)}
                    >
                        <OffSwitch/>
                    </button>
                </div>

                <div className={"flex flex-col items-start gap-4 justify-start"}>
                    <LocationStatusCard
                        label="PICKUP"
                        city={getCityFromAddress(order?.destinations[0].address || "")}
                        address={order?.destinations[0].address || ""}
                        statusString={order?.destinations[0].status_string || ""}
                    />
                    <LocationStatusCard
                        label="DROPOFF"
                        city={getCityFromAddress(order?.destinations[1].address || "")}
                        address={order?.destinations[1].address || ""}
                        statusString={order?.destinations[1].status_string || ""}
                    />
                </div>
            </div>
        </div>
    )
}

export default PickupDropoffCard
