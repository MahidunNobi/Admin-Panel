import React from 'react'
import Navbar from "../componants/Common-Componants/Navbar/Navbar"
import Sidebar from "../componants/Common-Componants/Sidebar/Sidebar"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

  return (
    <div className='bg-orange-500'>
      <Navbar />
      <div className='container mx-auto md:flex md:justify-between'> 
      <Sidebar />
      <Outlet />
      </div>
    </div>
  )
}

export default MainLayout