export interface DocNavItem {
  title: string
  slug: string
}

export interface DocNavSection {
  title: string
  icon: string
  items: DocNavItem[]
}

// Single source of truth for sidebar ordering + grouping.
// Kept explicit (not derived from the filesystem) so order/grouping stays intentional.
export const docsNav: DocNavSection[] = [
  {
    title: 'Getting Started',
    icon: 'rocket',
    items: [
      { title: 'Introduction', slug: 'getting-started/introduction' },
      { title: 'What is Inserloft?', slug: 'getting-started/what-is-inserloft' },
      { title: 'Philosophy', slug: 'getting-started/philosophy' },
      { title: 'Roadmap', slug: 'getting-started/roadmap' },
    ],
  },
  {
    title: 'Platform',
    icon: 'layers',
    items: [
      { title: 'Pixel', slug: 'platform/pixel' },
      { title: 'Projects', slug: 'platform/projects' },
      { title: 'Organizations', slug: 'platform/organizations' },
      { title: 'Teams', slug: 'platform/teams' },
      { title: 'Model Registry', slug: 'platform/model-registry' },
      { title: 'Deployments', slug: 'platform/deployments' },
    ],
  },
  {
    title: 'Models',
    icon: 'cpu',
    items: [
      { title: 'Overview', slug: 'models/overview' },
      { title: 'Kyro', slug: 'models/kyro' },
      { title: 'Verty', slug: 'models/verty' },
      { title: 'Baby LLMs', slug: 'models/baby-llms' },
      { title: 'Model Cards', slug: 'models/model-cards' },
      { title: 'Benchmarks', slug: 'models/benchmarks' },
    ],
  },
  {
    title: 'Cleo',
    icon: 'message-circle',
    items: [
      { title: 'Introduction', slug: 'cleo/introduction' },
      { title: 'Chat', slug: 'cleo/chat' },
      { title: 'Memory', slug: 'cleo/memory' },
      { title: 'Tools', slug: 'cleo/tools' },
      { title: 'Skills', slug: 'cleo/skills' },
    ],
  },
  {
    title: 'APIs',
    icon: 'terminal',
    items: [
      { title: 'Authentication', slug: 'apis/authentication' },
      { title: 'Responses API', slug: 'apis/responses-api' },
      { title: 'Chat API', slug: 'apis/chat-api' },
      { title: 'Models API', slug: 'apis/models-api' },
      { title: 'Embeddings API', slug: 'apis/embeddings-api' },
      { title: 'Files API', slug: 'apis/files-api' },
      { title: 'Rate Limits', slug: 'apis/rate-limits' },
    ],
  },
  {
    title: 'OpenGit',
    icon: 'git-branch',
    items: [
      { title: 'Introduction', slug: 'opengit/introduction' },
      { title: 'Open Source', slug: 'opengit/open-source' },
      { title: 'Repositories', slug: 'opengit/repositories' },
      { title: 'Contributing', slug: 'opengit/contributing' },
    ],
  },
  {
    title: 'Research',
    icon: 'flask',
    items: [
      { title: 'Publications', slug: 'research/publications' },
      { title: 'Research Areas', slug: 'research/research-areas' },
      { title: 'Frontier Models', slug: 'research/frontier-models' },
      { title: 'Alignment', slug: 'research/alignment' },
      { title: 'Agents', slug: 'research/agents' },
    ],
  },
  {
    title: 'Developer',
    icon: 'code',
    items: [
      { title: 'SDKs', slug: 'developer/sdks' },
      { title: 'CLI', slug: 'developer/cli' },
      { title: 'Examples', slug: 'developer/examples' },
      { title: 'Tutorials', slug: 'developer/tutorials' },
      { title: 'Changelog', slug: 'developer/changelog' },
    ],
  },
  {
    title: 'Company',
    icon: 'building',
    items: [
      { title: 'About', slug: 'company/about' },
      { title: 'Careers', slug: 'company/careers' },
      { title: 'Security', slug: 'company/security' },
      { title: 'Privacy', slug: 'company/privacy' },
      { title: 'Terms', slug: 'company/terms' },
    ],
  },
  {
    title: 'Reference',
    icon: 'book',
    items: [
      { title: 'API Reference', slug: 'reference/api-reference' },
      { title: 'Error Codes', slug: 'reference/error-codes' },
      { title: 'Glossary', slug: 'reference/glossary' },
      { title: 'FAQ', slug: 'reference/faq' },
    ],
  },
]

export const allNavItems: DocNavItem[] = docsNav.flatMap((section) => section.items)

export function findAdjacent(slug: string) {
  const index = allNavItems.findIndex((item) => item.slug === slug)
  return {
    prev: index > 0 ? allNavItems[index - 1] : null,
    next: index >= 0 && index < allNavItems.length - 1 ? allNavItems[index + 1] : null,
  }
}

export function sectionForSlug(slug: string): DocNavSection | undefined {
  return docsNav.find((section) => section.items.some((item) => item.slug === slug))
}
