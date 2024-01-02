import { FeaturesData } from '@/app/common/data'
import Image from 'next/image'
import React from 'react'




export const Features = () => {
    return (
        <div className='flex flex-row justify-evenly bg-[#FFF9FC] py-[18px] items-center'>
            {FeaturesData.map((item) => (
                <div className='flex items-center hover:cursor-pointer flex-row gap-1'>
                    <Image alt='img' src={item.image} style={{ width: 25, height: 25 }} />
                    <p className='text-[12px]'>
                        {item.name}
                    </p>
                </div>
            ))}
        </div>
    )
}
