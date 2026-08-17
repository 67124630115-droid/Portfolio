export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col ${alignment} mb-10 md:mb-14`}>
      {eyebrow && (
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-body max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
