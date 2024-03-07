import Image from 'next/image'
import React from 'react'
import Varanasi from '../assets/images/dashboard_images/varanasi.jpg'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Home = () => {
  return (
    <div className='flex flex-col justify-start items-start h-full'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <Carousel>
          <CarouselContent>
            <CarouselItem><Image src={Varanasi} alt='' className='w-full h-screen object-cover' /></CarouselItem>
            <CarouselItem><Image src={Varanasi} alt='' className='w-full h-screen object-cover' /></CarouselItem>
            <CarouselItem><Image src={Varanasi} alt='' className='w-full h-screen object-cover' /></CarouselItem>
            <CarouselItem><Image src={Varanasi} alt='' className='w-full h-screen object-cover' /></CarouselItem>
          </CarouselContent>
          <div className="absolute top-1/2 left-[50px]">
            <CarouselPrevious />
          </div>
          <div className="absolute top-1/2 right-[50px] ">
            <CarouselNext />
          </div>
        </Carousel>

      </div>
    </div>
  )
}

export default Home
