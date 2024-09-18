import React from "react";
import pex from '../assets/pex.jpg'; // Import the image

const About = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <div>
        <title>Fleet Management</title>
        <meta
          name="description"
          content="Learn more about our fleet management services, our mission, and how we optimize vehicle operations."
        />
        <meta
          name="keywords"
          content="fleet management, about us, vehicle tracking, fleet solutions"
        />
      </div>
      <main className="bg-gray-100 flex items-center justify-center py-12">
        {/* Section container without extra background or shadow */}
        <section className="w-full max-w-7xl p-6 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image container */}
            <div className="flex-1">
              <img
                src={pex}
                alt="Fleet Management"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            {/* Text container */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h1 className="text-3xl font-extrabold text-themeColor lg:text-4xl mb-2 lg:mb-4">
                About Us
              </h1>
              <p className="text-base text-black-700 lg:text-lg leading-relaxed">
              Exhibit IT Solutions Limited is a leading Technology Solutions Provider based in Kenya, serving the East African region. We specialize in IT infrastructure and hardware, software development, business consulting, and training services. Our mission is to deliver comprehensive technology solutions, including software system development, deployment, maintenance, and hardware provision, all tailored to meet the unique needs of our clients.
              </p>
              {/* Button commented out */}
              {/* <button className="bg-brightColor text-white py-3 px-8 rounded-md text-lg font-semibold shadow-md hover:bg-hoverColor transition duration-300">
                Learn More
              </button> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
