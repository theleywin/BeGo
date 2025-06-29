import DropDownMenuHeader from "./DropDownMenuHeader.tsx";
import { useContext, useState } from "react";
import type { CargoDetailsProps } from "../../../types/CargoDetailsProps.ts";
import { DetailsContext } from "../../../context/detailsContext.tsx";
import { formatDateComplete, formatTime } from "../../../utils/formatters.ts";

const DropDownMenu = ({ order }: CargoDetailsProps) => {
    const [open, setOpen] = useState(false);
    const { switchTab } = useContext(DetailsContext);
    const destination = switchTab ? order?.destinations[0] : order?.destinations[1];
    const title = switchTab ? "Pickup Data" : "Drop off Data";

    return (
        <>
            <DropDownMenuHeader open={open} onToggle={() => setOpen(!open)} title={title} />
            <div className="flex flex-col w-full items-start">
                <div className="relative w-full max-w-md overflow-hidden h-[300px]">
                    <div
                        className={`absolute w-full transition-all duration-500 ${
                            open ? 'translate-y-0 opacity-100 ease-linear' : '-translate-y-full opacity-0 ease-linear'
                        }`}
                    >
                        <p className="text-white font-[500] text-[15px] p-4 rounded-lg">
                            {destination?.address || "No address provided"}
                        </p>
                        <div className={"flex flex-row items-center justify-start gap-2"}>
                            <p className="text-white font-[500] text-[15px] p-4 rounded-lg">
                                {formatDateComplete(destination?.startDate || 0)}
                            </p>
                            <p>
                                ·{formatTime(destination?.startDate || 0)}
                            </p>
                        </div>
                        <p className="text-white font-[500] text-[15px] p-4 rounded-lg">
                            {destination?.contact_info?.telephone || "No phone number provided"}
                        </p>
                        <p className="text-white font-[500] text-[15px] p-4 rounded-lg">
                            {destination?.contact_info?.email || "No email provided"}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DropDownMenu;
