
import goodness from "../assets/goodness.jpg";
import avatar from "../assets/avatar.png";


import { motion } from 'framer-motion'
import React, { useRef } from "react";

const testimonials = [
  {
    text: "I got my package, thank you sooo much. He loved the fit! 😫❤❤❤",
    imageSrc: goodness,
    name: "Goodness Asuquo",
    username: "asogoodness@gmail.com",
  },
  {
    text: "The outfit I got is amazing! Everyone at the wedding kept asking where I got it from. Thank you, Favvy! 🥰",
    imageSrc: avatar,
    name: "Chioma Nwachukwu",
    username: "@chiomastyles",
  },
  {
    text: "I’m so happy with my new sneakers. They’re comfy, stylish, and go with everything. You’re the best, Favvy!",
    imageSrc: avatar,
    name: "Uduak Ekong",
    username: "@uduakstyles",
  },
  {
    text: "My husband loved the tees I bought from you. They’re such good quality! Thanks a lot!",
    imageSrc: avatar,
    name: "Ayo",
    username: "@adebayobuyz",
  },
  {
    text: "The shoes are perfect, just like you promised. I can’t wait to shop again! 💃",
    imageSrc: avatar,
    name: "Tari James",
    username: "@tarijames",
  },
  {
    text: "Everything about the plain trousers is perfect – the fabric, the fit, the style! Thanks so much!",
    imageSrc: avatar,
    name: "Osinachi Eze",
    username: "@osinachieze",
  },
  {
    text: "The necklace I got is stunning. I’ve been getting so many compliments. Favvy, you rock! ✨",
    imageSrc: avatar,
    name: "Christaina Oviezibe",
    username: "@oviechris",
  },
  {
    text: "The unisex hoodie is fire! My siblings are all trying to grab it from me. Thanks, Favvy!",
    imageSrc: avatar,
    name: "Boma Braide",
    username: "@bomaswag",
  },
  {
    text: "Thanks, Favvy, for the quick delivery! The cap is super stylish and exactly what I needed for my trip.",
    imageSrc: avatar,
    name: "Nkoyo Udoh",
    username: "@nkoyotrends",
  },
];

const firstColomn = testimonials.slice(0, 3)
const secondColomn = testimonials.slice(3, 6)
const thirdColomn = testimonials.slice(6, 9)

const TestimonialsColumn = (props: {
  testimonials: typeof testimonials,
  className?: string,
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: '-50%'
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop'
        }}
        className="flex flex-col gap-6 pb-6">
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment
            key={index}
          >
            {props.testimonials.map(({ name, username, text, imageSrc }, i) => (
              <div key={i} className="card">
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    src={imageSrc}
                    alt={name}
                    height={40}
                    width={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            )
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div >
  )
}

export const Testimonials = () => {

  const customerRef = useRef<HTMLDivElement>(null)
  return (
    <section id='customers' ref={customerRef} className="bg-white scroll-mt-32">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">Customers Response</h2>
          <p className="section-description mt-5">
            We have great customers and this is their response concerning our products
            and also their experience with it.
          </p>
        </div>
        <div className="flex justify-center gap-6  mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColomn} duration={15} />
          <TestimonialsColumn testimonials={secondColomn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColomn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section >
  );
};
