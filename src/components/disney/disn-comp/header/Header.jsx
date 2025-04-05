import React, { useState } from 'react'
import { HiHome, HiMagnifyingGlass, HiPlus, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import logo from '../../../../../public/logo.png'
import userImg from '../../../../../public/user.webp'
import { HeaderItem } from './HeaderItem';
import { BsThreeDotsVertical } from "react-icons/bs";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCHLIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    },
  ]
  return (
    <>
      <div className="flex gap-3 items-center justify-around">
        <img src={logo} className='w-[80px] rounded-lg' />
        <div className="hidden md:flex gap-5 items-center font-semibold text-[15px]">
          {menu.map((item, index) => (
            <HeaderItem key={index} Icon={item.icon} name={item.name} />
          ))}
        </div>
        <div className="lg:hidden flex gap-2 items-center font-semibold text-[15px]">
          {menu.map((item, index) => (index < 3 &&
            <HeaderItem key={index} Icon={item.icon} name={''} />
          ))}

          <div className="md:hidden" onClick={() => setShowMenu(!showMenu)} onBlur={() => setShowMenu(false)} tabIndex={0}>
            <HeaderItem Icon={BsThreeDotsVertical} name={''} />
            {showMenu && <span className='absolute p-[10px] border mt-3 bg-[#121212] border-gray-700
             rounded-md'>
              {menu.map((item, index) => (index >= 3 &&
                <HeaderItem key={index} Icon={item.icon} name={item.name} />
              ))}
            </span>}
          </div>
        </div>
        <img src={userImg} className='w-[50px]' />
      </div>

    </>
  )
}

export default Header