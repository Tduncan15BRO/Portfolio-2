import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaAmazon, FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa'
import { booksData } from '../../data/books'

const Books = () => {
  const [flipped, setFlipped] = useState(null)

  return (
    <section id="books" className="section-container bg-cream-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-8 academic-border pt-4">
          Books
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {booksData.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                {/* Book Cover */}
                {book.coverImage && (
                  <div className="md:w-1/3 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-6">
                    <motion.img
                      src={`${import.meta.env.BASE_URL}${book.coverImage.replace(/^\//, '')}`}
                      alt={book.title}
                      className="w-full h-auto rounded shadow-lg"
                      whileHover={{
                        rotateY: 10,
                        scale: 1.05,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{ transformStyle: "preserve-3d" }}
                    />
                  </div>
                )}

                {/* Book Details */}
                <div className={`p-6 ${book.coverImage ? 'md:w-2/3' : 'w-full'}`}>
                  {book.status === 'published' && (
                    <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold rounded-full mb-3">
                      Published
                    </span>
                  )}
                  {book.status === 'in-progress' && (
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded-full mb-3">
                      Forthcoming
                    </span>
                  )}

                  <h3 className="font-serif text-2xl font-bold text-primary-900 dark:text-primary-100 mb-2">
                    {book.title}
                  </h3>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {book.publisher} • {book.month ? `${book.month} ` : ''}{book.year}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {book.description}
                  </p>

                  {/* Purchase Links */}
                  {book.purchaseLinks && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {book.purchaseLinks.amazon && (
                        <a
                          href={book.purchaseLinks.amazon}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-accent-700 hover:bg-accent-800 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
                        >
                          <FaAmazon className="mr-2" />
                          Buy on Amazon
                        </a>
                      )}
                      {book.purchaseLinks.publisher && (
                        <a
                          href={book.purchaseLinks.publisher}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
                        >
                          <FaBookOpen className="mr-2" />
                          Publisher
                        </a>
                      )}
                    </div>
                  )}

                  {/* Reviews/Press */}
                  {book.reviews && book.reviews.length > 0 && (
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                      <h4 className="font-serif text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
                        Press & Reviews
                      </h4>
                      <ul className="space-y-1">
                        {book.reviews.map((review, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                            • {review.source} ({review.year}) - {review.type}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Books
