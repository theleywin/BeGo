import {useState} from "react";
import {DetailsContext} from "./detailsContext.tsx";

export function DetailsProvider({children}: { children: React.ReactNode }) {

    const [switchTab, setSwitchTab] = useState<boolean>(true)

    return (
        <DetailsContext.Provider
            value={{
                setSwitchTab,
                switchTab
            }}
        >
            {children}
        </DetailsContext.Provider>
    )
}