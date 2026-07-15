import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Taskbar from './Taskbar'
import Window from './Window'
import Experience from '../apps/Experience'

function Desktop() {
  const [showInfo, setShowInfo] = useState(true)
  const [openWindows, setOpenWindows] = useState([])
  const [minimizedWindows, setMinimizedWindows] = useState([])

  const desktopApps = [
    { id: 'about', label: 'about me', icon: '📄' },
    { id: 'experience', label: 'experience', icon: '💼' },
    { id: 'projects', label: 'projects', icon: '🗂️' },
    { id: 'music', label: 'music player', icon: '🎵' },
    { id: 'anime', label: 'anime list', icon: '📺' },
    { id: 'movies', label: 'movie list', icon: '🎬' },
    { id: 'mtg', label: 'mtg tracker', icon: '🃏' },
    { id: 'contact', label: 'contact', icon: '✉️' },
  ]

  const openWindow = (app) => {
    if (minimizedWindows.find(w => w.id === app.id)) {
      setMinimizedWindows(minimizedWindows.filter(w => w.id !== app.id))
      return
    }
    if (!openWindows.find(w => w.id === app.id)) {
      setOpenWindows([...openWindows, app])
    }
  }

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter(w => w.id !== id))
    setMinimizedWindows(minimizedWindows.filter(w => w.id !== id))
  }

  const minimizeWindow = (app) => {
    setMinimizedWindows([...minimizedWindows, app])
  }

  const restoreWindow = (app) => {
    setMinimizedWindows(minimizedWindows.filter(w => w.id !== app.id))
  }

  const isMinimized = (id) => minimizedWindows.some(w => w.id === id)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(160deg, #c8dff5 0%, #b8d4f0 50%, #d4c8f0 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 72px)',
        gap: '8px',
        zIndex: 10,
      }}>
        {desktopApps.map(app => (
          <div
            key={app.id}
            onDoubleClick={() => openWindow(app)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              padding: '6px',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '72px',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <span style={{ fontSize: '32px' }}>{app.icon}</span>
            <span style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#fff',
              textAlign: 'center',
              textShadow: '0 1px 4px rgba(80,120,180,0.8)',
              lineHeight: '1.3',
            }}>
              {app.label}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {showInfo && (
          <Window
            title="info.txt"
            onClose={() => setShowInfo(false)}
            onMinimize={() => setShowInfo(false)}
            defaultX={120}
            defaultY={60}
          >
            <div style={{ fontSize: '13px', color: '#4a6a90', lineHeight: '1.7' }}>
              <p style={{ fontWeight: '700', fontSize: '15px', marginBottom: '0.5rem' }}>
                welcome to eve's os ✦
              </p>
              <p style={{ marginBottom: '0.75rem', opacity: 0.8 }}>
                this is the interactive portfolio of Evelyn Rodriguez —
                HCI student, developer, and UI/UX designer.
              </p>
              <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>what you'll find here:</p>
              <ul style={{ paddingLeft: '1rem', marginBottom: '0.75rem', opacity: 0.8 }}>
                <li>my experience & skills</li>
                <li>projects i've built</li>
                <li>music player</li>
                <li>anime & movie lists</li>
                <li>MTG collection tracker</li>
                <li>a way to contact me</li>
              </ul>
              <p style={{
                background: 'rgba(200,160,240,0.15)',
                border: '1px solid rgba(200,160,240,0.3)',
                borderRadius: '8px',
                padding: '8px 10px',
                fontSize: '12px',
              }}>
                🚧 this portfolio is currently under construction.
                many features are still being built — check back soon!
              </p>
            </div>
          </Window>
        )}

        {openWindows.map(w => (
          !isMinimized(w.id) && (
            <Window
              key={w.id}
              title={w.label}
              onClose={() => closeWindow(w.id)}
              onMinimize={() => minimizeWindow(w)}
              defaultX={120}
              defaultY={80}
            >
              {w.id === 'experience' ? (
                <Experience />
              ) : (
                <div style={{ fontSize: '13px', color: '#4a6a90', padding: '1rem' }}>
                  🚧 {w.label} is coming soon!
                </div>
              )}
            </Window>
          )
        ))}
      </AnimatePresence>

      <Taskbar
        openWindow={openWindow}
        openWindows={openWindows}
        minimizedWindows={minimizedWindows}
        restoreWindow={restoreWindow}
      />
    </motion.div>
  )
}

export default Desktop