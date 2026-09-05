import { motion } from 'framer-motion'
import { useState } from 'react'

function Window({ title, onClose, onMinimize, children, defaultX = 100, defaultY = 80 }) {
  const [maximized, setMaximized] = useState(false)

  return (
    <motion.div
      drag={!maximized}
      dragMomentum={false}
      dragConstraints={{
        left: 0,
        top: 0,
        right: window.innerWidth - 340,
        bottom: window.innerHeight - 200,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      style={{
        position: 'absolute',
        left: maximized ? 0 : defaultX,
        top: maximized ? 0 : defaultY,
        width: maximized ? '100vw' : '340px',
        height: maximized ? 'calc(100vh - 48px)' : 'auto',
        maxHeight: maximized ? 'calc(100vh - 48px)' : '80vh',
        background: 'rgba(230,242,255,0.92)',
        backdropFilter: 'blur(10px)',
        borderRadius: maximized ? '0' : '10px',
        border: '1px solid rgba(255,255,255,0.8)',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        minWidth: '280px',
        minHeight: '200px',
        overflow: 'hidden',
      }}
    >
      <div style={{
        background: 'rgba(210,228,250,0.95)',
        borderRadius: maximized ? '0' : '10px 10px 0 0',
        padding: '0 0 0 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.6)',
        cursor: maximized ? 'default' : 'grab',
        flexShrink: 0,
        height: '32px',
      }}>
        <span style={{ fontSize: '12px', fontWeight: '600', color: '#5a7fa8' }}>
          {title}
        </span>
        <div style={{ display: 'flex', height: '100%' }}>
          <div
            onClick={onMinimize}
            style={{
              width: '46px', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px', color: '#5a7fa8', cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            &#8211;
          </div>
          <div
            onClick={() => setMaximized(!maximized)}
            style={{
              width: '46px', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', color: '#5a7fa8', cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {maximized ? '❐' : '□'}
          </div>
          <div
            onClick={onClose}
            style={{
              width: '46px', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', color: '#5a7fa8', cursor: 'pointer',
              borderRadius: maximized ? '0' : '0 10px 0 0',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#e8a4b0'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#5a7fa8' }}
          >
            ✕
          </div>
        </div>
      </div>
      <div style={{ padding: '12px 14px', overflowY: 'auto', flexGrow: 1 }}>
        {children}
      </div>
    </motion.div>
  )
}

export default Window