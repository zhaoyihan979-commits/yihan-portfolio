import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import CraneMachine from '../components/CraneMachine.jsx'
import Projects from '../components/Projects.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

const RETURN_KEY = 'yihan-return'

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Home() {
  const location = useLocation()

  useLayoutEffect(() => {
    const target = location.state?.scrollTo
    const saved = sessionStorage.getItem(RETURN_KEY)

    if (target) {
      requestAnimationFrame(() => setTimeout(() => scrollToId(target), 80))
    } else if (saved) {
      sessionStorage.removeItem(RETURN_KEY)
      requestAnimationFrame(() => setTimeout(() => scrollToId(saved), 80))
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.state])

  return (
    <>
      <Nav />
      <main>
        <Hero onCta={() => scrollToId('works')} />
        <CraneMachine />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export { RETURN_KEY }
