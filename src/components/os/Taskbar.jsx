import { useState, useEffect } from 'react'

function Taskbar({ openWindow, openWindows, minimizedWindows, restoreWindow }) {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [startOpen, setStartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      let h = now.getHours()
      let m = now.getMinutes()
      const ampm = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      setTime(`${h}:${String(m).padStart(2,'0')} ${ampm}`)
      setDate(`${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`)
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const apps = [
    { id: 'about', label: 'about me', icon: '📄' },
    { id: 'experience', label: 'experience', icon: '💼' },
    { id: 'projects', label: 'projects', icon: '🗂️' },
    { id: 'music', label: 'music player', icon: '🎵' },
    { id: 'anime', label: 'anime list', icon: '📺' },
    { id: 'movies', label: 'movie list', icon: '🎬' },
    { id: 'mtg', label: 'mtg tracker', icon: '🃏' },
    { id: 'contact', label: 'contact', icon: '✉️' },
  ]

  const filteredApps = apps.filter(app =>
    app.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const allTaskbarWindows = [
    ...openWindows,
    ...minimizedWindows.filter(m => !openWindows.find(o => o.id === m.id))
  ]

  return (
    <>
      {startOpen && (
        <>
          <div
            onClick={() => setStartOpen(false)}
            style={{ position: 'absolute', inset: 0, zIndex: 90 }}
          />
          <div style={{
            position: 'absolute',
            bottom: '52px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '520px',
            background: 'rgba(220,235,255,0.85)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            border: '1.5px solid rgba(255,255,255,0.8)',
            padding: '20px',
            zIndex: 95,
          }}>
            <div style={{
              fontSize: '11px', fontWeight: '700', color: '#5a7fa8',
              letterSpacing: '0.1em', marginBottom: '14px', textTransform: 'uppercase',
            }}>
              pinned
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
            }}>
              {filteredApps.map(app => (
                <div
                  key={app.id}
                  onClick={() => { openWindow(app); setStartOpen(false) }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: '6px', padding: '12px 8px', borderRadius: '10px', cursor: 'pointer',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <span style={{ fontSize: '28px' }}>{app.icon}</span>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: '#4a6a90', textAlign: 'center' }}>
                    {app.label}
                  </span>
                </div>
              ))}
            </div>
            {filteredApps.length === 0 && (
              <div style={{ textAlign: 'center', color: '#7a9abf', fontSize: '12px', padding: '1rem' }}>
                no apps found
              </div>
            )}
            <div style={{
              marginTop: '16px', padding: '10px 12px',
              background: 'rgba(200,160,240,0.15)', borderRadius: '8px',
              border: '1px solid rgba(200,160,240,0.25)',
              fontSize: '11px', color: '#7a5a9a', textAlign: 'center',
            }}>
              🚧 more apps coming soon
            </div>
          </div>
        </>
      )}

      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '48px',
        background: 'rgba(210,228,250,0.75)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        zIndex: 100,
      }}>
        <div style={{ fontSize: '12px', color: '#5a7fa8', fontWeight: '600', minWidth: '80px' }}>
          🌤️ 72°F
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div
            onClick={() => setStartOpen(!startOpen)}
            style={{
              width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '8px', cursor: 'pointer', fontSize: '20px',
              background: startOpen ? 'rgba(255,255,255,0.5)' : 'transparent',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
            onMouseLeave={e => e.currentTarget.style.background = startOpen ? 'rgba(255,255,255,0.5)' : 'transparent'}
          >
            ⊞
          </div>

          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="🔍 search..."
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setStartOpen(true) }}
              onFocus={() => { setSearchFocused(true); setStartOpen(true) }}
              onBlur={() => setSearchFocused(false)}
              style={{
                background: 'rgba(255,255,255,0.5)',
                border: `1px solid ${searchFocused ? 'rgba(160,200,240,0.8)' : 'rgba(255,255,255,0.7)'}`,
                borderRadius: '20px',
                padding: '4px 14px',
                fontSize: '11px',
                color: '#4a6a90',
                outline: 'none',
                width: '160px',
                fontFamily: 'inherit',
              }}
            />
          </div>

          {allTaskbarWindows.map(w => (
            <div
              key={w.id}
              onClick={() => {
                if (minimizedWindows.find(m => m.id === w.id)) {
                  restoreWindow(w)
                }
              }}
              style={{
                padding: '4px 10px',
                borderRadius: '8px',
                background: minimizedWindows.find(m => m.id === w.id)
                  ? 'rgba(255,255,255,0.25)'
                  : 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.6)',
                fontSize: '11px', fontWeight: '600', color: '#5a7fa8',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '4px',
                opacity: minimizedWindows.find(m => m.id === w.id) ? 0.6 : 1,
              }}
            >
              <span>{w.icon}</span>
              <span>{w.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '80px', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#5a7fa8' }}>
            <span>🔊</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1px' }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: '#5a7fa8' }}>{time}</div>
            <div style={{ fontSize: '10px', color: '#7a9abf' }}>{date}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Taskbar