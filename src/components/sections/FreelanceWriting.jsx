import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa'
import { freelanceWritingData } from '../../data/freelanceWriting'

const FreelanceWriting = () => {
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...new Set(freelanceWritingData.map(article => article.category))]

  const filteredArticles = filter === 'all'
    ? freelanceWritingData
    : freelanceWritingData.filter(article => article.category === filter)

  return (
    <section id="writing" className="section-container bg-cream-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-8 academic-border pt-4">
          Freelance Writing
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-accent-700 dark:bg-accent-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category === 'all' ? 'All Writing' : category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200 text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <FaNewspaper className="text-gray-400 dark:text-gray-500" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-primary-900 dark:text-primary-100 mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Publication Info */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <em>{article.publication}</em>
                    <br />
                    {article.month ? `${article.month} ` : ''}{article.year}
                  </p>

                  {/* Read Article Link */}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 font-medium transition-colors group-hover:underline"
                  >
                    Read Article
                    <FaExternalLinkAlt className="ml-2 text-sm" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredArticles.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 py-12"
          >
            No articles found in this category.
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}

export default FreelanceWriting
