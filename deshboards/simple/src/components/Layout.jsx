import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <div className='flex'>
            <SideBar/>
            <div className='w-full ml-16 md:ml-56'>
                <Header/>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout