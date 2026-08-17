import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { profile } from '../../data/profile'

const NAV_ITEMS = [
  { id: 'about', label: 'เกี่ยวกับฉัน' },
  { id: 'education', label: 'การศึกษา' },
  { id: 'skills', label: 'ทักษะ' },
  { id: 'experience', label: 'ผลงาน' },
  { id: 'awards', label: 'รางวัล' },
  { id: 'ai-development', label: 'AI Development' },
  { id: 'contact', label: 'ติดต่อ' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id))

  function handleNavClick() {
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-line">
      <nav
        className="max-w-content mx-auto flex items-center justify-between px-6 h-16"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="font-display font-bold text-ink text-lg tracking-tight"
        >
          {profile.nickname}
          <span className="text-accent-600">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeId === item.id
                    ? 'text-accent-600 bg-accent-50'
                    : 'text-body hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-ink"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="md:hidden flex flex-col gap-1 px-6 pb-4 bg-white border-t border-line"
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavClick}
                className={`block px-3 py-3 rounded-lg text-sm font-medium ${
                  activeId === item.id
                    ? 'text-accent-600 bg-accent-50'
                    : 'text-body'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
