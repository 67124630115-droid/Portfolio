import { Bot, AlertTriangle } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import { aiOverview, aiSteps, aiIssues, samplePrompt } from '../../data/aiProcess'

export default function AIDevelopment() {
  return (
    <section
      id="ai-development"
      className="scroll-mt-nav py-20 md:py-28 bg-white"
    >
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Transparency"
          title="AI-Assisted Development"
          description={aiOverview.usedFor}
        />

        <div className="flex items-center gap-2 mb-10 -mt-4">
          <Bot size={16} className="text-accent-600" aria-hidden="true" />
          <span className="text-sm text-body">
            AI Tool ที่ใช้: <span className="font-semibold text-ink">{aiOverview.tool}</span>
          </span>
        </div>

        {/* Signature element: horizontal process rail — this is a genuine
            5-step sequence (Think → Prompt → Result → Refine → Test),
            so numbered markers carry real information here. */}
        <div className="relative">
          <div
            className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-line"
            aria-hidden="true"
          />
          <ol className="grid md:grid-cols-5 gap-8 md:gap-4">
            {aiSteps.map((item) => (
              <li key={item.step} className="relative flex flex-col items-start">
                <div className="relative z-10 flex items-center gap-3 md:flex-col md:items-start md:gap-0">
                  <span className="font-mono text-xs font-medium text-white bg-ink w-6 h-6 md:w-12 md:h-12 rounded-full md:rounded-2xl flex items-center justify-center md:text-lg shrink-0">
                    {item.step}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-600 md:mt-3">
                    {item.label}
                  </span>
                </div>
                <h3 className="font-display font-bold text-ink text-sm mt-2 md:mt-2">
                  {item.title}
                </h3>
                <p className="text-xs text-body mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Sample prompt */}
        <div className="mt-14">
          <h3 className="font-display font-bold text-ink text-sm uppercase tracking-wide mb-3">
            ตัวอย่าง Prompt ที่ใช้
          </h3>
          <pre className="font-mono text-xs leading-relaxed text-slate-200 bg-ink rounded-2xl p-5 overflow-x-auto whitespace-pre-wrap">
{samplePrompt}
          </pre>
        </div>

        {/* Issues encountered */}
        <div className="mt-10">
          <h3 className="font-display font-bold text-ink text-sm uppercase tracking-wide mb-4">
            ปัญหาที่พบและแนวทางแก้ไข
          </h3>
          <div className="space-y-3">
            {aiIssues.map((issue, index) => (
              <Card key={index} hover={false} className="flex gap-3">
                <AlertTriangle
                  size={18}
                  className="text-accent-600 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="text-sm">
                  <p className="text-ink">
                    <span className="font-semibold">ปัญหา:</span> {issue.problem}
                  </p>
                  <p className="text-body mt-1">
                    <span className="font-semibold text-ink">วิธีแก้ไข:</span>{' '}
                    {issue.solution}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
