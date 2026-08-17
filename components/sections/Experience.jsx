import { ExternalLink, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-nav py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Experience"
          title="ผลงาน โปรเจกต์ และกิจกรรม"
          description="ประสบการณ์และโปรเจกต์ที่ฉันได้ลงมือทำจริง พร้อมสิ่งที่ได้เรียนรู้จากแต่ละงาน"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((item, index) => (
            <Card key={index} className="flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="font-display font-bold text-ink text-lg">
                  {item.title}
                </h3>
                <span className="shrink-0 font-mono text-[11px] text-accent-700 bg-accent-50 border border-accent-100 px-2 py-1 rounded-full">
                  {item.type}
                </span>
              </div>

              <p className="font-mono text-xs text-body mb-3">{item.period}</p>

              <p className="text-sm text-body mb-1">
                <span className="font-semibold text-ink">บทบาท:</span> {item.role}
              </p>
              <p className="text-sm text-body leading-relaxed mb-3">
                {item.description}
              </p>

              {item.responsibilities?.length > 0 && (
                <ul className="space-y-1.5 mb-3">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2 text-sm text-body">
                      <CheckCircle2
                        size={16}
                        className="text-accent-600 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              )}

              {item.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} tone="neutral">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-sm text-body mb-1">
                <span className="font-semibold text-ink">สิ่งที่ได้เรียนรู้:</span>{' '}
                {item.learnings}
              </p>
              <p className="text-sm text-body mb-4">
                <span className="font-semibold text-ink">ผลลัพธ์:</span>{' '}
                {item.result}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700"
                >
                  ดูโปรเจกต์
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
