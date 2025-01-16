// import ArrowRight from '../assets/arrow-right.svg'
import Logo from '../assets/logosaas.png'
// import MenuIcon from '../assets/menu.svg'
import React from "react";

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 gap-3 bg-black text-white text-sm">
        <p className='text-white/60 hidden md:block'>
          Find your perfect outfit faster. Shop now and simplify your wardrobe
        </p>
        <div className='inline-flex gap-1 items-center'>
          <p>Get in Touch</p>
          {/* <ArrowRight className='h-4 w-4 inline-flex justify-center items-center' /> */}
          <svg
            className='h-4 w-4 inline-flex justify-center items-center'
            width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z" fill="currentColor" />
          </svg>
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <img src={Logo} alt='Saas Logo' height={40} width={40} />
            {/* <MenuIcon className='h-5 w-5 md:hidden' /> */}
            <svg className='h-5 w-5 md:hidden' width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8125 10.5C17.8125 10.7486 17.7137 10.9871 17.5379 11.1629C17.3621 11.3387 17.1236 11.4375 16.875 11.4375H3.125C2.87636 11.4375 2.6379 11.3387 2.46209 11.1629C2.28627 10.9871 2.1875 10.7486 2.1875 10.5C2.1875 10.2514 2.28627 10.0129 2.46209 9.83709C2.6379 9.66127 2.87636 9.5625 3.125 9.5625H16.875C17.1236 9.5625 17.3621 9.66127 17.5379 9.83709C17.7137 10.0129 17.8125 10.2514 17.8125 10.5ZM3.125 6.4375H16.875C17.1236 6.4375 17.3621 6.33873 17.5379 6.16291C17.7137 5.9871 17.8125 5.74864 17.8125 5.5C17.8125 5.25136 17.7137 5.0129 17.5379 4.83709C17.3621 4.66127 17.1236 4.5625 16.875 4.5625H3.125C2.87636 4.5625 2.6379 4.66127 2.46209 4.83709C2.28627 5.0129 2.1875 5.25136 2.1875 5.5C2.1875 5.74864 2.28627 5.9871 2.46209 6.16291C2.6379 6.33873 2.87636 6.4375 3.125 6.4375ZM16.875 14.5625H3.125C2.87636 14.5625 2.6379 14.6613 2.46209 14.8371C2.28627 15.0129 2.1875 15.2514 2.1875 15.5C2.1875 15.7486 2.28627 15.9871 2.46209 16.1629C2.6379 16.3387 2.87636 16.4375 3.125 16.4375H16.875C17.1236 16.4375 17.3621 16.3387 17.5379 16.1629C17.7137 15.9871 17.8125 15.7486 17.8125 15.5C17.8125 15.2514 17.7137 15.0129 17.5379 14.8371C17.3621 14.6613 17.1236 14.5625 16.875 14.5625Z" fill="currentColor" />
            </svg>

            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#customers">Customers</a>
              <a href="#products">Our Products</a>
              <a href="#updates">Updates</a>
              {/* <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>Get for free</button> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
