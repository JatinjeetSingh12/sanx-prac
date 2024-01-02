import { characterList } from '@/app/common/data'
import Image from 'next/image'
import React from 'react'

const CharacterList = () => {
    return (
        <div className='bg-[#D1EAF7]'>

            <div className='flex px-[40px] flex-row py-[15px]   items-center'>
                {characterList.map((item) => (
                    <div className='group flex relative hover:cursor-pointer min-w-[200px] items-center max-w-[200px] mx-[4px] max-h-[160px] min-h-[160px] flex-col bg-white my-[8px] rounded-lg '>
                        <div className='bg-[#F2E8F1] max-h-[110px] py-[8px] px-[16px] m-[8px] rounded-lg'>
                            <Image alt='img' src={item.image} />
                        </div>
                        <p className='text-[#845A4E]  font-bold self-center'>{item.name}</p>
                        <div className='bg-white absolute hidden group-hover:block top-[155px] z-10 rounded-b-lg p-1'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quis quae doloribus dolore, officia voluptatibus pariatur consequuntur illum odio voluptates commodi adipisci quo doloremque! Optio, cum sapiente. Vel, cupiditate sequi!</p>
                        </div>
                    </div>
                ))}
                <Image alt='img' src={require('../../../public/view-all.png')} style={{ marginLeft: 10 }} />
            </div>
        </div>
    )
}

export default CharacterList