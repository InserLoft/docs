import { Link } from 'react-router-dom'
import { SiteHeader } from '@/components/Header'

export function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteHeader />
      <div className="dot-grid mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-faint)]">Error 404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">Esta página no existe</h1>
        <p className="mt-3 text-[var(--text-muted)]">
          Puede que se haya movido o que la URL esté mal escrita.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-md bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
