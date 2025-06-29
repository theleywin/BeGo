import Check from "../../../assets/Check.tsx";
import UncheckCircle from "../../../assets/UncheckCircle.tsx";
import type {CargoDetailsProps} from "../../../types/CargoDetailsProps.ts";
import {useContext} from "react";
import {DetailsContext} from "../../../context/detailsContext.tsx";
import {formatTimeAMPM} from "../../../utils/formatters.ts";
import HorizontalGradientLine from "../HorizontalGradientLine.tsx";
import TrackOrderAvatar from "./TrackOrderAvatar.tsx";

const TrackOrderCard = ({order}: CargoDetailsProps) => {
    const {switchTab} = useContext(DetailsContext)
    const enableButton = order?.status_list.pickup[2].active

    const StatusStepLine = ({ active }: { active: boolean }) => (
        <div
            style={{ height: 24, width: 2 }}
            className={`ml-[1px] ${active ? "bg-bego" : "bg-[#414243]"} rounded-full`}
        />
    );

    return (
        <div
            className={"flex flex-col items-center justify-center backdrop-blur-[1px] gap-12 pt-16 bg-white/5 border-1 border-gray-800 rounded-[19px] h-[fit] w-full"}>
            <HorizontalGradientLine position="top" />
            <TrackOrderAvatar />

            <p className={"font-[500] text-[19px] text-[#EDEDED]"}>
                {switchTab ? 
                    formatTimeAMPM(order?.destinations[0].startDate || 0)
                    :
                    formatTimeAMPM(order?.destinations[1].startDate || 0)
                }
            </p>
            {switchTab ?
                <div className={"flex flex-col w-full px-12 items-start justify-end gap-0"}>
                    {order?.status_list.pickup.map((status, idx, arr) => {
                        const statusRow = (
                            <div key={idx} className={"flex flex-row gap-6 items-center justify-center"}>
                                <div className={"w-[28px] h-[28px]"}>
                                    {status.active ? <Check/> : <UncheckCircle/>}
                                </div>
                                {status.active ?
                                    <p className={`font-[500] text-[13px] sm:text-[15.4px] text-[#EDEDED]`}>{status.status}</p>
                                    :
                                    <p className={`font-[500] text-[13px] sm:text-[15.4px] text-[#414243]`}>{status.status}</p>
                                }
                            </div>
                        );
                        const line = idx < arr.length - 1 ? (
                            <div key={`line-${idx}`} className="flex flex-row gap-6 items-center justify-center">
                                <div className="w-[28px] flex-shrink-0 flex items-center justify-center">
                                    <StatusStepLine active={status.active && arr[idx + 1].active} />
                                </div>
                            </div>
                        ) : null;
                        return [statusRow, line];
                    })}
                </div>
                :
                <div className={"flex flex-col w-full px-12 items-start justify-start gap-0"}>
                    {order?.status_list.dropoff.map((status, idx, arr) => {
                        const statusRow = (
                            <div key={idx} className={"flex flex-row gap-6 items-center justify-center"}>
                                <div className={"w-[28px] h-[28px]"}>
                                    {status.active ? <Check/> : <UncheckCircle/>}
                                </div>
                                {status.active ?
                                    <p className={`font-[500] text-[13px] sm:text-[15.4px] text-[#EDEDED]`}>{status.status}</p>
                                    :
                                    <p className={`font-[500] text-[13px] sm:text-[15.4px] text-[#414243]`}>{status.status}</p>
                                }
                            </div>
                        );
                        const line = idx < arr.length - 1 ? (
                            <div key={`line-${idx}`} className="flex flex-row gap-6 items-center justify-center">
                                <div className="w-[28px] flex-shrink-0 flex items-center justify-center">
                                    <StatusStepLine active={status.active && arr[idx + 1].active} />
                                </div>
                            </div>
                        ) : null;
                        return [statusRow, line];
                    })}
                </div>
            }
            <button 
                className={`flex items-center justify-center font-[800] text-[20px] w-full ${!switchTab || !enableButton ? "bg-transparent border-1 border-gray-800" : "bg-[#FFEE00] backdrop-blur-[70px] shadow-[inset_-4px_-4px_4px_0px_rgba(194,181,0,1)]"} bg-[#FFEE00] h-[74px] rounded-b-[16px] `}
                disabled={!switchTab || !enableButton}
                onClick={() => console.log("Track Order")}>
                <p className={`font-[500] text-[20px] ${!switchTab || !enableButton ? "text-[#414243]" : "text-[#080C0F]"}`}>Track Order</p>
            </button>
        </div>
    )
}
export default TrackOrderCard