export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white border border-line rounded-2xl p-6 ${
        hover ? 'transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
