import {SearchIcon} from "../assets/search.tsx";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const SearchBar = ({ searchTerm, onSearch }) => {
    return (
        <div className="flex items-center justify-center mx-auto border-b-2 border-[#2C2C2C] my-[30px] w-[349px]">
           <SearchIcon/>
            <input className="flex-1 p-3 outline-0" type="text" value={searchTerm} onChange={(e) => onSearch(e.target.value)} name="orderSearch" />
        </div>
    )
}

export default SearchBar;
