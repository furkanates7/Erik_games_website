"use client";

import Header from '../sections/Header';
import Footer from '../sections/Footer';
import  Hero from '@/sections/Hero';
import LogoTicker from '@/sections/LogoTicker';
import Allpages from '@/sections/Allpages';

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <Allpages/>
      <Footer/>
      </>
  ) 
}
