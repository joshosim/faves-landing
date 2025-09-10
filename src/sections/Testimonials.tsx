
import goodness from "../assets/goodness.jpg";
import avatar from "../assets/avatar.png";


import { motion } from 'framer-motion'
import React, { useRef } from "react";

const testimonials = [
  {
    text: "I ordered a cake and some fresh snacks from you – they were delicious and well packaged. Everyone at home loved it! 🍰",
    imageSrc: avatar,
    name: "Samuel Okeke",
    username: "@samokeke",
  },
  {
    text: "Your graphics design service gave my brand a fresh look. My clients can’t stop praising the new flyer! 🎨",
    imageSrc: avatar,
    name: "Amaka Johnson",
    username: "@amakacreates",
  },
  {
    text: "The website you built for my business is so professional and user-friendly. Thank you for bringing my ideas to life!",
    imageSrc: avatar,
    name: "Kingsley Emmanuel",
    username: "@kingemmy",
  },
  {
    text: "The video editing was smooth and top-notch. My content now looks so professional. Definitely coming back!",
    imageSrc: avatar,
    name: "Deborah Felix",
    username: "@debbyfx",
  },
  {
    text: "I booked your event planning service for my birthday – the decorations and gift packs were perfect. You made my day special! 🎉",
    imageSrc: avatar,
    name: "Michael Bassey",
    username: "@mikeb",
  },
  {
    text: "The portrait artwork you delivered was breathtaking. My family was so moved when I gifted it to them. ❤️",
    imageSrc: avatar,
    name: "Ruth Anaba",
    username: "@ruthyart",
  },
  {
    text: "The nightwear I bought is soft, comfy, and stylish. Can’t wait to shop for more! 👗",
    imageSrc: avatar,
    name: "Favour Edet",
    username: "@favouredet",
  },
  {
    text: "The beddings and duvet set I ordered is so cozy. My room looks like a hotel now. Thank you! 🛏️",
    imageSrc: avatar,
    name: "Chinonso Umeh",
    username: "@nonso",
  },
  {
    text: "The skincare products I got from you are amazing! My face feels smooth and fresh already. 🌸",
    imageSrc: avatar,
    name: "Jennifer Amos",
    username: "@jenbeauty",
  },
  {
    text: "The perfume I bought smells heavenly. I keep getting compliments wherever I go. 💎",
    imageSrc: avatar,
    name: "Damilola Ayeni",
    username: "@damiayeni",
  },
  {
    text: "The jewelry piece I got is so classy and elegant. It really completes my outfits!",
    imageSrc: avatar,
    name: "Blessing Etim",
    username: "@blessy",
  },
  {
    text: "The bag is durable and stylish – I’ve been carrying it everywhere since it arrived. Thanks! 🎒",
    imageSrc: avatar,
    name: "Ifeanyi Okoro",
    username: "@ifeokoro",
  },
  {
    text: "The sneakers are super comfy and trendy. I love them! 👟",
    imageSrc: avatar,
    name: "Chidera James",
    username: "@dera",
  },
  {
    text: "My new laptop bag and power bank are life-savers for work. Great quality and fast delivery!",
    imageSrc: avatar,
    name: "Victor Aigbe",
    username: "@victorworks",
  },
  {
    text: "The nonstick pots and utensils I got are excellent quality. Cooking has become so much fun!",
    imageSrc: avatar,
    name: "Ngozi Chukwu",
    username: "@ngozi",
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
