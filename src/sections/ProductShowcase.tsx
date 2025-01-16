import React from "react";
import productImage from '../assets/product-image.png'
import pyramidImage from '../assets/pyramid.png'
import tubeImage from '../assets/tube.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";

export const ProductShowcase = () => {


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
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, reponsive, Saas website in just
            minuts with this template.
          </p>
        </div>
        <div className="relative">
          <img src={productImage}
            alt='ProductImage' className="mt-10" />
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
      </div>
    </section>
  );
};
