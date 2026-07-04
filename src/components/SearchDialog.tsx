import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, CornerDownLeft, X } from 'lucide-react'
import { allDocs } from '@/lib/content'
import { sectionForSlug } from '@/lib/nav'

export function useSearchShortcut(open: () => void) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'
      const isSlash = e.key === '/' && document.activeElement?.tagName !== 'INPUT'
      if (isCmdK || isSlash) {
        e.preventDefault()
        open()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
}

export function SearchDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    const pool = q
      ? allDocs.filter(
          (d) =>
            d.title.toLowerCase().includes(q) ||
            d.description?.toLowerCase().includes(q) ||
            d.body.toLowerCase().includes(q) ||
            d.slug.toLowerCase().includes(q),
        )
      : allDocs
    return pool.slice(0, 8)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [isOpen])

  useEffect(() => setActiveIndex(0), [query])

  if (!isOpen) return null

  function go(slug: string) {
    navigate(`/docs/${slug}`)
    onClose()
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[activeIndex]) {
      go(results[activeIndex].slug)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-[var(--text-faint)]" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Buscar en la documentación..."
            className="w-full bg-transparent text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-faint)]"
          />
          <button onClick={onClose} className="text-[var(--text-faint)] hover:text-[var(--text)]" aria-label="Cerrar búsqueda">
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-[var(--text-faint)]">Sin resultados para "{query}"</li>
          )}
          {results.map((doc, i) => {
            const section = sectionForSlug(doc.slug)
            return (
              <li key={doc.slug}>
                <button
                  onClick={() => go(doc.slug)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex w-full flex-col items-start gap-0.5 rounded-lg px-3 py-2 text-left transition-colors ${
                    i === activeIndex ? 'bg-[var(--bg-hover)]' : ''
                  }`}
                >
                  <span className="text-xs text-[var(--text-faint)]">{section?.title ?? doc.section}</span>
                  <span className="text-sm font-medium text-[var(--text)]">{doc.title}</span>
                </button>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center justify-end gap-1 border-t border-[var(--border)] px-4 py-2 text-xs text-[var(--text-faint)]">
          <CornerDownLeft className="h-3 w-3" /> para abrir
        </div>
      </div>
    </div>
  )
}
