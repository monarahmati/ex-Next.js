'use client';

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";


const ModeToggle = () => {

    const { theme, setTheme } = useTheme()

    const themeHandler = () => {
        setTheme(theme === 'light' ? 'dark' : "light")
        console.log(theme);

    }

    return (
        <>
            <button onClick={themeHandler}>
                {
                    theme === "light" ? <SunIcon className="#000" /> : <MoonIcon className="#fff" />
                }
            </button>
        </>
    )



}


export default ModeToggle;