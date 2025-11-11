import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaSearch, FaCopy, FaCheck } from 'react-icons/fa'
import { publicationsData } from '../../data/publications'

const Publications = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [copiedIndex, setCopiedIndex] = useState(null)

  const allTopics = ['all', ...new Set(publicationsData.flatMap(pub => pub.topics))]

  const filteredPublications = publicationsData.filter(pub => {
    const matchesFilter = filter === 'all' || pub.topics.includes(filter)
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const generateCitation = (pub) => {
    return `Duncan Jr., T. (${pub.year}). ${pub.title}. ${pub.journal}${pub.month ? `, ${pub.month}` : ''}.`
  }

  const copyCitation = (citation, index) => {
    navigator.clipboard.writeText(citation)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section id="publications" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-8 academic-border pt-4">
          Academic Publications
        </h2>

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Topic Filters */}
          <div className="flex flex-wrap gap-2">
            {allTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => setFilter(topic)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === topic
                    ? 'bg-primary-800 dark:bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {topic === 'all' ? 'All' : topic}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          <AnimatePresence>
            {filteredPublications.map((pub, index) => {
              const citation = generateCitation(pub)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream-100 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-primary-900 dark:text-primary-100 mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        <em>{pub.journal}</em> • {pub.month ? `${pub.month} ` : ''}{pub.year}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {pub.topics.map((topic, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200 text-xs font-medium rounded"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Citation */}
                      <div className="bg-white dark:bg-gray-900 rounded p-3 text-sm text-gray-600 dark:text-gray-400 font-mono border-l-4 border-primary-600 dark:border-primary-400">
                        {citation}
                      </div>
                    </div>

                    <div className="flex md:flex-col gap-2">
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Read Article
                      </a>
                      <button
                        onClick={() => copyCitation(citation, index)}
                        className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors shadow-md whitespace-nowrap"
                      >
                        {copiedIndex === index ? (
                          <>
                            <FaCheck className="mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <FaCopy className="mr-2" />
                            Copy Citation
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {filteredPublications.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 dark:text-gray-400 py-12"
            >
              No publications found matching your criteria.
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default Publications
