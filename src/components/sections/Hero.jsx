import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope } from 'react-icons/fa'
import { aboutData } from '../../data/about'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-100 via-cream-200 to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 dark:text-primary-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {aboutData.name}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {aboutData.title}
            </motion.p>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {aboutData.institution}
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Scholar specializing in Lacanian Psychoanalysis, Animal Studies, and
              American Literature. Author of <em>Interpreting Meat</em>.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary-800 hover:bg-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <FaEnvelope className="mr-2" />
                Get in Touch
              </a>
              <a
                href="#publications"
                className="inline-flex items-center px-6 py-3 border-2 border-primary-800 dark:border-primary-400 text-primary-800 dark:text-primary-400 hover:bg-primary-800 hover:text-white dark:hover:bg-primary-600 rounded-lg transition-colors"
              >
                View Publications
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <img
                src="/assets/images/headshot.jpg"
                alt={aboutData.name}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-8 border-white dark:border-gray-800"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-primary-800 dark:border-primary-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary-800 dark:bg-primary-400 rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
