import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa"; // Import new icon for the additional card

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Elevate your fleet management with our state-of-the-art facilities, providing cutting-edge technology for vehicle tracking, maintenance, and driver management. Ensure your fleet operates at its best with our advanced systems and services.",
    icon: <FaVectorSquare className="text-white text-2xl" />,
    link: "#",
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Benefit from our premium fleet management tools and technologies, including GPS tracking, AI cameras, and fuel sensors. Our high-quality products are meticulously selected to offer the best in performance, reliability, and innovation.",
    icon: <FaPenToSquare className="text-white text-2xl" />,
    link: "#",
  },
  {
    id: 3,
    title: "Affordable Prices",
    description:
      "Optimize your fleet operations without breaking the bank. We provide top-tier fleet management solutions at competitive prices, ensuring that you get the best value for your investment.",
    icon: <BiSolidDollarCircle className="text-white text-2xl" />,
    link: "#",
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Experience peace of mind with our round-the-clock customer support services. Our team is always available to assist you with any questions, issues, or emergencies to keep your fleet running smoothly.",
    icon: <FaHandsHelping className="text-white text-2xl" />,
    link: "#",
  },
  {
    id: 5, // New card ID
    title: "Comprehensive Security",
    description:
      "Protect your fleet with our advanced security systems, including AI-powered cameras and real-time alerts. Monitor unauthorized access and prevent theft with cutting-edge technology designed to keep your assets safe.",
    icon: <FaShieldAlt className="text-white text-2xl" />, // New icon for security
    link: "#",
  },
];

const Services = () => {
  return (
    <div className="container py-20">
      {/* heading title */}
      <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
        <h1 className="text-3xl font-bold font-serif text-light-blue-600">
          What We Provide
        </h1>
        <p className="text-gray-600 text-sm">
          Transform your fleet operations with our comprehensive fleet management solutions designed to enhance efficiency, safety, and cost-effectiveness.
        </p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {ServiceCard.map((card) => (
          <div
            key={card.id}
            className="space-y-4 border border-light-blue-300 bg-light-blue-50 px-6 py-12 hover:bg-light-blue-100 hover:shadow-lg duration-300 transition-transform transform hover:scale-105 text-center rounded-lg shadow-lg"
          >
            {/* Center the icon with a circular background */}
            <div className="flex justify-center">
              <span className="inline-flex items-center justify-center w-16 h-16 bg-dark-blue text-white rounded-full shadow-md">
                {card.icon}
              </span>
            </div>
            {/* Card title */}
            <p className="text-2xl font-bold font-serif text-light-blue-600">
              {card.title}
            </p>
            {/* Card description */}
            <p className="text-gray-500 text-xs">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

