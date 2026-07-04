export interface DocFrontmatter {
  title: string
  description: string
  section: string
  order: number
}

export interface Doc extends DocFrontmatter {
  slug: string
  body: string
}

// Vite inlines every doc at build time — fully static, no server/runtime fetch needed.
const rawFiles = import.meta.glob('/content/docs/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string): { data: DocFrontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) {
    return { data: { title: 'Untitled', description: '', section: '', order: 0 }, body: raw }
  }
  const [, fm, body] = match
  const data: Record<string, string | number> = {}
  fm.split('\n').forEach((line) => {
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    let value: string | number = line.slice(idx + 1).trim()
    value = value.replace(/^["']|["']$/g, '')
    if (key === 'order') value = Number(value)
    data[key] = value
  })
  return { data: data as unknown as DocFrontmatter, body: body.trim() }
}

export const allDocs: Doc[] = Object.entries(rawFiles).map(([path, raw]) => {
  const slug = path.replace('/content/docs/', '').replace(/\.md$/, '')
  const { data, body } = parseFrontmatter(raw)
  return { slug, body, ...data }
})

export function getDoc(slug: string): Doc | undefined {
  return allDocs.find((d) => d.slug === slug)
}

export interface TocEntry {
  depth: 2 | 3
  text: string
  id: string
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

export function extractToc(markdown: string): TocEntry[] {
  const lines = markdown.split('\n')
  const toc: TocEntry[] = []
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.*)/)
    const h3 = line.match(/^###\s+(.*)/)
    if (h2) toc.push({ depth: 2, text: h2[1].trim(), id: slugify(h2[1]) })
    else if (h3) toc.push({ depth: 3, text: h3[1].trim(), id: slugify(h3[1]) })
  }
  return toc
}
