import React from 'react'
import ToggleTheme from '../toggleTheme/toggleTheme'

const Header = () => {
    return (
        <div className='flex justify-center items-center fixed top-0 w-full bg-background/50 backdrop-blur-sm border-b z-50'>
            <div className="flex justify-between items-center w-full max-w-[1440px] px-4 py-2">
                <div className="flex justify-start items-center">
                    <div className='text-2xl'>Cerashatam</div>
                </div>
                <div className="flex"><ToggleTheme /></div>
            </div>
        </div>
    )
}

export default Header
