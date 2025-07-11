import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import LogoLoader from './components/Layout/LogoLoader'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'



function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  return (
    <Router>
      <div className='min-h-screen bg-white relative'>
        {/* Logo Loading Animation */}
        {isLoading && <LogoLoader onLoadComplete={handleLoadComplete} />}

        {/* Main Application Content */}
        <div
          className={`transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Header />
                  <main>
                    <Home />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path='/about'
              element={
                <>
                  <Header />
                  <main>
                    <About />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path='/services'
              element={
                <>
                  <Header />
                  <main>
                    <Services />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path='/resources'
              element={
                <>
                  <Header />
                  <main>
                    <Resources />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path='/blog'
              element={
                <>
                  <Header />
                  <main>
                    <Blog />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path='/contact'
              element={
                <>
                  <Header />
                  <main>
                    <Contact />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
