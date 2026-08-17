import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Awards from './components/sections/Awards'
import AIDevelopment from './components/sections/AIDevelopment'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        ข้ามไปเนื้อหาหลัก
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Awards />
        <AIDevelopment />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
