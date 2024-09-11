import React from 'react';
import logo from '../../src/assets/logo.jpeg';

const navlinks = [
  {
    id: 1,
    title: 'About',
    link: '#', 
  },
  {
    id: 2,
    title: 'Features',
    link: '#', 
  },
  {
    id: 3,
    title: 'Contact',
    link: '#', 
  }
];

const Navbar = () => {
  return (
    <div className='container py-4 flex justify-between items-center'>
      {/* Logo section */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className='w-12' />
        <span className="text-3xl font-bold">Fleet</span>
      </div>
      {/* Link section */}
      <div>
        {navlinks.map((link) => (
          <a
            key={link.id} // Added key for list items
            href={link.link}
            className="inline-block mx-4 text-lg font-semibold"
          >
            {link.title}
          </a>
        ))}
      </div>
      
      {/* Button section */}
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
