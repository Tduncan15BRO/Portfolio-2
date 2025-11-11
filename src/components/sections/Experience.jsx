import React from 'react'
import { motion } from 'framer-motion'
import { experienceData } from '../../data/experience'

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-12 academic-border pt-4">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-300 dark:bg-primary-700" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-800 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 z-10" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <motion.div
                    className="bg-cream-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-2 text-sm font-semibold text-accent-700 dark:text-accent-400">
                      {exp.startDate} - {exp.endDate}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary-900 dark:text-primary-100 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                      {exp.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    {exp.responsibilities && (
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-accent-700 dark:text-accent-400 mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
