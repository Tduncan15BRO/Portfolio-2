import React from 'react'
import { motion } from 'framer-motion'
import { aboutData } from '../../data/about'

const About = () => {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-8 academic-border pt-4">
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-4">
            {aboutData.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Areas of Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-cream-200 dark:bg-gray-800 p-6 rounded-lg h-fit"
          >
            <h3 className="font-serif text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              Areas of Expertise
            </h3>
            <ul className="space-y-2">
              {aboutData.expertise.map((area, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-accent-700 dark:text-accent-400 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{area}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
