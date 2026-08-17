import { GraduationCap } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { education } from '../../data/education'

export default function Education() {
  return (
    <section id="education" className="scroll-mt-nav py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading eyebrow="Education" title="ประวัติการศึกษา" />

        <ol className="relative border-l-2 border-line ml-3">
          {education.map((edu, index) => (
            <li key={index} className="mb-10 ml-8 last:mb-0">
              <span
                className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-accent-50 border-2 border-accent-600 rounded-full"
                aria-hidden="true"
              >
                <GraduationCap size={12} className="text-accent-600" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display font-bold text-ink text-lg">
                  {edu.institution}
                </h3>
                <span className="font-mono text-xs text-body bg-slate-100 px-2.5 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>

              <p className="text-body text-sm">
                {edu.level}
                {edu.faculty ? ` · ${edu.faculty}` : ''}
                {edu.major ? ` · ${edu.major}` : ''}
              </p>

              {edu.gpa && (
                <p className="text-sm text-body mt-1">
                  GPA: <span className="font-medium text-ink">{edu.gpa}</span>
                </p>
              )}

              {edu.highlights?.length > 0 && (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {edu.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-xs bg-slate-50 border border-line text-body px-2.5 py-1 rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
