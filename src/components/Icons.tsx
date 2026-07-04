import {
  Rocket,
  Layers,
  Cpu,
  MessageCircle,
  Terminal,
  GitBranch,
  FlaskConical,
  Code2,
  Building2,
  BookOpen,
  type LucideIcon,
} from 'lucide-react'

const registry: Record<string, LucideIcon> = {
  rocket: Rocket,
  layers: Layers,
  cpu: Cpu,
  'message-circle': MessageCircle,
  terminal: Terminal,
  'git-branch': GitBranch,
  flask: FlaskConical,
  code: Code2,
  building: Building2,
  book: BookOpen,
}

export function NavIcon({ name, className }: { name: string; className?: string }) {
  const Icon = registry[name] ?? BookOpen
  return <Icon className={className} strokeWidth={1.75} />
}

// Hand-drawn geometric wordmark — an isometric hexagon that reads as a
// stylized "I" bar, distinct from generic icon-font logos.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3 L28 9.5 V22.5 L16 29 L4 22.5 V9.5 Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="3.2" className="fill-accent" />
    </svg>
  )
}
