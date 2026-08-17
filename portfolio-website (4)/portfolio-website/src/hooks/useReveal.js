import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a boolean that becomes true once the element
 * scrolls into the viewport — used to trigger a subtle fade-up entrance.
 * Respects prefers-reduced-motion by revealing immediately.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
