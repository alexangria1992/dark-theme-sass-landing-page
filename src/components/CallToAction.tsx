'use client';
import helixImage from '../assets/images/helix2.png';
import emojiStarImage from '../assets/images/emojistar.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  useEffect(() => {
    scrollYProgress.on('change', (value) => console.log('value'));
  }, []);

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div
      className='bg-black text-white py-[72px] sm:py-24 text-center overflow-x-hidden'
      ref={containerRef}
    >
      <div className='container max-w-xl relative'>
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            alt=''
            className='sm:absolute sm:top-6 sm:left-[calc(100%+36px)] sm:block hidden'
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojiStarImage}
            alt=''
            className='sm:absolute sm:-top-[120px] sm:right-[calc(100%+24px)] sm:block hidden'
          />
        </motion.div>
        <h2 className='font-bold text-5xl tracking-tighter sm:text-6xl '>
          Get instant access
        </h2>
        <p className='text-xl text-white/70 mt-5'>
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form
          action=''
          className='mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row'
        >
          <input
            type='email'
            placeholder='your@email.com'
            className='h-12 bg-white/20 rounded-lg px-5 placeholder:text-[#9CA3AF] sm:flex-1'
          />
          <button className='bg-white text-black h-12 rounded-lg px-5'>
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
