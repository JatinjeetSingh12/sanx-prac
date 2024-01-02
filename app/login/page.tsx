import Image from 'next/image'
import React from 'react'

const login = () => {
  return (
    <div>




      <div className='flex flex-col items-center justify-center'>

        <div className='flex  flex-col-reverse  md:flex-row items-center justify-between md:w-[90vw]  mt-[50px]'>
          <p className='text-[30px] md:pl-[150px] font-bold'>Login</p>
          <Image src={require('../../public/auth/img1.png')} className='md:pr-[30px]' alt='img' />
        </div>






        <div className='flex flex-col py-[40px] gap-4 mt-[20px] w-[90vw]  md:w-[57vw] md:ml-[20px]  rounded-lg bg-[#FEF5F8] items-center justify-center'>
          <div className='flex flex-col gap-4 p-2'>

            <div className='flex flex-col gap-2'>
              <div className='flex flex-row gap-7 items-center '>
                <div className='w-[40px] h-[40px]'>
                  <Image className='w-[100%] h-[100%]' src={require('../../public/auth/heart-lock.png')} alt='img' />
                </div>
                <p className='font-bold text-[18px]'>Login id</p>
              </div>
              <input className='border-[1px] p-[12px] w-[30vw] border-neutral-400' placeholder='Please enter your ID.' />
            </div>


            <div className='flex flex-col gap-2'>
              <div className='flex flex-row gap-7 items-center'>
                <div className='w-[40px] h-[40px]'>
                  <Image className='w-[100%] h-[100%]' src={require('../../public/auth/heart-lock.png')} alt='img' />
                </div>
                <p className='font-bold text-[18px]'>Password</p>
              </div>
              <input className='border-[1px] p-[12px] w-[30vw] border-neutral-400' placeholder='Please enter your password' />
            </div>

          </div>


        </div>

        <div className='flex flex-row items-center gap-4 my-[20px] w-[30vw] py-[20px] justify-center bg-[#D7ECF8] '>
          <p className='text-[#845A4E] font-bold text-[20px]'>Login</p>
          <Image src={require('../../public/auth/heart-key.png')} className='w-[28px] h-[28px]' alt='img' />
        </div>

        <div>
          <div>

          </div>

        </div>




      </div>
    </div>
  )
}

export default login 