import React from 'react'
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { useState } from 'react';
import { useEffect } from 'react';

function Demo() {
    const [theme, setTheme] = useState()

    document.body.className = theme

    useEffect(() => {
     if(localStorage.getItem('mode') == "light"){
        setTheme("light")
     }
     if(localStorage.getItem('mode') == "dark"){
        setTheme("dark")
     }
    }, [])
    

    const handleIcons = () => {
        if(theme == "light"){
            setTheme("dark")
            localStorage.setItem('mode','dark')
        }else{
            setTheme("light")
            localStorage.setItem('mode','light')
        }

        console.log("Clicked")
    }


    return (
        <>
            <div className='h-screen bg-white dark:bg-gray-800'>

                <div className='h-10 w-full bg-sky-300'></div>

                <div className='m-10'>
                { theme == "light" &&  <MdDarkMode onClick={handleIcons} className="cursor-pointer" size={25} /> }
                 { theme == "dark" && <CiLight color='white' onClick={handleIcons} className="cursor-pointer" size={25} />}
                </div>
                <div className='text-black dark:text-white text-center text-2xl'>Demo</div>
                <p className='text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quaerat consequuntur ullam veritatis aperiam fugit, possimus at sequi nam laboriosam iste quis reprehenderit vitae dicta quas delectus quam quod ab?</p>
            </div>
        </>
    )
}

export default Demo