import { useState } from 'react'
import './App.css'

const TABS = [
  { id: 'channels', label: 'Channels', icon: '📺' },
  { id: 'videos', label: 'Videos', icon: '🎬' },
  { id: 'lives', label: 'Lives', icon: '🔴' },
  { id: 'logs', label: 'Logs', icon: '📋' }
]

export default function App() {
  const [tab, setTab] = useState('lives')

  return (
    <div className="app">
      <header className="topbar">
        <h1>YT Live Manager</h1>
        <span className="status-dot" title="Backend status" />
      </header>

      <main className="content">
        {tab === 'channels' && <Placeholder title="Channels" hint="Add / remove YouTube channels here." />}
        {tab === 'videos' && <Placeholder title="Videos" hint="Upload MP4s to R2, create playlists." />}
        {tab === 'lives' && <Placeholder title="Lives" hint="Start / stop / schedule live streams." />}
        {tab === 'logs' && <Placeholder title="Logs" hint="Streaming logs appear here." />}
      </main>

      <nav className="bottomnav">
        {TABS.map(t => (
          <button
            key={t.id}
            className={tab === t.id ? 'active' : ''}
            onClick={() => setTab(t.id)}
          >
            <span className="nav-icon">{t.icon}</span>
            <span className="nav-label">{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

function Placeholder({ title, hint }) {
  return (
    <div className="placeholder">
      <h2>{title}</h2>
      <p>{hint}</p>
      <p className="dim">Coming next — connecting to backend.</p>
    </div>
  )
}
