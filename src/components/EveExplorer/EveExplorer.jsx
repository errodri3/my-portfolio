import { useState } from 'react'
import { fileSystem } from '../../data/explorerFiles'

export default function EveExplorer() {
  const [activeSection, setActiveSection] = useState('Desktop')

  const sidebarItems = Object.keys(fileSystem)

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '320px', fontSize: '13px' }}>
      <div style={{
        width: '140px',
        flexShrink: 0,
        borderRight: '1px solid rgba(160,200,240,0.3)',
        padding: '8px 0',
        overflowY: 'auto',
      }}>
        <div style={{ padding: '4px 12px', fontSize: '10px', fontWeight: '700', color: '#7aaad0', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
          Favorites
        </div>
        {sidebarItems.slice(0, 4).map(item => (
          <div
            key={item}
            onClick={() => setActiveSection(item)}
            style={{
              padding: '6px 12px', cursor: 'pointer', borderRadius: '6px',
              margin: '1px 6px',
              background: activeSection === item ? 'rgba(160,200,240,0.35)' : 'transparent',
              color: '#4a6a90',
              fontWeight: activeSection === item ? '600' : '400',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}
            onMouseEnter={e => { if (activeSection !== item) e.currentTarget.style.background = 'rgba(255,255,255,0.4)' }}
            onMouseLeave={e => { if (activeSection !== item) e.currentTarget.style.background = 'transparent' }}
          >
            <span style={{ fontSize: '14px' }}>
              {item === 'Desktop' ? '🖥️' : item === 'Documents' ? '📄' : item === 'Pictures' ? '🖼️' : '⬇️'}
            </span>
            {item}
          </div>
        ))}

        <div style={{ padding: '8px 12px 4px', fontSize: '10px', fontWeight: '700', color: '#7aaad0', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '8px' }}>
          Pinned
        </div>
        <div
          onClick={() => setActiveSection('Pinned')}
          style={{
            padding: '6px 12px', cursor: 'pointer', borderRadius: '6px',
            margin: '1px 6px',
            background: activeSection === 'Pinned' ? 'rgba(200,160,240,0.35)' : 'transparent',
            color: '#4a6a90',
            fontWeight: activeSection === 'Pinned' ? '600' : '400',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}
          onMouseEnter={e => { if (activeSection !== 'Pinned') e.currentTarget.style.background = 'rgba(255,255,255,0.4)' }}
          onMouseLeave={e => { if (activeSection !== 'Pinned') e.currentTarget.style.background = 'transparent' }}
        >
          <span style={{ fontSize: '14px' }}>📌</span>
          Pinned
        </div>
      </div>

      <div style={{ flex: 1, padding: '12px', overflowY: 'auto' }}>
        <div style={{ fontSize: '12px', fontWeight: '700', color: '#7aaad0', marginBottom: '12px' }}>
          {activeSection}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '8px' }}>
          {fileSystem[activeSection].map((file, i) => (
            <div
              key={i}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '4px', padding: '10px 6px', borderRadius: '8px',
                cursor: 'pointer', textAlign: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(160,200,240,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ fontSize: '28px' }}>{file.icon}</span>
              <span style={{ fontSize: '10px', color: '#4a6a90', fontWeight: '500', lineHeight: '1.3', wordBreak: 'break-word' }}>
                {file.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}