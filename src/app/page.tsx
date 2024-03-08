import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Items from '@/components/custom/dashboard_content/corousel_Items';


const Home = () => {
  return (
    <div className='flex flex-col justify-start items-start h-full'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <Carousel>
          <CarouselContent>
            <CarouselItem><Items /></CarouselItem>
            <CarouselItem><Items /></CarouselItem>
            <CarouselItem><Items /></CarouselItem>
          </CarouselContent>
          <div className="absolute top-1/2 left-[50px]">
            <CarouselPrevious className='hover:bg-primary hover:dark:text-secondary' />
          </div>
          <div className="absolute top-1/2 right-[50px] ">
            <CarouselNext className='hover:bg-primary hover:dark:text-secondary' />
          </div>
        </Carousel>

      </div>
    </div>
  )
}

export default Home
