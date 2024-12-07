import Search from "./Search";
import { ChangeEventHandler, useState } from "react";
import Sort from "./Sort";
import { SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface searchTerm {
    value: string,
    searchHandler: ChangeEventHandler,
    placeholder: string
};

const Header = (Props: searchTerm) => {

    const { theme } = useTheme()

    return (

        <div className="content-center ">
            <div className="h-40 content-center ">
                <div className=" flex justify-around">
                    {/* --- SearchBar --- */}
                    <div className="">
                        <div className="flex  ">
                            <SearchIcon className="mt-1 mr-1 bg-slate-200" />
                            <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" value={Props.value} onChange={Props.searchHandler} placeholder={Props.placeholder} />
                        </div>
                    </div>
                    {/* --- Sorter --- */}
                    <Sort />
                </div>
            </div>
        </div>

    )
}

export default Header;