import React, { useState } from 'react'
import './WebBrowser.css'

const WebBrowser = () => {
  const [url, setUrl] = useState('https://example.com')
  const [currentUrl, setCurrentUrl] = useState('https://example.com')

  const handleNavigate = (e) => {
    if (e.key === 'Enter') {
      setCurrentUrl(url)
    }
  }

  const handleBack = () => {
    // Simplified navigation
    if (currentUrl.includes('hint')) {
      setCurrentUrl('https://example.com')
      setUrl('https://example.com')
    }
  }

  const handleForward = () => {
    // Simplified navigation
  }

  const handleRefresh = () => {
    setCurrentUrl(currentUrl)
  }

  const handleHome = () => {
    setCurrentUrl('https://example.com')
    setUrl('https://example.com')
  }

  const renderContent = () => {
    if (currentUrl.includes('hint') || currentUrl.includes('localhost')) {
      return (
        <div className="web-content">
          <h1>Linux System Hints</h1>
          <p>Welcome to the system help page!</p>
          <div className="hint-box">
            <h2>💡 Hacking Challenge Hints</h2>
            <ul>
              <li>Important files are often hidden in configuration directories</li>
              <li>Use <code>find</code> command to search for files by name</li>
              <li>Hidden files start with a dot (.)</li>
              <li>Check software and configuration directories</li>
              <li>Use <code>grep</code> to search file contents</li>
            </ul>
            <p><strong>Tip:</strong> The flag file might be in an unexpected location. Try searching for files with "flag" in the name!</p>
          </div>
        </div>
      )
    }

    if (currentUrl.includes('example.com')) {
      return (
        <div className="web-content">
          <h1>Example Domain</h1>
          <p>This is an example website in the Linux Desktop Simulator.</p>
          <p>You can navigate to different pages, but remember: the real challenge is finding the flag in the file system!</p>
          <div className="link-section">
            <h2>Useful Links</h2>
            <button onClick={() => {
              setUrl('http://localhost/hints')
              setCurrentUrl('http://localhost/hints')
            }} className="web-link">
              View Hints
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="web-content">
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist in this simulator.</p>
        <p>Try exploring the file system instead!</p>
      </div>
    )
  }

  return (
    <div className="web-browser">
      <div className="web-browser-toolbar">
        <div className="web-browser-controls">
          <button onClick={handleBack} title="Back">←</button>
          <button onClick={handleForward} title="Forward" disabled>→</button>
          <button onClick={handleRefresh} title="Refresh">↻</button>
          <button onClick={handleHome} title="Home">⌂</button>
        </div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={handleNavigate}
          className="web-browser-url"
          placeholder="Enter URL..."
        />
      </div>
      <div className="web-browser-content">
        {renderContent()}
      </div>
    </div>
  )
}

export default WebBrowser

