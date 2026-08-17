import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view and returns its id.
 * Used to highlight the active link in the Navbar.
 */
export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + offset

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPosition) {
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
