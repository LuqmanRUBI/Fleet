import React from 'react';
import rr from '../assets/rr.jpg'; // Import the map image

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center"
      style={{
        backgroundImage: `url(${rr})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Semi-transparent black overlay covering the full height and width */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        style={{
          width: '100%', // Cover the full width of the container
          height: '100%', // Cover the full height of the container
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center px-5 md:px-20 w-full max-w-4xl">
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6 drop-shadow-lg">
            FLEET MANAGEMENT
          </h1>
          <p className="text-lg md:text-xl text-white leading-8 max-w-lg mb-8 drop-shadow-lg">
          Discover the future of fleet management with our cutting-edge solutions designed to transform how you monitor, maintain, and optimize your fleet. From real-time vehicle tracking and advanced AI cameras to seamless driver management and fuel monitoring, we empower you to take full control of your fleet's performance and safety. Experience unparalleled efficiency, reduce operational costs, and ensure compliance—all while keeping your fleet running smoothly. Let’s take your business to new heights—explore our innovative platform now!
          </p>
          
          {/* Buttons */}
          <div className="space-x-4 flex">
            <button
              className="primary-btn uppercase bg-white text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-shadow shadow-lg shadow-black/50"
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
