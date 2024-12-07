import useCountry from "@/hooks/use-country";
import { SearchIcon } from "lucide-react";
import { ChangeEventHandler, useState } from "react";

interface props {
    value: string,
    searchHandler: ChangeEventHandler,
    placeholder: string
};

const Search = (Props: props) => {

    const { data } = useCountry()
    console.log(Props);


    const [value, setValue] = useState("")


    const searchHandler = (e: { target: { value: string; }; }) => {
        setValue(e.target.value)
        console.log(value);

    }

    return (
        <div className="">
            <div className="flex ">
                <SearchIcon />
                <input value={value} onChange={searchHandler} />
            </div>
        </div>
    )
}

export default Search;