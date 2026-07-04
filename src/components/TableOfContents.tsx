import { useEffect, useState } from 'react'
import type { TocEntry } from '@/lib/content'

export function TableOfContents({ toc }: { toc: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const headings = toc
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-88px 0px -70% 0px' },
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [toc])

  if (toc.length === 0) return null

  return (
    <aside className="sticky top-20 hidden h-fit w-56 shrink-0 xl:block">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">En esta página</p>
      <ul className="flex flex-col gap-1.5 border-l border-[var(--border-soft)] text-sm">
        {toc.map((item) => (
          <li key={item.id} style={{ paddingLeft: item.depth === 3 ? '1.5rem' : '0.9rem' }}>
            <a
              href={`#${item.id}`}
              className={`block transition-colors ${
                activeId === item.id ? 'text-accent' : 'text-[var(--text-faint)] hover:text-[var(--text)]'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
