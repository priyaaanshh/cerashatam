import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"

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
      <div className="flex justify-center items-center w-full my-10">
        <div className="flex flex-col justify-center items-start gap-5 w-full max-w-[1440px] px-4">
          <div className="flex justify-center items-center w-full">
            <Skeleton className="size-32 rounded-full bg-slate-500" />
          </div>
          <Skeleton className="w-full h-64 rounded-xl bg-slate-500" />
          <Skeleton className="w-full max-w-[1080px] h-10 rounded-xl bg-slate-500" />
          <Skeleton className="w-full max-w-96 h-10 rounded-xl bg-slate-500" />
        </div>
      </div>
    </div>
  )
}

export default Home
