import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import { LogoMark } from './Icons'
import { SidebarNav } from './Sidebar'
import { SearchDialog, useSearchShortcut } from './SearchDialog'

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useSearchShortcut(() => setSearchOpen(true))

  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-[var(--border)] bg-[var(--bg)]/85 px-4 backdrop-blur sm:px-6">
        <div className="flex items-center gap-3">
          <button
            className="text-[var(--text-muted)] hover:text-[var(--text)] lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--text)]">
            <LogoMark className="h-5 w-5 text-[var(--text)]" />
            Inserloft
            <span className="font-normal text-[var(--text-faint)]">docs</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-raised)] px-3 py-1.5 text-sm text-[var(--text-faint)] transition-colors hover:border-[var(--text-faint)] hover:text-[var(--text)]"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Buscar</span>
            <kbd className="hidden rounded border border-[var(--border)] px-1.5 py-0.5 text-[10px] text-[var(--text-faint)] sm:inline">
              ⌘K
            </kbd>
          </button>
          <nav className="hidden items-center gap-4 text-sm text-[var(--text-muted)] sm:flex">
            <a href="https://inserloft.com" target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">
              inserloft.com
            </a>
            <a href="https://inserloft.dev" target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">
              inserloft.dev
            </a>
          </nav>
        </div>
      </header>

      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 overflow-y-auto border-r border-[var(--border)] bg-[var(--bg)] p-5">
            <div className="mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <LogoMark className="h-5 w-5" />
                Inserloft docs
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Cerrar menú" className="text-[var(--text-faint)]">
                <X className="h-5 w-5" />
              </button>
            </div>
            <SidebarNav onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
