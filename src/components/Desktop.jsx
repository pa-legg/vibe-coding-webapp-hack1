import React, { useState, useRef, useEffect } from 'react'
import VirtualFileSystem from '../utils/virtualFileSystem'
import WindowManager from './WindowManager'
import Taskbar from './Taskbar'
import './Desktop.css'

const Desktop = () => {
  const [windows, setWindows] = useState([])
  const [nextWindowId, setNextWindowId] = useState(1)
  const [activeWindowId, setActiveWindowId] = useState(null)
  const [foundFlag, setFoundFlag] = useState(null)
  const vfsRef = useRef(new VirtualFileSystem())

  const openWindow = (type, title, props = {}) => {
    const id = nextWindowId
    const newWindow = {
      id,
      type,
      title,
      x: 100 + (windows.length * 30),
      y: 100 + (windows.length * 30),
      width: type === 'terminal' ? 700 : type === 'webbrowser' ? 900 : 800,
      height: type === 'terminal' ? 500 : type === 'webbrowser' ? 600 : 500,
      minimized: false,
      maximized: false,
      zIndex: windows.length + 1,
      ...props
    }
    setWindows([...windows, newWindow])
    setActiveWindowId(id)
    setNextWindowId(id + 1)
  }

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id))
    if (activeWindowId === id) {
      const remaining = windows.filter(w => w.id !== id)
      setActiveWindowId(remaining.length > 0 ? remaining[remaining.length - 1].id : null)
    }
  }

  const updateWindow = (id, updates) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, ...updates } : w
    ))
  }

  const bringToFront = (id) => {
    const maxZ = Math.max(...windows.map(w => w.zIndex), 0)
    updateWindow(id, { zIndex: maxZ + 1 })
    setActiveWindowId(id)
  }

  const handleFlagFound = (flag) => {
    setFoundFlag(flag)
  }

  return (
    <div className="desktop">
      <div 
        className="desktop-background"
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/uwe-cyber/wallpaper/main/UWEcyber-desktop-red.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="desktop-icons">
          <div className="desktop-icon" onClick={() => openWindow('filebrowser', 'File Browser')}>
            <div className="icon-folder">📁</div>
            <span>Files</span>
          </div>
          <div className="desktop-icon" onClick={() => openWindow('terminal', 'Terminal')}>
            <div className="icon-terminal">💻</div>
            <span>Terminal</span>
          </div>
          <div className="desktop-icon" onClick={() => openWindow('webbrowser', 'Web Browser')}>
            <div className="icon-browser">🌐</div>
            <span>Browser</span>
          </div>
        </div>
      </div>

      <WindowManager
        windows={windows}
        activeWindowId={activeWindowId}
        onClose={closeWindow}
        onUpdate={updateWindow}
        onBringToFront={bringToFront}
        onFlagFound={handleFlagFound}
        vfs={vfsRef.current}
      />

      <Taskbar
        windows={windows}
        activeWindowId={activeWindowId}
        onWindowClick={bringToFront}
        onOpenWindow={openWindow}
      />

      {foundFlag && (
        <div className="flag-modal">
          <div className="flag-modal-content">
            <h2>🎉 Flag Found! 🎉</h2>
            <div className="flag-text">{foundFlag}</div>
            <p>Congratulations! You've successfully completed the hacking challenge!</p>
            <button onClick={() => setFoundFlag(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Desktop

