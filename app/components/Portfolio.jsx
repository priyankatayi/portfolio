import React from 'react';
import { projects } from '@/assets/assets';
import { motion } from 'motion/react';

function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="portfolio"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-20 text-5xl font-Ovo"
      >
        My Recent Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-12 mt-5 mx-auto max-w-2xl font-Ovo"
      >
        Explore a collection of projects showcasing my expertise in front end development
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid sm:grid-cols-2 md:grid-cols-4 my-10 gap-5 dark:text-black"
      >
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="rounded-lg border border-gray-300 dark:border-white/80 overflow-hidden bg-white dark:bg-darkTheme shadow-sm"
          >
            <div
              className="h-56 bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm text-gray-800 dark:text-white">{project.description}</p>

              <div className="flex justify-between items-center mt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-700 hover:bg-gray-800 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  Demo
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-700 hover:bg-gray-800 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  Github
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;
