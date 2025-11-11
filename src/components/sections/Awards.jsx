import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaUsers } from 'react-icons/fa'
import { awardsData, serviceData } from '../../data/awards'

const Awards = () => {
  return (
    <section id="awards" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-12 academic-border pt-4">
          Awards & Service
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Awards */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6 flex items-center">
              <FaAward className="mr-3 text-accent-700 dark:text-accent-400" />
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              {awardsData.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-cream-100 dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center mr-4">
                      <FaAward className="text-accent-700 dark:text-accent-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-lg font-bold text-primary-900 dark:text-primary-100 mb-1">
                        {award.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-1">
                        {award.institution}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {award.year}
                      </p>
                      {award.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service & Memberships */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6 flex items-center">
              <FaUsers className="mr-3 text-primary-700 dark:text-primary-400" />
              Service & Memberships
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-cream-100 dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <ul className="space-y-4">
                {serviceData.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-700 dark:text-primary-400 mr-3 text-lg">•</span>
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Awards
