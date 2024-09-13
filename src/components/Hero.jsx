import React from 'react';
import HeroPng from '../assets/Hero.jpeg'; // Ensure the path is correct

const Hero = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
          <h1 className="text-4xl font-bold font-serif">
            FLEET MANAGEMENT 
          </h1>
          <p className="text-sm md:text-base text-gray-500 leading-7">
          We are dedicated to delivering innovative technologies and exceptional service to help businesses streamline their fleet operations and achieve their goals.
          </p>
          <div className="space-x-4">
            <button className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]">
              Get started
            </button>
            <button className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]">
              Contact Us
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={HeroPng}
            alt="Luxury Interior Design"
            className="w-[80%] md:w-[700px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
