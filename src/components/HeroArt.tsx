// Abstract isometric node-graph, echoing the hexagon in the wordmark.
// Pure inline SVG — no image assets, scales losslessly, themeable via currentColor.
export function HeroArt() {
  return (
    <svg
      viewBox="0 0 640 360"
      className="hero-art"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(245,245,244,0.55)" />
          <stop offset="100%" stopColor="rgba(245,245,244,0.05)" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="640" height="360" fill="url(#heroGlow)" />

      {/* connecting lattice */}
      <g stroke="url(#heroLine)" strokeWidth="1">
        <path d="M320 40 L440 100 L440 220 L320 280 L200 220 L200 100 Z" />
        <path d="M320 40 L320 280" strokeDasharray="2 6" />
        <path d="M200 100 L440 220" strokeDasharray="2 6" />
        <path d="M440 100 L200 220" strokeDasharray="2 6" />
        <path d="M440 100 L560 160 L560 260 L440 220" />
        <path d="M200 100 L80 160 L80 260 L200 220" />
      </g>

      {/* nodes */}
      {[
        [320, 40, 5],
        [440, 100, 4],
        [440, 220, 4],
        [320, 280, 6],
        [200, 220, 4],
        [200, 100, 4],
        [560, 160, 3.5],
        [560, 260, 3.5],
        [80, 160, 3.5],
        [80, 260, 3.5],
      ].map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          className={i % 3 === 0 ? 'hero-node hero-node--accent' : 'hero-node'}
          style={{ animationDelay: `${i * 220}ms` }}
        />
      ))}

      {/* center hexagon, matches the wordmark */}
      <path
        d="M320 130 L365 155 V205 L320 230 L275 205 V155 Z"
        stroke="rgba(245,245,244,0.9)"
        strokeWidth="1.5"
      />
      <circle cx="320" cy="180" r="7" className="fill-accent" />
    </svg>
  )
}
