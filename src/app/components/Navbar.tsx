'use client'

import { BsMoon } from "react-icons/bs";


const modeHandler = () => {
    console.log('mode change');

}


const Navbar = () => {
    return (

        <nav className="bg-slate-50 shadow">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
                <div className="">
                    <h1>what is the new ?</h1>
                </div>

                <button className="" onClick={modeHandler}>
                    <div className="flex flex-direction">
                        <BsMoon className="mx-2 mt-1" />
                        <span>Dark Mode</span>
                    </div>
                </button>
            </div>
        </nav >


    )

};


export default Navbar;