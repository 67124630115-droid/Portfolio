import { Target, Sparkles, Compass } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { professionalProfile } from '../../data/profile'

export default function About() {
  return (
    <section id="about" className="scroll-mt-nav py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="About Me"
          title="เกี่ยวกับฉันและเป้าหมายในสายอาชีพ"
          description={professionalProfile.summary}
        />

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <Target className="text-accent-600" size={24} aria-hidden="true" />
            <h3 className="font-display font-bold text-ink mt-4 mb-2">
              Career Objective
            </h3>
            <p className="text-sm text-body leading-relaxed">
              {professionalProfile.objective}
            </p>
          </Card>

          <Card>
            <Compass className="text-accent-600" size={24} aria-hidden="true" />
            <h3 className="font-display font-bold text-ink mt-4 mb-2">
              ความสนใจด้านอาชีพ
            </h3>
            <ul className="text-sm text-body space-y-1.5 leading-relaxed">
              {professionalProfile.interests.map((interest) => (
                <li key={interest} className="flex gap-2">
                  <span className="text-accent-400" aria-hidden="true">
                    ▸
                  </span>
                  {interest}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <Sparkles className="text-accent-600" size={24} aria-hidden="true" />
            <h3 className="font-display font-bold text-ink mt-4 mb-2">
              จุดเด่นของฉัน
            </h3>
            <ul className="text-sm text-body space-y-1.5 leading-relaxed">
              {professionalProfile.strengths.map((strength) => (
                <li key={strength} className="flex gap-2">
                  <span className="text-accent-400" aria-hidden="true">
                    ▸
                  </span>
                  {strength}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <p className="mt-8 text-body text-sm max-w-2xl leading-relaxed border-l-2 border-accent-400 pl-4">
          {professionalProfile.goals}
        </p>
      </div>
    </section>
  )
}
