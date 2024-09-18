import React from 'react';
import Hero from '../../src/assets/Hero.jpeg';

// Navigation links array
const navlinks = [
  { id: 1, title: 'About', link: '#about' },
  { id: 2, title: 'Features', link: '#features' },
  { id: 3, title: 'Contact', link: '#contact' }
];

const Navbar = () => {
  return (
    <div className='container mx-auto py-4 flex flex-col md:flex-row justify-between items-center'>
      {/* Logo section */}
      <div className="flex items-center mb-4 md:mb-0">
        <img 
          src={Hero} 
          alt="Logo" 
          className='w-24 h-24 object-cover mr-4 rounded-full shadow-lg' 
        />
      </div>

      {/* Centered Link section */}
      <div className='flex justify-center space-x-8'> {/* Always visible */}
        {navlinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors duration-300"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
