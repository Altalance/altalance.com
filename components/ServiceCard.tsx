import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const ServiceCard = ({}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 first-letter w-[450px] md:w-[550px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full"> {/* Container for vertical alignment */}
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
          src="https://cdn.sanity.io/images/rh8hx4sn/production/5d7ce8d5c8caf1152b9f10aeb81579b161d0e315-1200x800.jpg"
          alt=""
        />
        <h4 className="text-4xl font-bold mt-4 text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">1. Software development</h4> {/* Center aligned title with responsive font size */}
      </div>
      {/* Conditionally render the description based on screen size */}
      <div className="px-0 md:px-10">
        {/* Description visible on medium screens and above (md) */}
        <p className="pt-2 text-1xl mt-1 hidden sm:block md:block">
          We create production-ready applications using agile methodology, covering everything from frontend to backend, with continuous support.
        </p>
        {/* Render the detailed services list only on larger screens (md and above) */}
        <ul className="list-disc space-y-4 ml-5 text-lg hidden md:block">
          <li>Tailored software solutions</li>
          <li>Agile methodology</li>
          <li>Expertise in multiple languages</li>
          <li>Full-stack development</li>
          <li>Continuous integration</li>
          <li>Dedicated support</li>
        </ul>
      </div>
    </article>
  );
};

export default ServiceCard;
