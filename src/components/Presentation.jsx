import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { aboutData } from '../data/about'
import { educationData } from '../data/education'
import { experienceData } from '../data/experience'
import { publicationsData } from '../data/publications'
import { booksData } from '../data/books'
import { freelanceWritingData } from '../data/freelanceWriting'
import { awardsData } from '../data/awards'

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    // Title Slide
    {
      type: 'title',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-7xl md:text-8xl font-bold text-primary-900 dark:text-primary-100 mb-8"
          >
            {aboutData.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-4"
          >
            {aboutData.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-gray-600 dark:text-gray-400"
          >
            {aboutData.institution}
          </motion.p>
        </div>
      )
    },

    // About Slide
    {
      type: 'content',
      title: 'About Me',
      content: (
        <div className="space-y-6">
          {aboutData.bio.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      )
    },

    // Expertise Slide
    {
      type: 'content',
      title: 'Areas of Expertise',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.expertise.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-100 dark:bg-primary-900 p-6 rounded-lg"
            >
              <p className="text-2xl font-semibold text-primary-900 dark:text-primary-100">
                {area}
              </p>
            </motion.div>
          ))}
        </div>
      )
    },

    // Education Slide
    {
      type: 'content',
      title: 'Education',
      content: (
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border-l-4 border-primary-600 pl-6"
            >
              <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-2">
                {edu.degree}
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-1">
                {edu.institution}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {edu.year}
              </p>
            </motion.div>
          ))}
        </div>
      )
    },

    // Experience Slide
    {
      type: 'content',
      title: 'Professional Experience',
      content: (
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-cream-100 dark:bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-2">
                {exp.position}
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
                {exp.institution}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {exp.duration}
              </p>
            </motion.div>
          ))}
        </div>
      )
    },

    // Books Slide
    {
      type: 'content',
      title: 'Books',
      content: (
        <div className="space-y-6">
          {booksData.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary-50 dark:bg-primary-900/30 p-8 rounded-lg"
            >
              <h3 className="text-3xl font-serif font-bold text-primary-900 dark:text-primary-100 mb-3">
                {book.title}
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
                {book.publisher} • {book.year}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {book.description}
              </p>
            </motion.div>
          ))}
        </div>
      )
    },

    // Publications Slide
    {
      type: 'content',
      title: 'Selected Publications',
      content: (
        <div className="space-y-5 max-h-[600px] overflow-y-auto pr-4">
          {publicationsData.slice(0, 5).map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-300 dark:border-gray-700 pb-4"
            >
              <h4 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                {pub.title}
              </h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <em>{pub.journal}</em> • {pub.year}
              </p>
            </motion.div>
          ))}
        </div>
      )
    },

    // Freelance Writing Slide
    {
      type: 'content',
      title: 'Freelance Writing',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freelanceWritingData.slice(0, 6).map((writing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-accent-50 dark:bg-accent-900/20 p-5 rounded-lg"
            >
              <h4 className="text-lg font-bold text-primary-900 dark:text-primary-100 mb-2">
                {writing.title}
              </h4>
              <p className="text-base text-gray-700 dark:text-gray-300">
                <em>{writing.publication}</em>
              </p>
            </motion.div>
          ))}
        </div>
      )
    },

    // Awards Slide
    {
      type: 'content',
      title: 'Awards & Recognition',
      content: (
        <div className="space-y-6">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500"
            >
              <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-2">
                {award.title}
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
                {award.organization}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {award.year}
              </p>
            </motion.div>
          ))}
        </div>
      )
    },

    // Contact Slide
    {
      type: 'content',
      title: 'Contact',
      content: (
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
              Let's Connect
            </h3>
            <div className="space-y-4 text-xl text-gray-700 dark:text-gray-300">
              <p>
                <strong>Email:</strong> {aboutData.email}
              </p>
              <p>
                <strong>Phone:</strong> {aboutData.phone}
              </p>
              <p>
                <strong>Office:</strong> {aboutData.office}
              </p>
            </div>
          </motion.div>
        </div>
      )
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-gray-900 flex flex-col">
      {/* Slide Container */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl h-[700px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {slides[currentSlide].type === 'content' && (
                <h2 className="font-serif text-5xl font-bold text-primary-900 dark:text-primary-100 mb-8 border-b-4 border-primary-600 pb-4">
                  {slides[currentSlide].title}
                </h2>
              )}
              <div className={slides[currentSlide].type === 'title' ? 'h-full' : ''}>
                {slides[currentSlide].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="pb-8 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-lg transition-colors disabled:opacity-50"
            disabled={currentSlide === 0}
          >
            <FaChevronLeft /> Previous
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-primary-800 dark:bg-primary-400 w-8'
                    : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-lg transition-colors disabled:opacity-50"
            disabled={currentSlide === slides.length - 1}
          >
            Next <FaChevronRight />
          </button>
        </div>

        <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
          Use arrow keys or spacebar to navigate • Slide {currentSlide + 1} of {slides.length}
        </p>
      </div>
    </div>
  )
}

export default Presentation
