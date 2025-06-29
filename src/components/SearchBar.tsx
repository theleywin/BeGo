import {SearchIcon} from "../assets/Search.tsx";

interface SearchBarProps {
    searchTerm: string;
    onSearch: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearch }: SearchBarProps) => {
    return (
        <div className="flex items-center justify-center mx-auto border-b-2 border-[#2C2C2C] my-[30px] w-[349px]">
           <SearchIcon/>
            <input className="flex-1 p-3 outline-0" type="text" value={searchTerm} onChange={(e) => onSearch(e.target.value)} name="orderSearch" />
        </div>
    )
}

export default SearchBar;
