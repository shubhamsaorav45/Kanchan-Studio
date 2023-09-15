import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import SampleImage from '../../Header/cover.png';
import SampleImage1 from '../../Header/cover2.png';
import SampleImage2 from '../../Header/cover3.JPG';
import SampleImage3 from '../../Header/cover4.jpg';
import SampleImage4 from '../../Header/cover5.jpg';
import GlimpseImage1 from '../Images/glimpseimg 1.jpg';
import GlimpseImage2 from '../Images/glimpseimg (2).jpg';
import GlimpseImage3 from '../Images/glimpseimg (3).jpg';
import GlimpseImage5 from '../Images/glimpseimg (5).jpg';
import GlimpseImage6 from '../Images/glimpseimg (6).jpg';
import GlimpseImage4 from '../Images/glimpseimg (4).jpg';

import GlimpseImage8 from '../Images/glimpseimg (8).JPG';
import GlimpseImage9 from '../Images/glimpseimg (9).JPG';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };

  const text = 'KANCHAN STUDIO';
  const [animatedText, setAnimatedText] = useState('');
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const animateText = () => {
      let index = 0;
      const intervalId = setInterval(() => {
        setAnimatedText((prevText) => {
          const newText = prevText + text[index];
          index++;
          if (index === text.length) {
            clearInterval(intervalId);
            setAnimationComplete(true);
          }
          return newText;
        });
      }, 500);
    };

    animateText();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="bg-cover bg-center w-full h-100vh relative overflow-hidden">
          <img src={SampleImage1} alt="Slide 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="text-gray-710 text-center absolute inset-0 mt-5">
            <div className="bg-gray-100 p-2 rounded border border-gray-700 inline-block">
              <div className="text-4xl font-extrabold">
                {animationComplete ? 'KANCHAN STUDIO' : animatedText}
              </div>
            </div>
            <p className="text-xl mt-4 font-bold">We don't see the things as they are.</p>
          </div>
        </div>

        {/* Second Slide */}
        <div className="bg-cover bg-center w-full h-100vh relative overflow-hidden">
          <img src={SampleImage} alt="Slide 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="text-white text-center absolute inset-0 flex flex-col items-center justify-center">
            {/* You can add content for the second slide here */}
          </div>
        </div>

        {/* Third Slide */}
        <div className="bg-cover bg-center w-full h-100vh relative overflow-hidden">
          <img src={SampleImage3} alt="Slide 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="text-white text-center absolute inset-0 flex flex-col items-center justify-center">
            {/* You can add content for the third slide here */}
          </div>
        </div>

        {/* Fourth Slide */}
        <div className="bg-cover bg-center w-full h-100vh relative overflow-hidden">
          <img src={SampleImage2} alt="Slide 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="text-white text-center absolute inset-0 flex flex-col items-center justify-center">
            {/* You can add content for the third slide here */}
          </div>
        </div>

        {/* Fifth Slide */}
        <div className="bg-cover bg-center w-full h-100vh relative overflow-hidden">
          <img src={SampleImage4} alt="Slide 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="text-white text-center absolute inset-0 flex flex-col items-center justify-center">
            {/* You can add content for the third slide here */}
          </div>
        </div>
      </Slider>


      <div className="relative z-10">
        <h4 className="font-medium text-center text-2xl mt-8 mb-4">TESTIMONIALS</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Testimonial Cards */}
          <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-full" src={SampleImage1} alt="" />
            <div className="p-4">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">RAVI AND CIYA</h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">Excellent team work!!..lot of creativity and
                innovative idea that you bring up into our
                life event. The "Love Portrait" prewedding
                video was directed into perfection in very
                less time.</p>
              <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </a>
            </div>
          </div>

          <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-full" src={SampleImage} alt="" />
            <div className="p-4">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">AJAY AND PRIYA</h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">Thank you so much to The Kanchan studio for
                making our wedding day so special. From
                our prewedding shoot to the big day we
                have been so impressed with the level of
                professionalism, punctuality and reliability.
                Our photos are amazing and we love them!
                Thank vou again to manish and his team for
                great work and make our wedding
                memorable.</p>
              <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </a>
            </div>
          </div>
          <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-full" src={SampleImage3} alt="" />
            <div className="p-4">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">ASHISH AND PUJA</h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">Our experience with the Tai studio has been
                great. we are extremely happy with our
                kashmir prewedding Shoot and my family
                shoot and also satisfied with all the wedding
                events captured by Kanchan Studio.</p>
              <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='image bg-gray-100 p-6 '>
        <h1 className='font-bold text-3xl text-center p-2'>GLIMPSE OF OUR WORK</h1>
        <div >
          <div className='grid grid-cols-2 gap-2 rounded-lg overflow-hidden shadow-md'>

            <img src={GlimpseImage2} alt='For Details' />
            <img src={GlimpseImage3} alt='For Details' />
            <img src={GlimpseImage5} alt='For Details' />
            <img src={GlimpseImage6} alt='For Details' />
     
          </div>
          <div className='grid grid-cols-2 gap-2 p-6 rounded-lg overflow-hidden shadow-md'>
            <img src={GlimpseImage1} alt='For Details' />
            <img src={GlimpseImage9} alt='For Details' />
            <img src={GlimpseImage8} alt='For Details' />
            <img src={GlimpseImage4} alt='For Details' />
        
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
