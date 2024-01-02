import Image from 'next/image'
import React from 'react'

const TopImage = () => {
  return (
    <>
      <div className='w-full   relative'>
        <Image alt='header image' src={require('../../../public/top_image.png')} />
        <div className='absolute top-[2px] left-[40%]  '>
        <p className=' text-[#F9006F] text-[14px]  font-bold'>San-X Net Shop Member Benefits</p>
        </div>
      </div>
    </>
  )
}

export default TopImage