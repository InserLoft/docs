import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/Header'
import { NavIcon } from '@/components/Icons'
import { HeroArt } from '@/components/HeroArt'
import { docsNav } from '@/lib/nav'

export function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteHeader />

      <section className="dot-grid relative overflow-hidden px-6 pb-10 pt-20 text-center sm:pt-28">
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-faint)]">
            Documentación de Inserloft
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Construye el futuro de
            <br />
            la infraestructura de IA.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-[var(--text-muted)]">
            Todo lo que necesitas para construir con Inserloft — la plataforma Pixel, los modelos Kyro
            y Atom, Cleo, y las APIs que los conectan.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/docs/getting-started/introduction"
              className="group flex items-center gap-2 rounded-md bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
            >
              Empezar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/docs/apis/authentication"
              className="rounded-md border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[var(--bg-hover)]"
            >
              Referencia de API
            </Link>
          </div>
        </div>

        <div className="relative z-0 mx-auto -mb-10 mt-8 flex justify-center">
          <HeroArt />
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {docsNav.map((section) => (
            <Link
              key={section.title}
              to={`/docs/${section.items[0].slug}`}
              className="group rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-5 transition-colors hover:border-[var(--text-faint)]"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)]">
                <NavIcon name={section.icon} className="h-4.5 w-4.5" />
              </div>
              <h2 className="mb-1.5 text-sm font-semibold text-[var(--text)]">{section.title}</h2>
              <ul className="flex flex-col gap-1">
                {section.items.slice(0, 4).map((item) => (
                  <li key={item.slug} className="text-sm text-[var(--text-muted)]">
                    {item.title}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--text-faint)] transition-colors group-hover:text-accent">
                Explorar <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-[var(--border)] px-6 py-10 text-center text-sm text-[var(--text-faint)]">
        Inserloft — construyendo el futuro de la infraestructura de IA.
      </footer>
    </div>
  )
}
