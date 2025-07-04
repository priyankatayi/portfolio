import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

function Navbar({ isDarkMode, setIsDarkMode }) {
  const sideMenuRef = useRef();
  const [isScroll, setisScroll] = useState(false);

  const onOpen = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const onClose = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''} `}
      >
        <div className="w-5 cursor-pointer mr-14" />
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>

          <button className="block md:hidden ml-3" onClick={onOpen}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={onClose}>
            <Image
              className="w-5 cursor-pointer"
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
            />
          </div>
          <li>
            <a className="font-Ovo" onClick={onClose} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={onClose} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={onClose} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={onClose} href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={onClose} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
