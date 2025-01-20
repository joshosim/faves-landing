import React, { useEffect, useState } from "react";
import productImage from '../assets/product-image.png'
import pyramidImage from '../assets/pyramid.png'
import tubeImage from '../assets/tube.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import { supabase } from "../supabase";

export const ProductShowcase = () => {

  const videoUrl = 'https://dmutnajqksyhxocmxsuq.supabase.co/storage/v1/object/public/video/VID-20250117-WA0077.mp4?t=2025-01-20T13%3A42%3A58.092Z'

  const aboutRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section id='about' ref={aboutRef}
      className="scroll-mt-28 bg-gradient-to-b from=[#FFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">About Us</h2>
        </div>
        <div className="relative">
          <p className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            At Favvy's, we specialize in curating high-quality, trendy, and timeless clothing that caters to every
            personality and occasion. Our mission is to help you feel your best,
            whether you're dressing up for a special event or embracing everyday comfort with a touch of elegance.
          </p>
          <div className="mt-4">
            {videoUrl ? (
              <video controls width="100%" className="h-[500px] w-full rounded-lg shadow-md">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>Loading video...</p>
            )}
          </div>
          <motion.img
            src={pyramidImage}
            alt='PyramidImage'
            height={262} width={262}
            style={{
              translateY,
            }}
            className="hidden md:block absolute -right-36 -top-32" />
          <motion.img
            style={{
              translateY,
            }}
            src={tubeImage} alt='TubeImage' height={228}
            className="hidden md:block absolute bottom-24 -left-36" />
        </div>
        <p className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
          Led by Favvy, a passionate and experienced fashion enthusiast, Favvy's Apparels is all about delivering handpicked designs that reflect individuality and charm. From chic tees to luxurious shoes and accessories, we’ve got something for everyone.
        </p>
        <p className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
          Discover the joy of effortless style with Favvy's Apparels — because you deserve to look as amazing as you feel!
        </p>
      </div>
    </section>
  );
};
