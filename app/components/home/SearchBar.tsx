import Image from 'next/image'
import React from 'react'
import { FaChevronDown, FaUser, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { Colors } from '@/app/Style/Colors';
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';







export const SearchBar = () => {
  return (
    <div className='flex  px-3 items-center justify-between '>

      {/* sanx logo */}
      {/* <div> */}
      <Link href="/">
        <Image  style={{ width: 250, height: 77 }} src={require('../.././../public/header_logo.png')} alt='header logo' />
      </Link>
      {/* </div> */}


      {/* searchbar */}
      <div className='flex flex-row self-center  border-[1px] items-center rounded-2xl  border-gray-500 w-[35vw] h-[5vh]'>
        <input placeholder='Keyword Search' className='w-[20vw]  border-r-[1px] border-gray-500 ml-4 h-[100%] focus:outline-none' />
        <div className='gap-1 text-gray-500 flex flex-row justify-end items-center pr-2 h-full w-[15vw] rounded-r-2xl'>
          <p className='text-[13px]'>Detailed search</p>
          <FaChevronDown size={15} color={'silver'} />
        </div>
      </div>



      {/* menu options */}
      <div className='flex flex-row gap-2 '>
        <div className='flex flex-row hover:cursor-pointer items-center gap-1'>
          <FaLocationCrosshairs color={Colors.iconColors} size={15} />
          <p className='text-[12px]'>Track Order</p>
        </div>
        <div className='flex flex-row gap-1 hover:cursor-pointer items-center'>
          <FaUser color={Colors.iconColors} size={15} />
          <p className='text-[12px]'>
            <Link href="/login">
              Register/Login
            </Link>
          </p>
        </div>
        <div className='flex flex-row gap-1 hover:cursor-pointer items-center'>
          <FaHeart color={Colors.iconColors} size={15} />
          <p className='text-[12px]'>
            Favorite
          </p>
        </div>
        <div className='flex flex-row gap-2 hover:cursor-pointer items-center'>
          <div className='flex flex-row gap-1 items-center'>
            <FaShoppingCart size={15} color={Colors.iconColors} />
            <p className='text-[12px]'>
              Cart(0)
            </p>
          </div>
          <div className='hover:cursor-pointer'>
            <AiOutlineMenu size={20} color={Colors.iconColors} />
          </div>
        </div>
      </div>
    </div>
  )
}
