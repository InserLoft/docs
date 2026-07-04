import { NavLink } from 'react-router-dom'
import { docsNav } from '@/lib/nav'
import { NavIcon } from './Icons'

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-6">
      {docsNav.map((section) => (
        <div key={section.title}>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            <NavIcon name={section.icon} className="h-3.5 w-3.5" />
            {section.title}
          </p>
          <ul className="flex flex-col gap-0.5 border-l border-[var(--border-soft)] pl-3">
            {section.items.map((item) => (
              <li key={item.slug}>
                <NavLink
                  to={`/docs/${item.slug}`}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `block rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-[var(--bg-hover)] font-medium text-[var(--text)]'
                        : 'text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--text)]'
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export function Sidebar() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto px-4 py-8 lg:block">
      <SidebarNav />
    </aside>
  )
}
