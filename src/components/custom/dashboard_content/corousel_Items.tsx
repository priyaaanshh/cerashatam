import React from 'react'

import { Quicksand } from 'next/font/google';
const quicksand = Quicksand({ subsets: ["latin"] });

import Varanasi from '../../../assets/images/dashboard_images/varanasi.jpg'
import Image from 'next/image';

const Items = () => {
    return (
        < div className='relative'>
            <div className='absolute flex flex-col justify-center items-center gap-2 md:gap-3 px-4 w-full h-full rounded font-semibold text-sm sm:text-lg md:text-3xl text-center text-white bg-black/65 select-none'>
                <div className="flex">100 years of Ceramic Engineering, IIT-BHU</div>
                <div className="flex text-4xl sm:text-6xl md:text-8xl py-3 md:py-5">Cerashatam 2024</div>
                <div className="text-xl sm:text-2xl md:text-4xl">10<sup>th</sup> to 14<sup>th</sup> December, 2024</div>
                <div className="flex">Department of Ceramic Engineering</div>
                <div className='flex'>IIT (BHU)</div>
            </div>
            < Image src={Varanasi} alt='' className='w-screen h-screen object-cover' />
        </ div >
    )
}

export default Items

