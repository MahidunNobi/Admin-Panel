import React from 'react'
import Navbar from "../componants/Common-Componants/Navbar/Navbar"
import Sidebar from "../componants/Common-Componants/Sidebar/Sidebar"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

  return (
    <div className=''>
      <Navbar />
      <div className='md:flex'> 
      <Sidebar />
      <Outlet />
      </div>
    </div>
  )
}

export default MainLayout