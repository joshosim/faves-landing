
import Logo from '../assets/trustplug.jpg'
import { FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='bg-black text-[#bcbcbc] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full '
        before:w-full before:absolute ">
          <img
            src={Logo}
            alt="Logoimage"
            height={40}
            className='relative rounded-lg'
          />
        </div>
        <div className='flex justify-center gap-6 mt-6'>
          <div className='cursor-pointer' onClick={
            () => window.open('https://www.tiktok.com/@favvy_golden')}
          >
            <FaTiktok size={25} />
          </div>
        </div>
        <p className='mt-6'>
          &copy; 2025 Victorific. All rights reserved.
        </p>
        <p className='mt-3 text-[0.65rem]'>
          Website built with React + Framer Motion by {" "}
          <a className='text-red-500 underline'
            target='_blank' rel='noreferrer' href='https://osimuka.vercel.app'>TJJC</a>
        </p>
      </div>
    </div>
  );
};
