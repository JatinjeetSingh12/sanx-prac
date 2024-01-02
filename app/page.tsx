import Image from 'next/image'
import Navbar from './components/home/Navbar'
import CharacterList from './components/home/CharacterList'
import Carousal from './components/home/Carousal'

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <CharacterList />
    <Carousal />
    <div className='w-[80vw] self-center justify-self-center flex flex-row  my-[30px] mx-[30px] border-2 border-[#A2D2F1] justify-center items-center'>
      <p className=''>▶Yuru Hakama Rilakkuma Design (Hokkori Dot Latte, Women's LL Size, Apology for Delivery Delay)</p>
    </div>
    </>
  )
}
