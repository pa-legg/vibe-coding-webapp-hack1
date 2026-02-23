import React, { useState, useEffect } from 'react'
import './FileBrowser.css'

const FileBrowser = ({ vfs, onFlagFound }) => {
  const [currentPath, setCurrentPath] = useState('/home/user')
  const [entries, setEntries] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileContent, setFileContent] = useState('')
  const [showHidden, setShowHidden] = useState(false)

  useEffect(() => {
    loadDirectory(currentPath)
  }, [currentPath, showHidden])

  const loadDirectory = (path) => {
    const dirEntries = vfs.listDirectory(path) || []
    let filtered = dirEntries
    if (!showHidden) {
      filtered = dirEntries.filter(e => !e.name.startsWith('.'))
    }
    setEntries(filtered)
  }

  const handleDoubleClick = (entry) => {
    if (entry.type === 'directory') {
      setCurrentPath(entry.path)
      setSelectedFile(null)
      setFileContent('')
    } else {
      const content = vfs.readFile(entry.path)
      setSelectedFile(entry)
      setFileContent(content || '')
      
      // Check for flag
      const flag = vfs.checkFlag(entry.path)
      if (flag) {
        onFlagFound(flag)
      }
    }
  }

  const handlePathChange = (e) => {
    if (e.key === 'Enter') {
      const path = e.target.value
      const node = vfs.getNode(vfs.getAbsolutePath(path, currentPath))
      if (node && node.type === 'directory') {
        setCurrentPath(node.path)
      }
    }
  }

  const goUp = () => {
    if (currentPath !== '/') {
      const parts = currentPath.split('/').filter(p => p)
      parts.pop()
      setCurrentPath(parts.length > 0 ? '/' + parts.join('/') : '/')
    }
  }

  const getIcon = (entry) => {
    if (entry.type === 'directory') {
      return '📁'
    }
    const ext = entry.name.split('.').pop().toLowerCase()
    const iconMap = {
      'txt': '📄',
      'png': '🖼️',
      'jpg': '🖼️',
      'pdf': '📕',
      'zip': '📦',
      'log': '📋'
    }
    return iconMap[ext] || '📄'
  }

  return (
    <div className="file-browser">
      <div className="file-browser-toolbar">
        <button onClick={goUp} disabled={currentPath === '/'} title="Go Up">↑</button>
        <input
          type="text"
          value={currentPath}
          onChange={(e) => setCurrentPath(e.target.value)}
          onKeyPress={handlePathChange}
          className="file-browser-path"
          placeholder="Enter path..."
        />
        <label className="file-browser-hidden">
          <input
            type="checkbox"
            checked={showHidden}
            onChange={(e) => setShowHidden(e.target.checked)}
          />
          Show Hidden
        </label>
      </div>
      <div className="file-browser-content">
        <div className="file-browser-list">
          {entries.map((entry, index) => (
            <div
              key={index}
              className={`file-browser-item ${selectedFile?.path === entry.path ? 'selected' : ''}`}
              onDoubleClick={() => handleDoubleClick(entry)}
              onClick={() => {
                if (entry.type === 'file') {
                  const content = vfs.readFile(entry.path)
                  setSelectedFile(entry)
                  setFileContent(content || '')
                  
                  const flag = vfs.checkFlag(entry.path)
                  if (flag) {
                    onFlagFound(flag)
                  }
                }
              }}
            >
              <span className="file-icon">{getIcon(entry)}</span>
              <span className="file-name">{entry.name}</span>
              {entry.type === 'file' && (
                <span className="file-size">{(entry.size || 0).toLocaleString()} bytes</span>
              )}
            </div>
          ))}
          {entries.length === 0 && (
            <div className="file-browser-empty">Directory is empty</div>
          )}
        </div>
        {selectedFile && (
          <div className="file-browser-preview">
            <div className="file-preview-header">
              <span>{selectedFile.name}</span>
              <span className="file-preview-path">{selectedFile.path}</span>
            </div>
            <div className="file-preview-content">
              <pre>{fileContent}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FileBrowser

