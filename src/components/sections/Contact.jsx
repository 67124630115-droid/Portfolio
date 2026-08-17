import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { profile } from '../../data/profile'

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'โทรศัพท์',
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: profile.github.replace('https://', ''),
    href: profile.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: profile.linkedin.replace('https://', ''),
    href: profile.linkedin,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-nav py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="ติดต่อฉัน"
          description="สนใจร่วมงานหรือมีคำถามเพิ่มเติม ติดต่อได้ผ่านช่องทางด้านล่างนี้"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 bg-white border border-line rounded-2xl p-5 transition-all hover:border-accent-400 hover:shadow-lg hover:shadow-slate-200/60"
            >
              <div
                className="shrink-0 w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center group-hover:bg-accent-600 transition-colors"
                aria-hidden="true"
              >
                <link.icon
                  size={18}
                  className="text-accent-600 group-hover:text-white transition-colors"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-body">{link.label}</p>
                <p className="font-semibold text-ink text-sm truncate">
                  {link.value}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="ml-auto shrink-0 text-body group-hover:text-accent-600 transition-colors"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        {profile.social?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {profile.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-body hover:text-accent-600 underline underline-offset-4 decoration-line"
              >
                {s.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
