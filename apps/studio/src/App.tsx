const tracks = [
  { name: "Animation", range: "0.00 — 1.20", tone: "blue" },
  { name: "Damage Volume", range: "0.34 — 0.53", tone: "orange" },
  { name: "VFX · Heavy Slash", range: "0.31", tone: "cyan" },
  { name: "Cancel Window", range: "0.76 — 1.05", tone: "violet" },
];

export function App() {
  return (
    <main className="studio-shell">
      <header className="topbar">
        <div className="brand-mark" aria-hidden="true">
          BG
        </div>
        <div>
          <strong>BAIGE Studio</strong>
          <span>A BAIGE Project · Foundation</span>
        </div>
        <div className="connection">
          <span className="status-dot" /> Bridge offline
        </div>
      </header>

      <aside className="rail panel">
        <p className="eyebrow">PROJECT</p>
        <h2>Heavy Slash</h2>
        <nav>
          <button className="active">Combat Action</button>
          <button>Asset Aliases</button>
          <button>Validation</button>
          <button>Runtime Trace</button>
        </nav>
        <div className="principle-card">
          <span>Human-controlled AI</span>
          <p>LLM changes remain reviewable patches until you approve them.</p>
        </div>
      </aside>

      <section className="viewport panel">
        <div className="panel-title">
          <span>Proxy Viewport</span>
          <small>Engine-neutral preview</small>
        </div>
        <div className="grid-floor" aria-hidden="true">
          <div className="proxy-body">
            <span className="proxy-head" />
            <span className="proxy-spine" />
            <span className="proxy-arm left" />
            <span className="proxy-arm right" />
            <span className="proxy-leg left" />
            <span className="proxy-leg right" />
            <span className="hit-volume" />
          </div>
        </div>
        <div className="viewport-note">
          Browser preview accelerates editing. The connected engine remains authoritative.
        </div>
      </section>

      <aside className="inspector panel">
        <div className="panel-title">
          <span>Inspector</span>
          <small>damage.volume</small>
        </div>
        <label>
          Parent space
          <select defaultValue="Bone">
            <option>Bone</option>
            <option>Actor</option>
            <option>VirtualSocket</option>
          </select>
        </label>
        <label>
          Parent
          <input defaultValue="hand_r" readOnly />
        </label>
        <div className="field-row">
          <label>
            Radius
            <input defaultValue="0.18 m" readOnly />
          </label>
          <label>
            Half height
            <input defaultValue="0.70 m" readOnly />
          </label>
        </div>
        <label>
          Damage profile
          <input defaultValue="damage://sword/heavy" readOnly />
        </label>
        <div className="validation-ok">Schema valid · 0 warnings</div>
      </aside>

      <section className="timeline panel">
        <div className="timeline-header">
          <div>
            <span className="play-button">▶</span>
            <span>00:00.42</span>
          </div>
          <span>1.20 s · 60 fps preview</span>
        </div>
        <div className="ruler">0.0　　0.2　　0.4　　0.6　　0.8　　1.0　　1.2</div>
        <div className="playhead" />
        {tracks.map((track) => (
          <div className="track" key={track.name}>
            <strong>{track.name}</strong>
            <div className={`clip ${track.tone}`}>
              <span>{track.range}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
