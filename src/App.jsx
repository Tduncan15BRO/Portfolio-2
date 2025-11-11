import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Books from './components/sections/Books'
import Publications from './components/sections/Publications'
import FreelanceWriting from './components/sections/FreelanceWriting'
import Awards from './components/sections/Awards'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Books />
        <Publications />
        <FreelanceWriting />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
