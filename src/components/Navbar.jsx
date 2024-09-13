import React from 'react';
import logo from '../../src/assets/logo.jpeg';

// Navigation links array
const navlinks = [
  {
    id: 1,
    title: 'About',
    link: '#about', // Update link to work with section id
  },
  {
    id: 2,
    title: 'Features',
    link: '#features', // Update link to work with section id
  },
  {
    id: 3,
    title: 'Contact',
    link: '#contact', // Update link to work with section id
  }
];

const Navbar = () => {
  return (
    <div className='container mx-auto py-4 flex justify-between items-center'>
      {/* Logo section */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className='w-12 mr-3' />
        <span className="text-3xl font-bold text-gray-800">Fleet</span>
      </div>

      {/* Link section */}
      <div className='hidden md:flex'> {/* Hidden on small devices */}
        {navlinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="inline-block mx-4 text-lg font-semibold text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Button section */}
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
