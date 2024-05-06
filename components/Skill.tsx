import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill?: SkillType;
    directionLeft?: boolean;
}

function Skill({ skill, directionLeft }: Props) {
  // Check if skill is undefined or null, and handle accordingly
  if (!skill) {
    return null; // Render nothing if skill is undefined or null
  }

  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={urlFor(skill.image).url()} // Assuming image property exists in SkillType
          className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-22 md:h-22 xl:w-29
            xl:h-29 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        {/* Render progress percentage only if skill.progress is defined */}
        {skill.progress !== undefined && (
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-20 h-20 md:w-22 md:h-22 xl:w-29
            xl:h-29 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
            </div>
          </div>
        )}
    </div>
  );
}

export default Skill;