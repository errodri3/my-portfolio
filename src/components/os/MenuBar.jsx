import { useState, useEffect } from 'react'

function MenuBar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      let h = now.getHours()
      let m = now.getMinutes()
      const ampm = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
      const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      setTime(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()} ${h}:${String(m).padStart(2,'0')} ${ampm}`)
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      height: '28px',
      background: 'rgba(220,235,255,0.75)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 14px',
      fontSize: '12px',
      fontWeight: '600',
      color: '#5a7fa8',
      position: 'relative',
      zIndex: 100,
    }}>
      <span>✦ eve's os</span>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span>🔊</span>
        <span>📶</span>
        <span>{time}</span>
      </div>
    </div>
  )
}

export default MenuBar