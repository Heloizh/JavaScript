import React from 'react'
import { Outlet } from "react-router-dom";


import SideBar from './SideBar'
import Header from './Header'
import FlexCards from './FlexCards';

const Layout = () => {
  return (
    <div>
        <div className='flex'>
            <SideBar/>
            <div className='w-full ml-16 md:ml-56 p-10'>
                <Header/>
                <FlexCards/>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout