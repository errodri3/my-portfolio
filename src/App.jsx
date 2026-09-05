import { useState } from 'react'
import LockScreen from './components/LockScreen/LockScreen'
import Desktop from './components/Desktop/Desktop'

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