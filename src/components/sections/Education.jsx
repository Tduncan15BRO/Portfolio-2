import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { educationData } from '../../data/education'

const Education = () => {
  return (
    <section id="education" className="section-container bg-cream-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-8 academic-border pt-4">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-primary-800 dark:text-primary-300 text-xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-primary-900 dark:text-primary-100 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.location} • {edu.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education
