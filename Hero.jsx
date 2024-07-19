import React from 'react';
import './Hero.css';
import { BsArrowUpRight } from "react-icons/bs";
const Hero = () => {
  const handleClick = () => {
    window.scrollTo(0,510);
  };
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1 className='flex justify-center items-center'>Customer Segmentation</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis, quaerat et dolorem iusto sit voluptas, aspernatur explicabo repellendus, officiis amet? Aperiam itaque totam corrupti natus eaque recusandae molestiae aliquid corporis veniam, laudantium adipisci alias unde commodi suscipit. Dolorum et, repellat nobis, itaque inventore eum quas laboriosam nostrum tempore non, similique facilis ducimus. Optio animi similique quos ipsa deleniti quasi!</p>
        <div className='relative mx-auto h-[10vh] flex justify-center items-center'>
          <button id='kuchbhe' onClick={handleClick} className='explore btn2 items-center bg-[#ffffff] flex rounded-3xl relative w-36 h-10'>
            <div className='haikuch absolute w-[2em] h-[2em] bg-[#030149] left-1 rounded-full'>
              <BsArrowUpRight size={22} className='relative left-1 top-1' />
            </div>
            <h2 className='yebhe text-black text-center relative justify-center left-2 text-lg mx-auto'>Explore</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;