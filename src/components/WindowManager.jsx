import React from 'react'
import FileBrowser from './FileBrowser'
import Terminal from './Terminal'
import WebBrowser from './WebBrowser'
import Window from './Window'

const WindowManager = ({ windows, activeWindowId, onClose, onUpdate, onBringToFront, onFlagFound, vfs }) => {
  return (
    <>
      {windows.map(window => (
        <Window
          key={window.id}
          window={window}
          isActive={activeWindowId === window.id}
          onClose={() => onClose(window.id)}
          onUpdate={(updates) => onUpdate(window.id, updates)}
          onBringToFront={() => onBringToFront(window.id)}
        >
          {window.type === 'filebrowser' && (
            <FileBrowser vfs={vfs} onFlagFound={onFlagFound} />
          )}
          {window.type === 'terminal' && (
            <Terminal vfs={vfs} onFlagFound={onFlagFound} />
          )}
          {window.type === 'webbrowser' && (
            <WebBrowser />
          )}
        </Window>
      ))}
    </>
  )
}

export default WindowManager

