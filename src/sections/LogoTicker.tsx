import React from "react";
import gap from '../assets/sticker-1.jpeg'
import fila from '../assets/sticker-2.jpeg'
import northFace from '../assets/sticker-3.jpeg'
import chanel from '../assets/sticker-4.jpeg'
import louisVitton from '../assets/sticker-5.jpeg'
import zara from '../assets/sticker-6.jpeg'
import balanciega from '../assets/sticker-7.jpeg'
import supreme from '../assets/sticker-8.jpeg'
import hugoBoss from '../assets/sticker-9.jpeg'
import tommyHilfiger from '../assets/sticker-10.jpeg'
import champion from '../assets/sticker-11.jpeg'
import adidas from '../assets/sticker-12.jpeg'
import nwBalance from '../assets/sticker-13.jpeg'
import gucci from '../assets/sticker-14.jpeg'
import { motion } from 'framer-motion'

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className="container">
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: '-50%'
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            <img alt='gap' src={gap}
              className='logo-ticker-image'
            />
            <img alt='fila' src={fila}
              className='logo-ticker-image'
            />
            <img alt='northFace' src={northFace}
              className='logo-ticker-image'
            />
            <img alt='chanel' src={chanel}
              className='logo-ticker-image'
            />
            <img alt='louisVitton' src={louisVitton}
              className='logo-ticker-image'
            />
            <img alt='balanciega' src={balanciega}
              className='logo-ticker-image'
            />
            <img alt='zara' src={zara}
              className='logo-ticker-image'
            />
            {/* sd */}
            <img alt='supreme' src={supreme}
              className='logo-ticker-image'
            />
            <img alt='hugoBoss' src={hugoBoss}
              className='logo-ticker-image'
            />
            <img alt='tommyHilfiger' src={tommyHilfiger}
              className='logo-ticker-image'
            />
            <img alt='champion' src={champion}
              className='logo-ticker-image'
            />
            <img alt='adidas' src={adidas}
              className='logo-ticker-image'
            />
            <img alt='gucci' src={gucci}
              className='logo-ticker-image'
            />
            <img alt='nwBalance' src={nwBalance}
              className='logo-ticker-image'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
