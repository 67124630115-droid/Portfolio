import { ArrowRight, Mail } from 'lucide-react'
import Button from '../ui/Button'
import { profile } from '../../data/profile'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Ambient background accent */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-6 relative">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-center">
          {/* Text column */}
          <div className="animate-fadeUp">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent-600">
              Portfolio
            </span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink leading-[1.1] tracking-tight">
              สวัสดี ฉันคือ{' '}
              <span className="text-accent-600">{profile.nickname}</span>
            </h1>
            <p className="mt-2 text-lg md:text-xl text-body font-medium">
              {profile.fullName} · {profile.role}
            </p>
            <p className="mt-5 text-body max-w-xl leading-relaxed">
              {profile.shortIntro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#experience" icon={ArrowRight}>
                View My Projects
              </Button>
              <Button href="#contact" variant="secondary" icon={Mail}>
                Contact Me
              </Button>
            </div>
          </div>

          {/* Photo column */}
          <div className="relative animate-fadeUp [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-line shadow-xl shadow-slate-200/50">
              <img
                src={profile.photo}
                alt={`รูปโปรไฟล์ของ ${profile.fullName}`}
                className="w-full h-full object-cover"
                width="480"
                height="600"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-white border border-line rounded-2xl px-5 py-3 shadow-lg"
              aria-hidden="true"
            >
              <p className="font-mono text-xs text-body">Studying at</p>
              <p className="font-display font-bold text-ink text-sm">
                {profile.university}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
