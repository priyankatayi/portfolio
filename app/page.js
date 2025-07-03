'use client';

import React, { useEffect, useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Experience isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Portfolio isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </>
  );
}
