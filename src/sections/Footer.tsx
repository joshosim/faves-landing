
import Logo from '../assets/logosaas.png'
import { FaTiktok } from 'react-icons/fa';
import React from "react";
export const Footer = () => {
  return (
    <div className='bg-black text-[#bcbcbc] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#f87bff,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute ">
          <img
            src={Logo}
            alt="Logoimage"
            height={40}
            className='relative'
          />
        </div>
        {/* <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#customers">Customers</a>
          <a href="#help">Help</a>
        </nav> */}
        <div className='flex justify-center gap-6 mt-6'>
          <div className='cursor-pointer' onClick={
            () => window.open('https://www.tiktok.com/@favvy_golden')}
          >
            <FaTiktok size={25} />
          </div>
        </div>
        <p className='mt-6'>
          &copy; 2025 Favvy's Apparrel. All rights reserved.
        </p>
        <p className='mt-3 text-[0.65rem]'>
          Website built with React + Framer Motion by
          <a className='text-red-500 underline' href='https://osimuka.vercel.app'>  Osim Uka</a>
        </p>
      </div>
    </div>
  );
};
