import React from "react";
import Hero from "../assets/Hero.jpeg"; // Correctly import Hero image
import { FaPhone } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300"> {/* dark blue background with light gray text */}
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={Hero} alt="Company Hero" className="w-12" />
             {/* <p className="text-xl font-semibold">Located</p> */}
            </div>
            <p>Malik Heights, 6th Floor, 601, Ngong Road</p>
          </div>

          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            
            <ul className="text-base font-semibold space-y-2">
              <li className="flex items-center space-x-3">
                <LuMessageSquare className="text-gray-300" /> {/* Adjust icon color */}
                <a href="mailto:info@exhibitsolutions.co.ke" className="hover:underline">info@exhibitsolutions.co.ke</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" /> {/* Adjust icon color */}
                <a href="tel:+254727522626" className="hover:underline">+254 727 522 626</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <p className="text-center text-sm font-semibold border-t-2 pt-5 mt-5 border-gray-700">
          &copy; 2024 Exhibit IT Solutions. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
