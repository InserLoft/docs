import { useEffect, useMemo, useRef } from 'react'
import { Marked } from 'marked'
// Core build + only the languages this doc set actually uses — the full
// highlight.js bundle ships 190+ grammars and bloats the app ~1MB for nothing.
import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import json from 'highlight.js/lib/languages/json'
import yaml from 'highlight.js/lib/languages/yaml'
import xml from 'highlight.js/lib/languages/xml'
import { slugify } from '@/lib/content'

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('py', python)
hljs.registerLanguage('json', json)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('yml', yaml)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)

const marked = new Marked({
  renderer: {
    heading({ tokens, depth }) {
      const text = tokens.map((t: any) => t.raw ?? t.text ?? '').join('')
      const id = slugify(text)
      return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>\n`
    },
    code({ text, lang }) {
      const language = hljs.getLanguage(lang ?? '') ? lang : undefined
      const highlighted = language
        ? hljs.highlight(text, { language: language! }).value
        : hljs.highlightAuto(text).value
      return `<pre><button class="code-copy-btn" type="button" data-copy>Copy</button><code class="hljs${
        language ? ` language-${language}` : ''
      }">${highlighted}</code></pre>\n`
    },
  },
})

export function MarkdownContent({ markdown }: { markdown: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const html = useMemo(() => marked.parse(markdown, { async: false }) as string, [markdown])

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const buttons = root.querySelectorAll<HTMLButtonElement>('[data-copy]')
    const handlers: Array<() => void> = []
    buttons.forEach((btn) => {
      const onClick = () => {
        const code = btn.nextElementSibling?.textContent ?? ''
        navigator.clipboard.writeText(code).then(() => {
          btn.textContent = 'Copied'
          setTimeout(() => (btn.textContent = 'Copy'), 1500)
        })
      }
      btn.addEventListener('click', onClick)
      handlers.push(() => btn.removeEventListener('click', onClick))
    })
    return () => handlers.forEach((off) => off())
  }, [html])

  return <div ref={ref} className="doc-content" dangerouslySetInnerHTML={{ __html: html }} />
}
