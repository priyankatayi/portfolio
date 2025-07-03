import React from 'react';
import { experience } from '@/assets/assets';
import { motion } from 'motion/react';

function Experience() {
  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-20 text-5xl font-Ovo"
        >
          {' '}
          Work Experience
        </motion.h2>
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {experience.map((exp, idx) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={idx}
              className="dark:bg-white bg-[#1e1e2f] p-6 rounded-2xl shadow-md border text-white border-gray-200 dark:border-gray-700 dark:text-black"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-600">
                    {exp.company} — {exp.location}
                  </p>
                </div>
                <span className="mt-2 sm:mt-0 text-sm text-gray-400 dark:text-gray-500">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-sm sm:text-base">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience;
