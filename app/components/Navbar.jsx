import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";

function Navbar() {

  const sideMenuRef = useRef();

  const onOpen = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)"
  }

  const onClose = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)"
  }

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full"/>
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image src={assets.logo} alt="" className="w-28 cursor-pointer mr-14" />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About Me</a></li>
          <li><a className='font-Ovo' href="#experience">Experience</a></li>
          <li><a className='font-Ovo' href="#education">Education</a></li>
          <li><a className='font-Ovo' href="#work">My Work</a></li>
          <li><a className='font-Ovo' href="#endorse">My Skills</a></li>
          <li><a className='font-Ovo' href="#contact">Contact</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <Image src={assets.moon_icon} alt="" className="w-6"/>
          <a className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo" href="#contact">
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={onOpen}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>
         
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
          <div className="absolute right-6 top-6" onClick={onClose}>
            <Image className="w-5 cursor-pointer" src={assets.close_black} alt="" />
          </div>
          <li><a className='font-Ovo' onClick={onClose} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={onClose} href="#about">About Me</a></li>
          <li><a className='font-Ovo' onClick={onClose} href="#experience">Experience</a></li>
          <li><a className='font-Ovo' onClick={onClose} href="#education">Education</a></li>
          <li><a className='font-Ovo' onClick={onClose} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={onClose} href="#endorse">My Skills</a></li>
          <li><a className='font-Ovo' onClick={onClose} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
