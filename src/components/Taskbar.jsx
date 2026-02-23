import React from 'react'
import './Taskbar.css'

const Taskbar = ({ windows, activeWindowId, onWindowClick, onOpenWindow }) => {
  const getWindowIcon = (type) => {
    switch (type) {
      case 'filebrowser': return '📁'
      case 'terminal': return '💻'
      case 'webbrowser': return '🌐'
      default: return '📄'
    }
  }

  return (
    <div className="taskbar">
      <div className="taskbar-start">
        <button className="taskbar-app-menu" title="Applications">
          <span>☰</span>
        </button>
      </div>
      <div className="taskbar-windows">
        {windows.filter(w => !w.minimized).map(window => (
          <button
            key={window.id}
            className={`taskbar-window ${activeWindowId === window.id ? 'active' : ''}`}
            onClick={() => onWindowClick(window.id)}
            title={window.title}
          >
            <span className="taskbar-icon">{getWindowIcon(window.type)}</span>
            <span className="taskbar-title">{window.title}</span>
          </button>
        ))}
      </div>
      <div className="taskbar-end">
        <div className="taskbar-time">
          {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  )
}

export default Taskbar

