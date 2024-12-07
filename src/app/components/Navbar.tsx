'use client'

import { useTheme } from "next-themes";
import ModeToggle from "./mode_toggle";




const Navbar = () => {

    const { theme } = useTheme()

    return (

        <nav className={theme === 'light' ? 'shadow-lg shadow-gray-100 ' : 'shadow-2xl shadow-gray-200'}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
                <div className="">
                    <h1>what is the new ?</h1>
                </div>
                <ModeToggle />
            </div>
        </nav >


    )

};


export default Navbar;