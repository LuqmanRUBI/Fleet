import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Elevate your fleet management with our state-of-the-art facilities, providing cutting-edge technology for vehicle tracking, maintenance, and driver management. Ensure your fleet operates at its best with our advanced systems and services.",
    icon: <FaVectorSquare />,
    link: "#",
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Benefit from our premium fleet management tools and technologies, including GPS tracking, AI cameras, and fuel sensors. Our high-quality products are meticulously selected to offer the best in performance, reliability, and innovation.",
    icon: <FaPenToSquare />,
    link: "#",
  },
  {
    id: 3,
    title: "Affordable Prices",
    description:
      "Optimize your fleet operations without breaking the bank. We provide top-tier fleet management solutions at competitive prices, ensuring that you get the best value for your investment.",
    icon: <BiSolidDollarCircle />,
    link: "#",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <h1 className="text-3xl font-bold font-serif">
            What We Provide
          </h1>
          <p className="text-gray-500 text-sm">
            Transform your fleet operations with our comprehensive fleet management solutions designed to enhance efficiency, safety, and cost-effectiveness.
          </p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => (
            <div
              key={card.id}
              className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
            >
              <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                {card.icon}
              </span>
              <p className="text-2xl font-bold font-serif">{card.title}</p>
              <p className="text-gray-400 text-xs">{card.description}</p>
              <a
                href={card.link}
                className="inline-block border-b border-black"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
