import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaPaperPlane } from 'react-icons/fa'
import { aboutData } from '../../data/about'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:${aboutData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-container bg-cream-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-100 mb-8 academic-border pt-4">
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
              Get in Touch
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Feel free to reach out for academic collaboration, speaking engagements,
              or general inquiries. I'm always interested in discussing research and writing projects.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href={`mailto:${aboutData.email}`}
                className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="text-primary-800 dark:text-primary-300 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</h4>
                  <p className="text-primary-700 dark:text-primary-400 group-hover:underline">
                    {aboutData.email}
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${aboutData.phone}`}
                className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                  <FaPhone className="text-primary-800 dark:text-primary-300 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Phone</h4>
                  <p className="text-primary-700 dark:text-primary-400 group-hover:underline">
                    {aboutData.phone}
                  </p>
                </div>
              </motion.a>

              {/* Office Location */}
              <motion.div
                className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-primary-800 dark:text-primary-300 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Office</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {aboutData.office}
                  </p>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.a
                href={aboutData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                  <FaGithub className="text-primary-800 dark:text-primary-300 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">GitHub</h4>
                  <p className="text-primary-700 dark:text-primary-400 group-hover:underline">
                    View Profile
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl flex items-center justify-center ${
                  submitted
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-primary-800 hover:bg-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 text-white'
                }`}
              >
                <FaPaperPlane className="mr-2" />
                {submitted ? 'Opening Email Client...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
