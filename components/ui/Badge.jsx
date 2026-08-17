export default function Badge({ children, tone = 'default' }) {
  const tones = {
    default: 'bg-accent-50 text-accent-700 border-accent-100',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
