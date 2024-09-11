import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Fleet Management</title>
        <meta
          name="description"
          content="Learn more about our fleet management services, our mission, and how we optimize vehicle operations."
        />
        <meta
          name="keywords"
          content="fleet management, about us, vehicle tracking, fleet solutions"
        />
      </Helmet>
      <main className="bg-gray-100 flex items-center justify-center py-8">
        <section className="w-full max-w-6xl p-6 md:p-12 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl font-extrabold text-themeColor md:text-4xl mb-4 md:mb-6">
                About Us
              </h1>
              <p className="text-base text-gray-700 md:text-lg leading-relaxed mb-4">
                Exhibit IT Solutions is a trusted provider of fleet management
                services in Kenya, serving the East African region. Our expertise
                includes optimizing vehicle operations, enhancing driver safety,
                and reducing operational costs through advanced technology. From
                vehicle tracking and maintenance to driver management and fuel
                monitoring, our solutions are designed to ensure efficient fleet
                performance.
              </p>
              <button className="bg-brightColor text-white py-3 px-6 rounded-md text-lg font-semibold shadow-md hover:bg-hoverColor transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
