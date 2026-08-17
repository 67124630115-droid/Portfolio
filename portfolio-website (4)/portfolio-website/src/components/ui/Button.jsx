export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200'

  const variants = {
    primary: 'bg-ink text-white hover:bg-accent-600 active:scale-[0.98]',
    secondary:
      'bg-white text-ink border border-line hover:border-accent-400 hover:text-accent-600 active:scale-[0.98]',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto')
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
        {Icon && <Icon size={16} aria-hidden="true" />}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
      {Icon && <Icon size={16} aria-hidden="true" />}
    </button>
  )
}
