
import React from "react";
import Logo from "../../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="Company Logo" className="w-6" />
              <p className="text-xl font-semibold">Exhibit IT Solutions</p>
            </div>
            <p>Malik Heights, 6th Floor, 601, Ngong Road</p>
            <p>&copy; 2024 Exhibit IT Solutions. All rights reserved.</p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <p>Malik Heights, 6th Floor, 601<br />Ngong Road</p>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:info@exhibitsolutions.co.ke">info@exhibitsolutions.co.ke</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="tel:+254727522626">+254 727 522 626</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <p className="text-center text-sm font-semibold border-t-2 pt-5 mt-5">
          &copy; 2024 Exhibit IT Solutions. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
