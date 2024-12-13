import Search from "./Search";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
// import Sort from "./Sort";
import { SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface searchTerm {
    value: string,
    searchHandler: ChangeEventHandler,
    sortedHandler: MouseEventHandler,
    placeholder: string
};

const Header = (Props: searchTerm) => {

    const { theme } = useTheme()

    return (

        <div className="content-center ">
            <div className="h-40 content-center ">
                <div className=" flex justify-between p-10 m-10 h-50">
                    {/* --- SearchBar --- */}
                    <div className="">
                        <div className="flex  ">
                            <SearchIcon className="mt-1 mr-1 b" />
                            <input
                                className={`w-full bg-transparent  placeholder:text-slate-400 ${theme === "dark" ? "text-slate-700 " : "text-slate-200"} text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                                value={Props.value}
                                onChange={Props.searchHandler}
                                placeholder={Props.placeholder}
                            />
                        </div>
                    </div>
                    {/* --- Sorter --- */}
                    <div className="">
                        <div className="flex justify-around text-center ">
                            <h1 className="mt-2 mr-2">Sorted by :</h1>
                            <button className="bg-cyan-800 rounded-lg text-slate-100 p-2" onClick={Props.sortedHandler}>puplation</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;