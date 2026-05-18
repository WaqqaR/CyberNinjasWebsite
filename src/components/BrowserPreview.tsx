/**
 * Screen 3 of the agentic workflow: a browser at localhost:3000 rendering
 * the cyber-ninja site the two terminals just built. Image-hero layout.
 *
 *  - `art`  : the Midjourney ninja artwork (drop in /public, pass the path).
 *             Until then a CSS placeholder shows the exact composition.
 *  - `logo` : the OFFICIAL Claude logo SVG. Save Anthropic's asset to
 *             /public/claude-logo.svg and pass "/claude-logo.svg". Until
 *             then a clearly-marked placeholder spark renders in its place.
 *
 * CSS-only animation (boot + glitch) — no client JS, fully SSR.
 */

function ClaudeMarkPlaceholder() {
  // Stand-in only — replace by passing the official logo asset path.
  const rays = Array.from({ length: 12 });
  return (
    <svg viewBox="0 0 100 100" className="cn-mini-logo-svg" role="img" aria-label="Claude">
      {rays.map((_, i) => (
        <rect
          key={i}
          x="48.5"
          y="6"
          width="3"
          height="34"
          rx="1.5"
          fill="#e98c6a"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
    </svg>
  );
}

export function BrowserPreview({
  url = "localhost:3000",
  art,
  logo,
}: {
  url?: string;
  art?: string;
  logo?: string;
}) {
  return (
    <div className="cn-browser" aria-hidden="true">
      <div className="cn-browser-bar">
        <span className="cn-terminal-dot" style={{ background: "#ff5f57" }} />
        <span className="cn-terminal-dot" style={{ background: "#febc2e" }} />
        <span className="cn-terminal-dot" style={{ background: "#28c840" }} />
        <div className="cn-url">
          <span className="cn-url-dot" />
          http://{url}
        </div>
      </div>

      <div className="cn-browser-body">
        {/* Boot overlay — plays once, then reveals the site */}
        <div className="cn-boot">
          <div>▲ starting dev server…</div>
          <div className="cn-boot-bar" />
          <div style={{ color: "#6f8a86" }}>ready on http://{url}</div>
        </div>

        {/* The rendered cyber-ninja site */}
        <div className="cn-mini">
          <div className="cn-mini-grid" />

          {/* Hero artwork (right) — ninja with negative space on the left */}
          <div className="cn-mini-art">
            {art ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={art} alt="" className="cn-mini-art-img" />
            ) : (
              <div className="cn-mini-art-ph">
                <svg viewBox="0 0 200 240" className="cn-mini-ninja" aria-hidden="true">
                  {/* low-detail ninja silhouette: hood, shoulders, raised arm */}
                  <path d="M100 36c-26 0-44 16-44 40 0 10 4 18 4 18l-10 10 4 70h92l4-70-10-10s4-8 4-18c0-24-18-40-44-40z" />
                  <rect x="62" y="92" width="76" height="14" rx="7" fill="#071414" />
                  <path d="M138 110l34-44 14 10-30 52z" />
                  <circle cx="178" cy="60" r="16" className="cn-mini-ninja-orb" />
                </svg>
                <span className="cn-mini-ph-tag">midjourney art → /cyber-ninja-claude.jpg</span>
              </div>
            )}
            <div className="cn-mini-art-fade" />
          </div>

          {/* Claude logo composited where the ninja's raised hand/orb sits.
              Nudge top/right in CSS once the real art lands. */}
          <div className="cn-mini-logo">
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo} alt="Claude" className="cn-mini-logo-svg" />
            ) : (
              <ClaudeMarkPlaceholder />
            )}
          </div>

          <nav className="cn-mini-nav">
            <div className="cn-mini-brand">
              <span>◈</span> CYBER&nbsp;NINJA
            </div>
            <div className="cn-mini-navlinks">
              <span>System</span>
              <span>Protocol</span>
              <span>Access</span>
            </div>
          </nav>

          <div className="cn-mini-hero">
            <div className="cn-mini-eyebrow">Autonomous · Encrypted</div>
            <div className="cn-mini-title" data-text="CYBER NINJA">
              CYBER NINJA
            </div>
            <p className="cn-mini-tag">
              Agents that move unseen. Deployed in minutes, gone without a trace.
            </p>
            <div className="cn-mini-cta">Initialize →</div>
          </div>

          <div className="cn-mini-foot">online · v2.4 · zero-trace</div>

          <div className="cn-terminal-scan" />
        </div>
      </div>
    </div>
  );
}
