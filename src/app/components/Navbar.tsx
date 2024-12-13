'use client'

import { useTheme } from "next-themes";
import ModeToggle from "./mode_toggle";




const Navbar = () => {

    const { theme } = useTheme()

    return (

        <nav className={theme === 'light' ? 'shadow-2xl shadow-gray-600 ' : 'shadow-2xl shadow-gray-200'}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
                <div className="">
                    <h1>what is the new ?</h1>
                </div>
                <div className="flex">
                    <h2 className="font-serif mr-1" >Dark Theme</h2>
                    <ModeToggle />
                </div>

            </div>
        </nav >


    )

};


export default Navbar;