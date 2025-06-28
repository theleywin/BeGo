import { useState, useRef, useEffect } from "react";

const tabs = ["Upcoming", "Completed", "Past"];

interface NavProps {
    selected: number;
    setSelected: (index: number) => void;
}

const Nav = ({ selected, setSelected }: NavProps) => {
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const currentTab = tabRefs.current[selected];
        if (currentTab) {
            setIndicatorStyle({
                left: currentTab.offsetLeft,
                width: currentTab.offsetWidth,
            });
        }
    }, [selected]);


    return (
        <nav className="relative flex justify-between items-center !ml-[39.03px] !mr-[61px]">
            {tabs.map((tab, index) => (
                <button
                    key={tab}
                    ref={el => {tabRefs.current[index] = el;}}
                    onClick={() => setSelected(index)}
                    className={`relative cursor-pointer ${index === selected ? 'text-bego' : 'text-[#D9D9D9]'}`}
                >
                    <h1 className={"text-[14px]"}>{tab}</h1>
                </button>
            ))}
            <span
                className="absolute h-[2px] bg-bego bottom-[-10px] transition-all duration-300"
                style={{ left: indicatorStyle.left , width: indicatorStyle.width - 25 }}
            />
        </nav>
    );
};

export default Nav;