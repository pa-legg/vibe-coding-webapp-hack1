import React, { useState, useRef, useEffect } from 'react'
import CommandInterpreter from '../utils/commandInterpreter'
import './Terminal.css'

const Terminal = ({ vfs, onFlagFound }) => {
  const [output, setOutput] = useState([])
  const [input, setInput] = useState('')
  const [currentPath, setCurrentPath] = useState('/home/user')
  const inputRef = useRef(null)
  const outputRef = useRef(null)
  const interpreterRef = useRef(new CommandInterpreter(vfs))

  useEffect(() => {
    // Set initial PWD
    interpreterRef.current.environment.PWD = currentPath
    addOutput(`Linux Desktop Simulator v1.0\nType 'help' for available commands.\n\n`)
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    outputRef.current?.scrollTo(0, outputRef.current.scrollHeight)
  }, [output])

  useEffect(() => {
    interpreterRef.current.environment.PWD = currentPath
  }, [currentPath])

  const addOutput = (text, isError = false, flag = null) => {
    setOutput(prev => [...prev, { text, isError, flag, timestamp: Date.now() }])
  }

  const executeCommand = (commandLine) => {
    if (!commandLine.trim()) {
      addOutput('')
      return
    }

    const parts = commandLine.trim().split(/\s+/)
    const command = parts[0]
    const args = parts.slice(1)

    addOutput(`$ ${commandLine}`)

    const result = interpreterRef.current.execute(command, args)

    if (result.clear) {
      setOutput([])
      return
    }

    if (result.updatePWD) {
      setCurrentPath(result.updatePWD)
    }

    if (result.flag) {
      onFlagFound(result.flag)
      addOutput(result.output, result.error, result.flag)
    } else {
      addOutput(result.output || '', result.error)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const history = interpreterRef.current.getHistory('up')
      setInput(history)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const history = interpreterRef.current.getHistory('down')
      setInput(history)
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // Tab completion could be implemented here
    }
  }

  const getPrompt = () => {
    const user = interpreterRef.current.environment.USER
    const hostname = 'linux-simulator'
    const path = currentPath === '/home/user' ? '~' : currentPath
    return `${user}@${hostname}:${path}$ `
  }

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-output" ref={outputRef}>
        {output.map((item, index) => (
          <div key={index} className={`terminal-line ${item.isError ? 'error' : ''}`}>
            {item.flag && (
              <div className="terminal-flag-found">
                🎉 FLAG FOUND: {item.flag} 🎉
              </div>
            )}
            <pre>{item.text}</pre>
          </div>
        ))}
        <div className="terminal-input-line">
          <span className="terminal-prompt">{getPrompt()}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}

export default Terminal

