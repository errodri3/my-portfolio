import { useState } from 'react'
import LockScreen from './components/os/LockScreen'
import Desktop from './components/os/Desktop'

function App() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <div>
      {unlocked ? (
        <Desktop />
      ) : (
        <LockScreen onUnlock={() => setUnlocked(true)} />
      )}
    </div>
  )
}

export default App