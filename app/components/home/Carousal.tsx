'use client'


import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { carousalData } from '@/app/common/data'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"

const Carousal = () => {
    return (
        <Carousel  plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]} opts={{
        loop:true,
        dragFree:false,
        watchDrag:false,
        align: "start",
        }} className="w-full my-[30px]">
            <CarouselContent>
                {carousalData.map((item, index) => (
                    <CarouselItem key={index}>

                        <div className='relative'>
                            <div>
                                <Image style={{ width: '100%' }} alt='img' src={item.img} />
                            </div>
                                <CarouselPrevious  className='absolute top-1/2 left-0 bg-[#A2D2F1]' />
                                <CarouselNext className='absolute top-1/2 right-0 bg-[#A2D2F1]' />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )
}

export default Carousal