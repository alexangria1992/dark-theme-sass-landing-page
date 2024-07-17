import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <div className={`${styles.bannerHeader} py-3 text-center`}>
      <div className='container'>
        <p className='font-medium'>
          <span className='hidden sm:inline'>
            Introducing a completely redesigned interface -{' '}
          </span>
          <a href='#' className='underline underline-offset-2 font-medium '>
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};
