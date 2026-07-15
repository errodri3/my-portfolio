import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function LockScreen({ onUnlock }) {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      let h = now.getHours()
      let m = now.getMinutes()
      const ampm = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
      setTime(`${h}:${String(m).padStart(2, '0')} ${ampm}`)
      const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      setDate(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`)
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === 'Space') onUnlock()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onUnlock])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onUnlock}
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(160deg, #c8dff5 0%, #b8d4f0 50%, #d4c8f0 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        gap: '1rem',
        outline: 'none',
      }}
    >
      <div style={{
        background: 'rgba(255,255,255,0.3)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1.5px solid rgba(255,255,255,0.6)',
        padding: '2rem 3rem',
        textAlign: 'center',
        color: '#4a6a90',
      }}>
        <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '0.5rem', opacity: 0.8 }}>
          {date}
        </div>
        <div style={{ fontSize: '72px', fontWeight: '300', lineHeight: 1, letterSpacing: '-2px' }}>
          {time}
        </div>
      </div>
      <div style={{ fontSize: '13px', color: 'rgba(74,106,144,0.7)', marginTop: '1rem', fontWeight: '500' }}>
        press space or click to enter
      </div>
    </motion.div>
  )
}

export default LockScreen