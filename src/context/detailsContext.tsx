import {createContext} from "react";

interface DetailsContextType {
    switchTab: boolean ,
    setSwitchTab: React.Dispatch<React.SetStateAction<boolean>>
}

export const DetailsContext = createContext<DetailsContextType>({} as DetailsContextType);

