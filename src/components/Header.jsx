import React from 'react'

//ICONS//
import { CiSearch } from "react-icons/ci";
//ICONS//

const Header = () => {

  {/*Array para links de usuário*/}
  const USER_LINKS = [
    {id: 1, src: "https://randomuser.me/api/portraits/women/2.jpg", name: "Taylor" },
    {id: 2, src: "https://randomuser.me/api/portraits/men/14.jpg", name: "John" },
    {id: 3, src: "https://randomuser.me/api/portraits/women/31.jpg", name: "Rose" },
    {id: 4, src: "https://randomuser.me/api/portraits/women/20.jpg", name: "Sarah" },
  ]

  {/*Seleciona um link aleatório*/}
  const getRandomUserLink = () => {
    if (USER_LINKS.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * USER_LINKS.length);
    return USER_LINKS[randomIndex];
  };
  const randomLink = getRandomUserLink();


  return (
    <div className='flex justify-between'>
      {/*Área de boas-vindas*/}
      <h1 className='text-sm font-semibold md:text-xl m-2'>Welcome back {randomLink.name} &#x1F44B;</h1>

      {/*Área de busca e avatar*/}
      <div className='flex gap-6 -mt-1 md:mt-0'>
        <div className=''>
        <span className=' p-2 absolute right-30 md:right-32 cursor-pointer text-2xl'><CiSearch /></span>
        <input type="text" placeholder='Search Course' className='h-10 w-12  md:w-96 rounded-3xl p-4 pr-16 text-sm'  />
        </div>
        <img className='w-12 rounded-3xl hover:border-custom-green-200 hover:border-2 cursor-pointer' src={randomLink.src} alt="User Avatar" />
      </div>
    </div>
  )
}

export default Header