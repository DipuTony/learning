import React, { useEffect } from 'react'
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { useState } from 'react';

function Testing() {
    const [mode, setMode] = useState()

    useEffect(() => {
        if (localStorage.getItem('mode') == 'dark') {
            setMode("dark")
        } else {
            setMode('light')
        }
    }, [])

    useEffect(() => {
        document.body.className = mode;
    }, [mode])

    const handleModeButton = () => {
        if (localStorage.getItem('mode') == 'dark') {
            localStorage.setItem('mode', 'light')
            setMode("light")
        } else {
            localStorage.setItem('mode', 'dark')
            setMode('dark')
        }

    }

    return (
        <>
            <div className='bg-white dark:bg-gray-500 h-screen'>

                <div className='h-12 w-full bg-sky-500'></div>
                <div className='m-5'>
                    {mode == "dark" && <CiLight color='white' onClick={handleModeButton} size={30} className="cursor-pointer" />}
                    {mode == "light" && <MdDarkMode onClick={handleModeButton} size={30} className="cursor-pointer" />}
                </div>
                <div className='underline text-center font-semibold 2xl: dark:text-white text-gray-700'>Testing</div>
            </div>
        </>
    )
}

export default Testing