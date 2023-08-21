import React, { useState } from 'react'
import {MdOutlineSpaceDashboard} from "react-icons/md"
import {BsPerson, BsTruck} from "react-icons/bs"
import {AiFillShop, AiOutlineShoppingCart, AiOutlineBell, AiFillSetting} from "react-icons/ai"
import {ImStatsBars2, ImProfile} from "react-icons/im"
import {MdHealthAndSafety} from "react-icons/md"
import {SiLogstash} from "react-icons/si"
import  {BiLogOut, BiCheck} from "react-icons/bi"


const Sidebar = () => {
  const [theme, setTheme] = useState("white")
  return (
    <div className='w-[20%]'>
      <div className='hidden md:block md:w-[100%] bg-white border border-gray-300'>


        <div className='border-b border-gray-300 p-4  mb-2'>
          {/* ------------Main---------------- */}
          <div className="main">
            <span className="text-xs text-gray-500">MAIN</span>
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <MdOutlineSpaceDashboard className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Dashboard</span>
            </div>
          </div>
          {/* ------------Lists---------------- */}
          <div className="Lists">
            <span className="text-xs text-gray-500">LISTS</span>
            {/* ---------------Users---------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <BsPerson className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Users</span>
            </div>
            {/* ---------------Products---------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <AiFillShop className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Products</span>
            </div>
            {/* ---------------Orders---------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <AiOutlineShoppingCart className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Order</span>
            </div>
            {/* ---------------Delivery---------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <BsTruck className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Delivery</span>
            </div>

          </div>
          {/* ------------Useful---------------- */}
          <div className="usefull">
            <span className="text-xs text-gray-500">USEFUL</span>
            {/* ----------Stats---------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <ImStatsBars2 className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Stats</span>
            </div>
            {/* ----------Notifications---------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <AiOutlineBell className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Notifications</span>
            </div>
          </div>
          {/* ------------Services---------------- */}
          <div className="Services">
            <span className="text-xs text-gray-500">SERVICE</span>
            {/* ----------System Health---------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <MdHealthAndSafety className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> System Health</span>
            </div>
            {/* ----------Logs---------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <SiLogstash className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Logs</span>
            </div>
            {/* ----------Settings---------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <AiFillSetting className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Setting</span>
            </div>
          </div>
          {/* ------------User---------------- */}
          <div className="user">
            <span className="text-xs text-gray-500">USER</span>
            {/* ------------Profile---------------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <ImProfile className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Profile</span>
            </div>
            {/* ------------LogOut---------------- */}
            <div className='pl-2 flex items-center cursor-pointer hover:bg-gray-200 p-2'>
              <BiLogOut className='mr-2 text-2xl text-orange-500' />
              <span className='text-gray-500'> Logout</span>
            </div>
          </div>
        </div>

        <div className='border-b border-gray-300 p-4 mb-2'>
          {/* ------------Theme---------------- */}
          <div className="user">
            <span className="text-xs text-gray-500">THEME</span>
            <div className='flex space-x-2 my-3'>
              <div className='w-[25px] h-[25px] border border-orange-500 rounded cursor-pointer' onClick={()=> setTheme("white")}>
                { theme === "white" && <BiCheck className='text-xl' />}
              </div>
              <div className='w-[25px] h-[25px] border border-orange-500 rounded cursor-pointer bg-gray-800 text-white' onClick={()=> setTheme("black")}>
                {theme === "black" && <BiCheck className='text-xl' />}
              </div>
            </div>                       
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar