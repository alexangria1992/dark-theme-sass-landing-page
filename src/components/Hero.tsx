import styles from './Hero.module.css';
import ArrowIcon from '../assets/icons/arrow-w.svg';
import cursorImage from '../assets/images/cursor.png';
import messageImage from '../assets/images/message.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div
      className={`relative overflow-clip bg-black text-white py-[72px] ${styles.heroBackground}`}
    >
      <div
        className={`${styles.ovalDesign} sm:w-[1536px] sm:h-[768px] sm:py-24 absolute h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 
      -translate-x-1/2 border border-[#B48CDE] top-[calc(100%-96px) sm:top-[calc(100%-120px)] lg:w-[2400px] lg:h-[1200px]`}
      ></div>
      <div className='container relative'>
        <div className='flex items-center justify-center'>
          <a
            href=''
            className='inline-flex  gap-3 border py-1 px-2 rounded-lg border-white/30'
          >
            <span className={`text-transparent ${styles.spanGradient}`}>
              Version 2.0 is here
            </span>
            <span className='inline-flex items-center gap-1'>
              <span>Read More</span>
              <ArrowIcon />
            </span>
            <span>Read More</span>
          </a>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='inline-flex relative'>
            <h1 className='text-7xl font-bold tracking-tighter text-center  inline-flex sm:text-9xl'>
              One Task <br /> at a Time
            </h1>
            <Image
              src={cursorImage}
              height='200'
              width='200'
              alt=''
              className='absolute right-[476px] top-[108px] hidden sm:inline   '
            />
            <Image
              src={messageImage}
              alt=''
              height='200'
              width='200'
              alt=''
              className='absolute top-[56px] left-[498px] hidden sm:inline'
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-center text-xl mt-8 max-w-md'>
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your successes, .
          </p>
        </div>
        <div className='flex justify-center items-center mt-8'>
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
