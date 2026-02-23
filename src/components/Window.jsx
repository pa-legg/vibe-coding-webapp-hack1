import React, { useState, useRef, useEffect } from 'react'
import './Window.css'

const Window = ({ window, isActive, onClose, onUpdate, onBringToFront, children }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [isResizing, setIsResizing] = useState(false)
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const windowRef = useRef(null)

  useEffect(() => {
    if (isActive) {
      onBringToFront()
    }
  }, [isActive])

  const handleMouseDown = (e) => {
    // Don't start dragging if clicking on window controls
    if (e.target.closest('.window-controls')) {
      return
    }
    
    if (e.target.classList.contains('window-header') || e.target.closest('.window-header')) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - window.x,
        y: e.clientY - window.y
      })
      onBringToFront()
    }
  }

  const handleMouseMove = (e) => {
    if (isDragging && !window.maximized) {
      onUpdate({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    } else if (isResizing && !window.maximized) {
      const newWidth = Math.max(400, resizeStart.width + (e.clientX - resizeStart.x))
      const newHeight = Math.max(300, resizeStart.height + (e.clientY - resizeStart.y))
      onUpdate({
        width: newWidth,
        height: newHeight
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
  }

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, isResizing, dragStart, resizeStart])

  const handleMinimize = (e) => {
    e.stopPropagation()
    onUpdate({ minimized: !window.minimized })
  }

  const handleClose = (e) => {
    e.stopPropagation()
    onClose()
  }

  // Get window dimensions from global window object
  const getWindowDimensions = () => {
    return {
      width: typeof window !== 'undefined' ? window.innerWidth : 1920,
      height: typeof window !== 'undefined' ? window.innerHeight : 1080
    }
  }

  const handleMaximize = (e) => {
    e.stopPropagation()
    if (window.maximized) {
      onUpdate({ 
        maximized: false,
        x: window.previousX || 100,
        y: window.previousY || 100,
        width: window.previousWidth || 800,
        height: window.previousHeight || 500
      })
    } else {
      const dims = getWindowDimensions()
      onUpdate({
        previousX: window.x,
        previousY: window.y,
        previousWidth: window.width,
        previousHeight: window.height,
        maximized: true,
        x: 0,
        y: 0,
        width: dims.width,
        height: dims.height - 40 // Account for taskbar
      })
    }
  }

  const handleResizeStart = (e) => {
    e.stopPropagation()
    setIsResizing(true)
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: window.width,
      height: window.height
    })
  }

  if (window.minimized) {
    return null
  }

  return (
    <div
      ref={windowRef}
      className={`window ${isActive ? 'active' : ''}`}
      style={{
        left: `${window.x}px`,
        top: `${window.y}px`,
        width: `${window.width}px`,
        height: `${window.height}px`,
        zIndex: window.zIndex
      }}
      onClick={onBringToFront}
    >
      <div className="window-header" onMouseDown={handleMouseDown}>
        <div className="window-title">{window.title}</div>
        <div className="window-controls">
          <button className="window-control minimize" onClick={handleMinimize} title="Minimize">−</button>
          <button className="window-control maximize" onClick={handleMaximize} title="Maximize">□</button>
          <button className="window-control close" onClick={handleClose} title="Close">×</button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
      {!window.maximized && (
        <div 
          className="window-resize-handle"
          onMouseDown={handleResizeStart}
        />
      )}
    </div>
  )
}

export default Window

