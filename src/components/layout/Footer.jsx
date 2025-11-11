import React from 'react'
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { aboutData } from '../../data/about'

const Footer = () => {
  return (
    <footer className="bg-primary-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              {aboutData.name}
            </h3>
            <p className="text-gray-300 text-sm">
              {aboutData.title}
            </p>
            <p className="text-gray-300 text-sm">
              {aboutData.institution}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#publications" className="text-gray-300 hover:text-white transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#books" className="text-gray-300 hover:text-white transition-colors">
                  Books
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${aboutData.email}`}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <FaEnvelope className="mr-2" />
                  {aboutData.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${aboutData.phone}`}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <FaPhone className="mr-2" />
                  {aboutData.phone}
                </a>
              </li>
              <li>
                <a
                  href={aboutData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {aboutData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
