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
          <h2 className="section-title mt-5">About Victor Osim (Victorific Osim)</h2>
        </div>
        <div className="relative">
          <p className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            I’m a Business Idea Broker, Creator, Sales Man, Public Speaker, a Trusted connector,
            and the founder of TrustPlug and IdeaBridge. More than just a name, I’m someone people
            rely on to bridge the gap between opportunity and trust in the digital world and businesses.
            Oh yes, and Life in general as well.
          </p>
          <p className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            My journey began with a simple insight: People love and trust me. This trust wasn’t
            just a personal trait — it became a powerful currency. I realized I could leverage
            that trust to connect everyday people with credible online businesses and vendors,
            creating real value and genuine relationships.
          </p>
          {/* <div className="mt-4">
            {videoUrl ? (
              <video controls width="100%" className="h-[500px] w-full rounded-lg shadow-md">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>Loading video...</p>
            )}
          </div> */}
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
        <h2 className="section-title mt-5">My Businesses</h2>
        <p className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
          This vision I stated above, led to the creation of TrustPlug
        </p>
        <p className="text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
          a platform and business system that transforms trust into meaningful connections and growth in Life and Business, especially Partnership and Investments. This system is active and currently I have over 50 Trusted businesses/vendors throughout Nigeria, under TrustPlug. They are divided into Regions as follows:
          - South South Region
          - South East Region
          - South West Region
          - Northern Region
          All online businesses are represented in this System. And we assure you of safe delivery of your products where ever you are in Nigeria, and what you order is what you get! I am the TrustPlug linking you to Trusted Businesses and Individuals. We offer businesses such as:
        </p>
      </div>
    </section>
  );
};
