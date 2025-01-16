import React from "react";
// import ArrowIcon from '../assets/arrow-right.svg'
import cogImage from '../assets/cog.png'
import cylinderImage from '../assets/cylinder.png'
import noddleImage from '../assets/noodle.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
export const Hero = () => {
  const homeRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: homeRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id='home'
      ref={homeRef}
      className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip scroll-mt-32'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className="tag">Version 1.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Favvy&apos;s Apparrel</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Experience the Art of Fashion with Favvy&apos;s Apparels - Your Premier Destination for
              Style, Comfort, and Elegance.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get in Touch</button>
              <button className="btn btn-text gap-1">
                <span>Contact Us</span>
                {/* <ArrowIcon className='h-5 w-5' /> */}
                <svg className='h-5 w-5' width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z" fill="currentColor" />
                </svg>

              </button>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img
              src={cogImage}
              alt='Cog Image'
              className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut'
              }}
            />
            <motion.img
              src={cylinderImage}
              alt='Cylinder Image'
              height={220} width={220}
              className='hidden md:block -top-8 -left-32 md:absolute'
              style={{
                translateY: translateY
              }}
            />
            <motion.img
              src={noddleImage}
              alt='noddle Image'
              height={220} width={220}
              className='hidden md:block top-[524px] left-[448px] lg:block absolute rotate-[30deg]'
              style={{
                rotate: 30,
                translateY: translateY
              }}
            />
          </div>
        </div>
      </div>
    </section>

  );
};
