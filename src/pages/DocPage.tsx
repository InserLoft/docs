import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getDoc, extractToc } from '@/lib/content'
import { findAdjacent, sectionForSlug } from '@/lib/nav'
import { DocsLayout } from '@/components/DocsLayout'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { NotFound } from './NotFound'

export function DocPage() {
  const params = useParams()
  const slug = params['*'] ?? ''
  const doc = getDoc(slug)

  useEffect(() => {
    if (doc) document.title = `${doc.title} — Inserloft Docs`
  }, [doc])

  if (!doc) return <NotFound />

  const { prev, next } = findAdjacent(doc.slug)
  const toc = extractToc(doc.body)
  const section = sectionForSlug(doc.slug)

  return (
    <DocsLayout>
      <div className="flex gap-10 px-6 py-12">
        <div className="mx-auto min-w-0 max-w-3xl flex-1">
          <p className="mb-2 text-sm font-medium text-accent">{section?.title ?? doc.section}</p>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight">{doc.title}</h1>
          {doc.description && <p className="mb-10 text-base text-[var(--text-muted)]">{doc.description}</p>}

          <MarkdownContent markdown={doc.body} />

          <div className="mt-16 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-6 text-sm">
            {prev ? (
              <Link
                to={`/docs/${prev.slug}`}
                className="flex items-center gap-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to={`/docs/${next.slug}`}
                className="flex items-center gap-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                {next.title} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>

        <div className="hidden py-1 xl:block">
          <TableOfContents toc={toc} />
        </div>
      </div>
    </DocsLayout>
  )
}
