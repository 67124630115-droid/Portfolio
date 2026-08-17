import { Award } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { awards, additionalInfo } from '../../data/awards'

export default function Awards() {
  return (
    <section id="awards" className="scroll-mt-nav py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Awards & Certificates"
          title="รางวัลและใบประกาศนียบัตร"
        />

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {awards.map((award, index) => (
            <Card key={index} className="flex gap-4">
              <div
                className="shrink-0 w-11 h-11 rounded-xl bg-accent-50 border border-accent-100 flex items-center justify-center"
                aria-hidden="true"
              >
                <Award size={20} className="text-accent-600" />
              </div>
              <div>
                <h3 className="font-display font-bold text-ink text-sm leading-snug">
                  {award.title}
                </h3>
                <p className="text-xs text-body mt-1">
                  {award.issuer} · {award.year}
                </p>
                <p className="text-sm text-body mt-2 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card hover={false} className="bg-white">
          <h3 className="font-display font-bold text-ink text-sm uppercase tracking-wide mb-4">
            ความสามารถพิเศษ &amp; ภาษา
          </h3>
          <div className="flex flex-wrap gap-2">
            {[...additionalInfo.specialSkills, ...additionalInfo.languages].map(
              (item) => (
                <Badge key={item} tone="neutral">
                  {item}
                </Badge>
              )
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
