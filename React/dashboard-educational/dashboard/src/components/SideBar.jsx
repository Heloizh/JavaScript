import { useState } from "react";
import { Link } from "react-router-dom";

//ICONS//
import { RxDashboard } from "react-icons/rx";
import { FiBook } from "react-icons/fi";
import { BsJournalBookmark, BsPeople } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
//ICONS//

const SideBar = () => {
  //Manipulador de eventos que é chamado quando um link é clicado
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  //Array dos Links que serão exibidos no SideBar
  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: RxDashboard },
    { id: 2, path: "/mycourses", name: "My Courses", icon: FiBook },
    { id: 3, path: "/myclasses", name: "My Classes", icon: BsJournalBookmark },
    { id: 4, path: "/messages", name: "Messages", icon: BiMessageSquareDetail },
    {
      id: 5,
      path: "/notifications",
      name: "Notifications",
      icon: IoNotificationsOutline,
    },
    { id: 6, path: "/calendars", name: "Calendars", icon: CiCalendar },
    { id: 7, path: "/community", name: "Community", icon: BsPeople },
    { id: 8, path: "/settings", name: "Settings", icon: IoSettingsOutline },
  ];

  return (
    <div className="bg-custom-dark-800 w-20 md:w-60 fixed h-screen p-4  text-white">
      {/*logo SideBar*/}
      <div className="p-2 mt-2 md:mt-0">
        <img
          src="public/logo_big_white.png"
          alt="logo"
          className="-mt-10 w-40 hidden md:flex"
        />
        <img
          src="public/logo_small_white.png"
          alt="logo"
          className="w-16 md:w-24 flex md:hidden"
        />
      </div>

      {/*Navigation Links*/}
      <ul className="mt-12 md:-mt-2 space-y-8 md:space-y-2 text-xs p-3 font-semibold">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            className={`flex md:p-3 md:rounded-3xl  md:hover:bg-custom-green-200 md:hover:text-custom-dark-600 hover:text-custom-green-200 ${
              activeLink === index
                ? "md:bg-custom-green-400 md:text-custom-dark-800 text-custom-green-400"
                : ""
            }`}
            key={index}
          >
            <Link to={link.path} className="flex space-x-4 items-center" onClick={()=>handleLinkClick(index)}>
              <span className="text-xl md:text-1xl">{link.icon()}</span>
              <span className="hidden md:flex">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/*Buttom Need Help*/}
        <div className="md:bg-custom-green-400 text-custom-dark-800 font-medium flex items-center justify-center mt-24 md:mt-8 h-16 rounded-md">
          <div className="absolute mb-20 border-4 border-custom-dark-800 flex justify-center items-center cursor-pointer bg-custom-green-200 md:bg-white w-12  h-12 rounded-full"><MdArrowOutward /></div>
          <span>Need Help?</span>
      </div>
    </div>
  );
};

export default SideBar;
