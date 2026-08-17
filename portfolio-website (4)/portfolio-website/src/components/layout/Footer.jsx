import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-white">
      <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-body text-center md:text-left">
          © {year} {profile.fullName}. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub ของฉัน"
            className="text-body hover:text-accent-600 transition-colors"
          >
            <Github size={20} aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn ของฉัน"
            className="text-body hover:text-accent-600 transition-colors"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="ส่งอีเมลถึงฉัน"
            className="text-body hover:text-accent-600 transition-colors"
          >
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
