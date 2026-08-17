import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { skillGroups } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-nav py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="ทักษะและความสามารถ"
          description="รวมทักษะทางเทคนิคและ Soft Skills ที่ฉันมี แบ่งตามหมวดหมู่"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <Card key={group.category} hover={false} className="bg-white">
              <h3 className="font-display font-bold text-ink text-sm uppercase tracking-wide mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
