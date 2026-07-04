import type { ReactNode } from 'react'
import { SiteHeader } from './Header'
import { Sidebar } from './Sidebar'

export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-7xl">
        <Sidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  )
}
