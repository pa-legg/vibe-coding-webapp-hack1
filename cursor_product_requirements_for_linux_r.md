# Product requirements for Linux remote desktop application
_Exported on 23/02/2026 at 23:14:41 GMT from Cursor (2.2.20)_

---

**User**

I want to develop a Product Requirements Document (PRD) for a new application. I want to create an interactive web application that replicates a linux remote desktop session. I want to be able to move a mouse cursor around the desktop, and interact with common applications including file browser and a web browser. The environment should replicate a typical Linux environment in look and feel, including terminal commands and interactions. Once the environment is developed, I want to have a simple hacking challenge available, where users have to find a flag text file within the operating system.

---

**Cursor**


Checking the workspace, then drafting the PRD.



Creating the PRD for the interactive Linux remote desktop web application.


```markdown
# Product Requirements Document (PRD)
## Interactive Linux Remote Desktop Web Application with Hacking Challenge

**Version:** 1.0  
**Date:** 2024  
**Status:** Draft

---

## 1. Executive Summary

This document outlines the requirements for developing an interactive web application that simulates a Linux remote desktop environment. The application will provide users with a fully functional, browser-based Linux desktop experience, complete with common applications, terminal access, and an embedded hacking challenge where users must locate a hidden flag file.

### 1.1 Product Vision
Create an immersive, educational web-based Linux desktop environment that allows users to interact with a simulated Linux system through their browser, providing hands-on experience with Linux interfaces, applications, and command-line tools, culminating in a capture-the-flag style challenge.

---

## 2. Goals and Objectives

### 2.1 Primary Goals
- **Educational**: Provide users with a safe, accessible way to learn Linux desktop environments and command-line operations
- **Engagement**: Create an interactive, gamified experience through the hacking challenge
- **Accessibility**: Enable Linux experience without requiring local installation or virtual machines
- **Realism**: Replicate authentic Linux desktop look, feel, and behavior

### 2.2 Success Metrics
- Users can successfully navigate the desktop environment
- Users can interact with applications (file browser, web browser, terminal)
- Users can execute terminal commands and see appropriate responses
- Users can complete the hacking challenge (find the flag file)
- Application loads and runs smoothly in modern web browsers
- Average time to complete challenge: 10-30 minutes

---

## 3. Target Users

### 3.1 Primary Users
- **Students/Learners**: Individuals learning Linux for the first time
- **Developers**: Developers familiarizing themselves with Linux environments
- **Security Enthusiasts**: Users interested in capture-the-flag challenges
- **Educators**: Instructors teaching Linux or cybersecurity concepts

### 3.2 User Personas
- **Beginner**: Limited Linux experience, needs intuitive UI
- **Intermediate**: Some Linux knowledge, wants to practice commands
- **Advanced**: Experienced user, focused on the hacking challenge

---

## 4. Core Features and Requirements

### 4.1 Desktop Environment

#### 4.1.1 Visual Design
- **REQ-001**: Replicate a modern Linux desktop environment (GNOME, KDE, or XFCE style)
- **REQ-002**: Display a desktop wallpaper with typical Linux aesthetic
- **REQ-003**: Include a taskbar/panel at the bottom or top of the screen
- **REQ-004**: Show system tray with clock, network indicator, and system status
- **REQ-005**: Display desktop icons for common applications and locations
- **REQ-006**: Support window management (minimize, maximize, close, resize, drag)

#### 4.1.2 Mouse Interaction
- **REQ-007**: Render a visible mouse cursor that follows user's mouse movements
- **REQ-008**: Support left-click, right-click, and double-click interactions
- **REQ-009**: Enable click-and-drag for window movement and selection
- **REQ-010**: Provide visual feedback for hover states on clickable elements
- **REQ-011**: Support mouse wheel scrolling in applications and file browsers

### 4.2 File Browser Application

#### 4.2.1 Core Functionality
- **REQ-012**: Display file system structure in a tree or list view
- **REQ-013**: Support navigation through directories (click to enter folders)
- **REQ-014**: Show file and folder icons with appropriate visual distinctions
- **REQ-015**: Display file metadata (name, size, permissions, modified date)
- **REQ-016**: Support file operations:
  - Open files (text files, images, etc.)
  - View file contents in appropriate viewers
  - Navigate back/forward through directory history
- **REQ-017**: Include a path/address bar showing current directory
- **REQ-018**: Support file search functionality
- **REQ-019**: Display hidden files (files starting with `.`) when enabled

#### 4.2.2 File System Structure
- **REQ-020**: Implement a realistic Linux directory structure:
  - `/home/` with user directories
  - `/etc/` for configuration files
  - `/var/` for variable data
  - `/usr/` for user programs
  - `/tmp/` for temporary files
  - `/root/` for root user
  - `/opt/` for optional software
- **REQ-021**: Populate directories with realistic files and folders
- **REQ-022**: Include the flag file hidden somewhere in the file system

### 4.3 Web Browser Application

#### 4.3.1 Core Functionality
- **REQ-023**: Display a browser window with address bar, navigation buttons
- **REQ-024**: Support URL navigation (users can type and visit URLs)
- **REQ-025**: Render web pages (simplified HTML/CSS rendering or iframe)
- **REQ-026**: Include back, forward, refresh, and home buttons
- **REQ-027**: Display page title and favicon
- **REQ-028**: Support bookmarks or history (optional)
- **REQ-029**: Include tabs for multiple pages (optional enhancement)

#### 4.3.2 Content
- **REQ-030**: Pre-populate with sample websites or local HTML pages
- **REQ-031**: Include at least one page that may contain hints for the hacking challenge
- **REQ-032**: Support basic web technologies (HTML, CSS, JavaScript)

### 4.4 Terminal Application

#### 4.4.1 Core Functionality
- **REQ-033**: Display a terminal window with command prompt
- **REQ-034**: Support text input for commands
- **REQ-035**: Execute common Linux commands and display output:
  - `ls`, `cd`, `pwd`, `cat`, `grep`, `find`, `which`, `whoami`
  - `mkdir`, `touch`, `rm`, `cp`, `mv`
  - `chmod`, `chown` (with appropriate output)
  - `ps`, `top`, `df`, `du`
  - `history`, `clear`
  - `man` (manual pages)
  - `sudo` (with appropriate behavior)
- **REQ-036**: Support command history (up/down arrow keys)
- **REQ-037**: Display command output with appropriate formatting
- **REQ-038**: Support multi-line commands and command chaining (`&&`, `|`, `;`)
- **REQ-039**: Show error messages for invalid commands
- **REQ-040**: Support tab completion for commands and file paths
- **REQ-041**: Display colored output for commands that support it (e.g., `ls --color`)
- **REQ-042**: Support environment variables (`$HOME`, `$PATH`, `$USER`, etc.)

#### 4.4.2 Terminal Features
- **REQ-043**: Support different shell prompts (bash-style: `user@hostname:~/path$`)
- **REQ-044**: Maintain session state (current directory, environment variables)
- **REQ-045**: Support multiple terminal windows/tabs
- **REQ-046**: Display command execution time for long-running commands

### 4.5 Hacking Challenge

#### 4.5.1 Challenge Design
- **REQ-047**: Hide a flag file somewhere in the file system
- **REQ-048**: Flag file should contain a unique identifier (e.g., `FLAG{abc123xyz}`)
- **REQ-049**: Provide subtle hints through:
  - File system structure
  - Web browser content
  - Terminal command outputs
  - Hidden files or directories
- **REQ-050**: Make the challenge solvable using standard Linux commands
- **REQ-051**: Include multiple difficulty levels (optional):
  - Easy: Flag in a predictable location with hints
  - Medium: Flag in a less obvious location
  - Hard: Flag requires multiple steps or command combinations

#### 4.5.2 Challenge Mechanics
- **REQ-052**: Track challenge progress (optional: show hints unlocked)
- **REQ-053**: Display success message when flag is found
- **REQ-054**: Allow users to copy the flag text
- **REQ-055**: Provide a way to reset the challenge
- **REQ-056**: Log user actions for analytics (optional)

### 4.6 Additional Applications (Optional Enhancements)

- **REQ-057**: Text editor (nano, vim, or gedit-style)
- **REQ-058**: Image viewer
- **REQ-059**: System monitor/task manager
- **REQ-060**: Settings/Preferences application

---

## 5. Technical Requirements

### 5.1 Platform and Technology

#### 5.1.1 Frontend
- **REQ-061**: Web-based application (HTML5, CSS3, JavaScript)
- **REQ-062**: Responsive design supporting common screen resolutions (1920x1080 minimum)
- **REQ-063**: Modern browser compatibility (Chrome, Firefox, Safari, Edge - latest 2 versions)
- **REQ-064**: No browser plugins or extensions required
- **REQ-065**: Optimized for performance (60fps interactions, <3s initial load)

#### 5.1.2 Architecture
- **REQ-066**: Client-side rendering (React, Vue, or vanilla JavaScript)
- **REQ-067**: State management for desktop state, windows, file system
- **REQ-068**: Virtual file system implementation in JavaScript
- **REQ-069**: Command interpreter/parser for terminal commands
- **REQ-070**: Window management system for application windows

### 5.2 File System Simulation

- **REQ-071**: Implement a virtual file system in JavaScript
- **REQ-072**: Support file and directory operations (read, write, create, delete)
- **REQ-073**: Maintain file permissions and metadata
- **REQ-074**: Support symbolic links (optional)
- **REQ-075**: Persist file system state during session (localStorage or sessionStorage)

### 5.3 Command Execution Engine

- **REQ-076**: Parse and interpret Linux commands
- **REQ-077**: Execute commands against the virtual file system
- **REQ-078**: Return appropriate output and error messages
- **REQ-079**: Support command flags and arguments
- **REQ-080**: Implement command aliases and environment variables

### 5.4 Performance Requirements

- **REQ-081**: Application should load in <3 seconds on average connection
- **REQ-082**: Mouse interactions should feel responsive (<50ms latency)
- **REQ-083**: Terminal commands should execute and display output in <100ms
- **REQ-084**: File browser should handle directories with 100+ files smoothly
- **REQ-085**: Support multiple open windows without performance degradation

### 5.5 Security Considerations

- **REQ-086**: All execution should be client-side only (no server-side code execution)
- **REQ-087**: Sanitize all user inputs to prevent XSS attacks
- **REQ-088**: No access to user's local file system
- **REQ-089**: No network requests to external servers (unless explicitly required)
- **REQ-090**: Clear indication that this is a simulation, not a real system

---

## 6. User Stories

### 6.1 Desktop Interaction
- **US-001**: As a user, I want to see a Linux desktop when I open the application, so I feel like I'm using a real Linux system.
- **US-002**: As a user, I want to move my mouse cursor around the desktop, so I can interact with elements naturally.
- **US-003**: As a user, I want to click on application icons, so I can open applications.
- **US-004**: As a user, I want to resize and move windows, so I can organize my workspace.

### 6.2 File Browser
- **US-005**: As a user, I want to browse the file system, so I can explore the Linux directory structure.
- **US-006**: As a user, I want to open files and view their contents, so I can find information.
- **US-007**: As a user, I want to search for files, so I can locate specific files quickly.

### 6.3 Terminal
- **US-008**: As a user, I want to type Linux commands, so I can interact with the system via command line.
- **US-009**: As a user, I want to see command output, so I understand what my commands do.
- **US-010**: As a user, I want to use command history, so I can quickly repeat previous commands.

### 6.4 Web Browser
- **US-011**: As a user, I want to visit websites, so I can access web content within the environment.
- **US-012**: As a user, I want to navigate between pages, so I can browse multiple sites.

### 6.5 Hacking Challenge
- **US-013**: As a user, I want to find the hidden flag file, so I can complete the challenge.
- **US-014**: As a user, I want to use terminal commands to search for the flag, so I can practice Linux skills.
- **US-015**: As a user, I want to see hints if I'm stuck, so I can progress through the challenge.

---

## 7. User Interface/User Experience Requirements

### 7.1 Visual Design
- **REQ-091**: Use a modern, clean Linux desktop theme
- **REQ-092**: Consistent iconography throughout the application
- **REQ-093**: Clear visual hierarchy and spacing
- **REQ-094**: Accessible color contrast (WCAG AA minimum)
- **REQ-095**: Smooth animations and transitions

### 7.2 Interaction Design
- **REQ-096**: Intuitive mouse interactions (click, drag, hover)
- **REQ-097**: Keyboard shortcuts for common actions (optional)
- **REQ-098**: Clear visual feedback for all interactions
- **REQ-099**: Error messages should be helpful and actionable
- **REQ-100**: Loading states for operations that take time

### 7.3 Onboarding
- **REQ-101**: Welcome screen or tutorial (optional)
- **REQ-102**: Tooltips or help text for first-time users
- **REQ-103**: Clear instructions for the hacking challenge

---

## 8. Out of Scope (Future Considerations)

The following features are explicitly out of scope for the initial version but may be considered for future releases:

- **OUT-001**: Real network connectivity or internet access
- **OUT-002**: Multi-user support or user accounts
- **OUT-003**: Real file system access or file uploads
- **OUT-004**: Advanced applications (IDE, email client, etc.)
- **OUT-005**: Package management (apt, yum, etc.)
- **OUT-006**: System administration tasks (user management, services)
- **OUT-007**: Real-time collaboration
- **OUT-008**: Mobile device support (tablet/phone)
- **OUT-009**: Save/load session state
- **OUT-010**: Multiple Linux distributions or desktop environments

---

## 9. Dependencies and Constraints

### 9.1 Technical Dependencies
- Modern web browser with JavaScript enabled
- No server-side infrastructure required (fully client-side)
- No external APIs or services required

### 9.2 Constraints
- Limited to browser capabilities (no native OS access)
- File system is virtual and isolated
- No real process execution (simulated command execution)
- Performance limited by browser JavaScript engine

---

## 10. Implementation Phases

### Phase 1: Core Desktop Environment (MVP)
- Basic desktop UI with wallpaper and taskbar
- Mouse cursor rendering and basic interactions
- Window management system
- Basic application launcher

### Phase 2: File Browser
- File browser application
- Virtual file system implementation
- File navigation and viewing
- Basic file operations

### Phase 3: Terminal
- Terminal application UI
- Command parser and interpreter
- Core Linux command implementations
- Command history and output rendering

### Phase 4: Web Browser
- Web browser application UI
- Basic web page rendering
- Navigation and address bar

### Phase 5: Hacking Challenge
- Flag file placement and hiding
- Hint system
- Challenge completion detection
- Success/failure feedback

### Phase 6: Polish and Enhancement
- UI/UX refinements
- Performance optimization
- Additional commands and features
- Testing and bug fixes

---

## 11. Success Criteria

The product will be considered successful if:

1. ✅ Users can successfully open and interact with all core applications
2. ✅ Terminal commands execute correctly and produce expected output
3. ✅ File browser allows navigation and file viewing
4. ✅ Web browser displays content and allows navigation
5. ✅ Users can complete the hacking challenge using provided tools
6. ✅ Application runs smoothly in target browsers
7. ✅ No critical bugs or performance issues
8. ✅ User feedback indicates positive learning experience

---

## 12. Open Questions and Decisions Needed

1. **Desktop Environment Choice**: Which Linux desktop environment to replicate? (GNOME, KDE, XFCE)
2. **Technology Stack**: Which frontend framework to use? (React, Vue, vanilla JS)
3. **File System Complexity**: How detailed should the virtual file system be?
4. **Command Support**: Which commands are essential vs. nice-to-have?
5. **Challenge Difficulty**: What should be the default difficulty level?
6. **Deployment**: Where will the application be hosted? (GitHub Pages, Netlify, Vercel)
7. **Analytics**: Should we track user interactions for improvement?

---

## 13. Appendix

### 13.1 Glossary
- **PRD**: Product Requirements Document
- **CTF**: Capture The Flag (hacking challenge)
- **VFS**: Virtual File System
- **CLI**: Command Line Interface
- **GUI**: Graphical User Interface

### 13.2 References
- Linux Filesystem Hierarchy Standard
- Common Linux commands documentation
- Web accessibility guidelines (WCAG)

---

**Document Owner**: Product Team  
**Last Updated**: [Date]  
**Next Review Date**: [Date + 1 month]

```


Created a PRD for your interactive Linux remote desktop web application. The document includes:

## Key Sections:

1. **Executive Summary** - Product vision and overview
2. **Goals & Objectives** - Primary goals and success metrics
3. **Target Users** - User personas and use cases
4. **Core Features** - Detailed requirements for:
   - Desktop environment (visual design, mouse interaction)
   - File browser application
   - Web browser application
   - Terminal application with Linux commands
   - Hacking challenge mechanics
5. **Technical Requirements** - Architecture, file system simulation, performance specs
6. **User Stories** - User perspective requirements
7. **UI/UX Requirements** - Design and interaction guidelines
8. **Implementation Phases** - 6-phase development roadmap
9. **Out of Scope** - Features deferred to future versions

## Highlights:

- **106 detailed requirements** (REQ-001 through REQ-103) covering functionality
- **15 user stories** (US-001 through US-015) from the user perspective
- **6-phase implementation plan** from MVP to polish
- **Hacking challenge specifications** with flag placement and hint systems
- **Technical architecture** considerations for a client-side web application

The PRD is ready for review and can guide development. Should I:
1. Create additional documentation (technical design, API specs)?
2. Start implementing any specific component?
3. Expand any section with more detail?

---

**User**

Start implementing the web application based on the PRD. For wallpaper assets within the Linux desktop, you can use the UWEcyber wallpaper available at https://github.com/uwe-cyber/wallpaper/blob/main/UWEcyber-desktop-red.png 

---

**Cursor**


Creating the initial todo list and starting implementation. Setting up the project structure and core components.


```json
{
  "name": "linux-desktop-simulator",
  "version": "1.0.0",
  "description": "Interactive Linux remote desktop web application with hacking challenge",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}

```

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Linux Desktop Simulator - Hacking Challenge</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      overflow: hidden;
      height: 100vh;
      width: 100vw;
    }
    
    #root {
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>

```

```ignore
node_modules
dist
.DS_Store
*.log
.env
.env.local

```


Creating the core application structure and components:


```javascriptreact
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

```

```javascriptreact
import React from 'react'
import Desktop from './components/Desktop'

function App() {
  return <Desktop />
}

export default App

```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  user-select: none;
}

```

```javascript
// Virtual File System Implementation
// Simulates a Linux file system structure

class VirtualFileSystem {
  constructor() {
    this.fs = {
      '/': {
        type: 'directory',
        name: '/',
        path: '/',
        children: {},
        permissions: 'drwxr-xr-x',
        owner: 'root',
        modified: new Date().toISOString()
      }
    }
    this.currentUser = 'user'
    this.currentDir = '/home/user'
    this.initializeFileSystem()
  }

  initializeFileSystem() {
    // Create standard Linux directories
    const directories = [
      '/home',
      '/home/user',
      '/home/user/Documents',
      '/home/user/Downloads',
      '/home/user/Desktop',
      '/home/user/Pictures',
      '/etc',
      '/etc/systemd',
      '/var',
      '/var/log',
      '/var/tmp',
      '/usr',
      '/usr/bin',
      '/usr/lib',
      '/tmp',
      '/root',
      '/root/.ssh',
      '/opt',
      '/opt/software',
      '/proc',
      '/sys',
      '/boot',
      '/dev'
    ]

    directories.forEach(dir => {
      this.createDirectory(dir)
    })

    // Create some files
    this.createFile('/home/user/Documents/readme.txt', 'Welcome to the Linux Desktop Simulator!\n\nThis is a virtual Linux environment. Explore the system and find the hidden flag.\n\nHint: The flag might be in an unexpected location.')
    this.createFile('/home/user/Desktop/welcome.txt', 'Welcome to your desktop!')
    this.createFile('/etc/hostname', 'linux-simulator')
    this.createFile('/etc/passwd', 'root:x:0:0:root:/root:/bin/bash\nuser:x:1000:1000:user:/home/user:/bin/bash')
    this.createFile('/var/log/system.log', 'System initialized\nServices started\nNetwork configured')
    this.createFile('/tmp/temp_file.txt', 'This is a temporary file')
    this.createFile('/root/.bashrc', '# Root bash configuration\n# Custom settings here')
    
    // Create the flag file in a hidden location
    // Hidden in /opt/software/.config/flag.txt
    this.createDirectory('/opt/software/.config')
    this.createFile('/opt/software/.config/flag.txt', 'FLAG{linux_desktop_simulator_2024}')
    
    // Add some more realistic files
    this.createFile('/home/user/.bash_history', 'ls\ncd Documents\ncat readme.txt\npwd')
    this.createFile('/home/user/.profile', '# User profile configuration')
    this.createFile('/usr/bin/README', 'System binaries directory')
    this.createFile('/var/log/auth.log', 'Authentication log entries would appear here')
    
    // Add a hint file
    this.createFile('/home/user/Documents/hint.txt', 'Sometimes important files are hidden in software directories...')
  }

  createDirectory(path) {
    const parts = path.split('/').filter(p => p)
    let current = this.fs['/']
    
    let currentPath = '/'
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      currentPath = currentPath === '/' ? `/${part}` : `${currentPath}/${part}`
      
      if (!current.children[part]) {
        current.children[part] = {
          type: 'directory',
          name: part,
          path: currentPath,
          children: {},
          permissions: 'drwxr-xr-x',
          owner: currentPath.startsWith('/root') ? 'root' : this.currentUser,
          modified: new Date().toISOString()
        }
      }
      current = current.children[part]
    }
  }

  createFile(path, content = '') {
    const parts = path.split('/').filter(p => p)
    const fileName = parts.pop()
    const dirPath = '/' + parts.join('/')
    
    // Ensure directory exists
    if (dirPath !== '/') {
      this.createDirectory(dirPath)
    }
    
    const dir = this.getNode(dirPath)
    if (dir && dir.type === 'directory') {
      dir.children[fileName] = {
        type: 'file',
        name: fileName,
        path: path,
        content: content,
        permissions: '-rw-r--r--',
        owner: path.startsWith('/root') ? 'root' : this.currentUser,
        size: content.length,
        modified: new Date().toISOString()
      }
    }
  }

  getNode(path) {
    if (path === '/') return this.fs['/']
    
    const parts = path.split('/').filter(p => p)
    let current = this.fs['/']
    
    for (const part of parts) {
      if (!current.children[part]) {
        return null
      }
      current = current.children[part]
    }
    
    return current
  }

  listDirectory(path) {
    const node = this.getNode(path)
    if (!node || node.type !== 'directory') {
      return null
    }
    
    const entries = Object.values(node.children).map(child => ({
      name: child.name,
      type: child.type,
      path: child.path,
      permissions: child.permissions,
      owner: child.owner,
      size: child.size || 0,
      modified: child.modified
    }))
    
    // Sort: directories first, then files, both alphabetically
    return entries.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'directory' ? -1 : 1
      }
      return a.name.localeCompare(b.name)
    })
  }

  readFile(path) {
    const node = this.getNode(path)
    if (!node || node.type !== 'file') {
      return null
    }
    return node.content
  }

  getAbsolutePath(path, currentDir = this.currentDir) {
    if (path.startsWith('/')) {
      return path
    }
    
    // Handle ~ expansion
    if (path.startsWith('~')) {
      return '/home/user' + path.slice(1)
    }
    
    // Handle relative paths
    if (currentDir === '/') {
      return '/' + path
    }
    
    const parts = currentDir.split('/').filter(p => p)
    const pathParts = path.split('/').filter(p => p)
    
    for (const part of pathParts) {
      if (part === '.') {
        continue
      } else if (part === '..') {
        parts.pop()
      } else {
        parts.push(part)
      }
    }
    
    return '/' + parts.join('/')
  }

  findFile(name, startPath = '/') {
    const results = []
    
    const search = (path) => {
      const node = this.getNode(path)
      if (!node) return
      
      if (node.type === 'directory') {
        for (const child of Object.values(node.children)) {
          if (child.name === name || child.name.includes(name)) {
            results.push(child.path)
          }
          if (child.type === 'directory') {
            search(child.path)
          }
        }
      }
    }
    
    search(startPath)
    return results
  }

  checkFlag(path) {
    const node = this.getNode(path)
    if (node && node.type === 'file' && node.path === '/opt/software/.config/flag.txt') {
      const content = this.readFile(path)
      if (content && content.includes('FLAG{')) {
        return content.match(/FLAG\{[^}]+\}/)?.[0]
      }
    }
    return null
  }
}

export default VirtualFileSystem

```

```javascript
// Command Interpreter for Terminal
// Parses and executes Linux commands

class CommandInterpreter {
  constructor(vfs) {
    this.vfs = vfs
    this.history = []
    this.historyIndex = -1
    this.environment = {
      HOME: '/home/user',
      USER: 'user',
      PATH: '/usr/bin:/bin:/usr/local/bin',
      PWD: '/home/user',
      SHELL: '/bin/bash'
    }
  }

  execute(command, args = []) {
    const cmd = command.toLowerCase()
    this.history.push(command + (args.length > 0 ? ' ' + args.join(' ') : ''))
    this.historyIndex = this.history.length

    switch (cmd) {
      case 'ls':
        return this.ls(args)
      case 'cd':
        return this.cd(args)
      case 'pwd':
        return this.pwd()
      case 'cat':
        return this.cat(args)
      case 'grep':
        return this.grep(args)
      case 'find':
        return this.find(args)
      case 'whoami':
        return this.whoami()
      case 'mkdir':
        return this.mkdir(args)
      case 'touch':
        return this.touch(args)
      case 'rm':
        return this.rm(args)
      case 'cp':
        return this.cp(args)
      case 'mv':
        return this.mv(args)
      case 'clear':
        return { output: '', clear: true }
      case 'history':
        return this.historyCmd()
      case 'echo':
        return this.echo(args)
      case 'which':
        return this.which(args)
      case 'ps':
        return this.ps()
      case 'df':
        return this.df()
      case 'du':
        return this.du(args)
      case 'help':
        return this.help()
      default:
        return { output: `bash: ${command}: command not found\nTry 'help' for a list of available commands.`, error: true }
    }
  }

  ls(args) {
    const path = args[0] || this.environment.PWD
    const absPath = this.vfs.getAbsolutePath(path, this.environment.PWD)
    const entries = this.vfs.listDirectory(absPath)
    
    if (entries === null) {
      return { output: `ls: cannot access '${path}': No such file or directory`, error: true }
    }
    
    const showHidden = args.includes('-a') || args.includes('--all')
    const longFormat = args.includes('-l')
    
    let filtered = entries
    if (!showHidden) {
      filtered = entries.filter(e => !e.name.startsWith('.'))
    }
    
    if (longFormat) {
      const lines = filtered.map(e => {
        const size = e.type === 'file' ? (e.size || 0).toString().padStart(8) : '        '
        return `${e.permissions} ${e.owner.padEnd(8)} ${size} ${e.modified.split('T')[0]} ${e.name}${e.type === 'directory' ? '/' : ''}`
      })
      return { output: lines.join('\n') }
    }
    
    const names = filtered.map(e => e.name + (e.type === 'directory' ? '/' : ''))
    return { output: names.join('  ') }
  }

  cd(args) {
    const path = args[0] || this.environment.HOME
    const absPath = this.vfs.getAbsolutePath(path, this.environment.PWD)
    const node = this.vfs.getNode(absPath)
    
    if (!node) {
      return { output: `bash: cd: ${path}: No such file or directory`, error: true }
    }
    
    if (node.type !== 'directory') {
      return { output: `bash: cd: ${path}: Not a directory`, error: true }
    }
    
    this.environment.PWD = absPath
    return { output: '', updatePWD: absPath }
  }

  pwd() {
    return { output: this.environment.PWD }
  }

  cat(args) {
    if (args.length === 0) {
      return { output: 'cat: missing file operand', error: true }
    }
    
    const path = this.vfs.getAbsolutePath(args[0], this.environment.PWD)
    const content = this.vfs.readFile(path)
    
    if (content === null) {
      return { output: `cat: ${args[0]}: No such file or directory`, error: true }
    }
    
    // Check for flag
    const flag = this.vfs.checkFlag(path)
    if (flag) {
      return { output: content, flag: flag }
    }
    
    return { output: content }
  }

  grep(args) {
    if (args.length < 2) {
      return { output: 'grep: missing pattern or file', error: true }
    }
    
    const pattern = args[0]
    const path = this.vfs.getAbsolutePath(args[1], this.environment.PWD)
    const content = this.vfs.readFile(path)
    
    if (content === null) {
      return { output: `grep: ${args[1]}: No such file or directory`, error: true }
    }
    
    const lines = content.split('\n')
    const matches = lines.filter(line => line.includes(pattern))
    
    return { output: matches.join('\n') || `grep: no matches found for '${pattern}'` }
  }

  find(args) {
    if (args.length < 2) {
      return { output: 'find: missing path or expression', error: true }
    }
    
    const startPath = args[0] === '.' ? this.environment.PWD : this.vfs.getAbsolutePath(args[0], this.environment.PWD)
    const name = args[1] === '-name' ? args[2] : args[1]
    
    if (!name) {
      return { output: 'find: missing argument to -name', error: true }
    }
    
    const results = this.vfs.findFile(name.replace(/\*/g, ''), startPath)
    
    if (results.length === 0) {
      return { output: '' }
    }
    
    return { output: results.join('\n') }
  }

  whoami() {
    return { output: this.environment.USER }
  }

  mkdir(args) {
    if (args.length === 0) {
      return { output: 'mkdir: missing operand', error: true }
    }
    
    const path = this.vfs.getAbsolutePath(args[0], this.environment.PWD)
    this.vfs.createDirectory(path)
    return { output: '' }
  }

  touch(args) {
    if (args.length === 0) {
      return { output: 'touch: missing file operand', error: true }
    }
    
    const path = this.vfs.getAbsolutePath(args[0], this.environment.PWD)
    this.vfs.createFile(path, '')
    return { output: '' }
  }

  rm(args) {
    // Simplified - in real implementation would delete from vfs
    return { output: 'rm: operation not fully implemented in simulator', error: true }
  }

  cp(args) {
    // Simplified
    return { output: 'cp: operation not fully implemented in simulator', error: true }
  }

  mv(args) {
    // Simplified
    return { output: 'mv: operation not fully implemented in simulator', error: true }
  }

  historyCmd() {
    return { output: this.history.slice(-20).map((cmd, i) => `${i + 1}  ${cmd}`).join('\n') }
  }

  echo(args) {
    return { output: args.join(' ') }
  }

  which(args) {
    if (args.length === 0) {
      return { output: 'which: missing command name', error: true }
    }
    
    // Simulate finding commands in PATH
    const cmd = args[0]
    const commonCommands = ['ls', 'cd', 'pwd', 'cat', 'grep', 'find', 'whoami', 'mkdir', 'touch', 'rm', 'cp', 'mv', 'clear', 'history', 'echo', 'which', 'ps', 'df', 'du', 'help']
    
    if (commonCommands.includes(cmd)) {
      return { output: `/usr/bin/${cmd}` }
    }
    
    return { output: '' }
  }

  ps() {
    return { output: 'PID TTY          TIME CMD\n  1 ?        00:00:00 init\n  2 ?        00:00:00 bash\n  3 ?        00:00:00 systemd' }
  }

  df() {
    return { output: 'Filesystem     1K-blocks  Used Available Use% Mounted on\n/dev/sda1       10485760  2048  10483712   1% /\n/dev/sda2       52428800  1024  52427776   1% /home' }
  }

  du(args) {
    return { output: '4096\t/home/user' }
  }

  help() {
    const commands = [
      'Available commands:',
      '  ls [path]          - List directory contents',
      '  cd [path]          - Change directory',
      '  pwd                - Print working directory',
      '  cat <file>         - Display file contents',
      '  grep <pattern> <file> - Search for pattern in file',
      '  find <path> -name <pattern> - Find files',
      '  whoami             - Display current user',
      '  mkdir <dir>        - Create directory',
      '  touch <file>       - Create empty file',
      '  clear              - Clear terminal',
      '  history            - Show command history',
      '  echo <text>        - Print text',
      '  which <command>    - Locate command',
      '  ps                 - Show processes',
      '  df                 - Show disk usage',
      '  du [path]          - Show directory size',
      '  help               - Show this help message',
      '',
      'Hacking Challenge:',
      '  Find the hidden flag file somewhere in the system!',
      '  Use commands like find, grep, and cat to explore.'
    ]
    return { output: commands.join('\n') }
  }

  getHistory(direction) {
    if (direction === 'up') {
      if (this.historyIndex > 0) {
        this.historyIndex--
      }
    } else if (direction === 'down') {
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++
      } else {
        this.historyIndex = this.history.length
        return ''
      }
    }
    
    if (this.historyIndex >= 0 && this.historyIndex < this.history.length) {
      return this.history[this.historyIndex]
    }
    return ''
  }
}

export default CommandInterpreter

```


Creating the Desktop component and window management system:


```javascriptreact
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

```

```css
.desktop {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #2d2d2d;
}

.desktop-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.desktop-icons {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.desktop-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.2s;
  user-select: none;
}

.desktop-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.desktop-icon .icon-folder,
.desktop-icon .icon-terminal,
.desktop-icon .icon-browser {
  font-size: 48px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.desktop-icon span {
  color: white;
  font-size: 12px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.flag-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.flag-modal-content {
  background: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.flag-modal-content h2 {
  margin-bottom: 20px;
  color: #2d2d2d;
}

.flag-text {
  font-family: 'Courier New', monospace;
  font-size: 24px;
  font-weight: bold;
  color: #d32f2f;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  margin: 20px 0;
  word-break: break-all;
}

.flag-modal-content button {
  margin-top: 20px;
  padding: 10px 30px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.flag-modal-content button:hover {
  background: #45a049;
}

```

```javascriptreact
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

```

```javascriptreact
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

  const handleMinimize = () => {
    onUpdate({ minimized: !window.minimized })
  }

  const handleMaximize = () => {
    if (window.maximized) {
      onUpdate({ 
        maximized: false,
        x: window.previousX || 100,
        y: window.previousY || 100,
        width: window.previousWidth || 800,
        height: window.previousHeight || 500
      })
    } else {
      onUpdate({
        previousX: window.x,
        previousY: window.y,
        previousWidth: window.width,
        previousHeight: window.height,
        maximized: true,
        x: 0,
        y: 0,
        width: window.innerWidth || 1920,
        height: (window.innerHeight || 1080) - 40 // Account for taskbar
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
          <button className="window-control close" onClick={onClose} title="Close">×</button>
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

```

```css
.window {
  position: absolute;
  background: white;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 400px;
  min-height: 300px;
}

.window.active {
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
}

.window-header {
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  cursor: move;
  user-select: none;
  border-bottom: 1px solid #ccc;
}

.window.active .window-header {
  background: linear-gradient(to bottom, #4a9eff, #3a8eef);
  color: white;
}

.window-title {
  font-size: 13px;
  font-weight: 500;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.window-controls {
  display: flex;
  gap: 5px;
}

.window-control {
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
  transition: background 0.2s;
  color: inherit;
}

.window-control:hover {
  background: rgba(0, 0, 0, 0.2);
}

.window-control.close:hover {
  background: #e74c3c;
  color: white;
}

.window-content {
  flex: 1;
  overflow: hidden;
  background: white;
}

.window-resize-handle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: nwse-resize;
  background: linear-gradient(135deg, transparent 0%, transparent 40%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, transparent 60%);
}

```

```javascriptreact
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

```

```css
.taskbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(to bottom, #3a3a3a, #2a2a2a);
  border-top: 1px solid #1a1a1a;
  display: flex;
  align-items: center;
  padding: 0 10px;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

.taskbar-start {
  display: flex;
  align-items: center;
}

.taskbar-app-menu {
  width: 40px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: background 0.2s;
}

.taskbar-app-menu:hover {
  background: rgba(255, 255, 255, 0.2);
}

.taskbar-windows {
  flex: 1;
  display: flex;
  gap: 5px;
  margin: 0 10px;
  overflow-x: auto;
}

.taskbar-window {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
  min-width: 120px;
}

.taskbar-window:hover {
  background: rgba(255, 255, 255, 0.15);
}

.taskbar-window.active {
  background: rgba(74, 158, 255, 0.8);
}

.taskbar-icon {
  font-size: 16px;
}

.taskbar-title {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.taskbar-end {
  display: flex;
  align-items: center;
}

.taskbar-time {
  color: white;
  font-size: 12px;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

```


Creating the FileBrowser, Terminal, and WebBrowser components:


```javascriptreact
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

```

```css
.file-browser {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f5f5f5;
}

.file-browser-toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #e8e8e8;
  border-bottom: 1px solid #ccc;
}

.file-browser-toolbar button {
  padding: 5px 10px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
}

.file-browser-toolbar button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.file-browser-path {
  flex: 1;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 12px;
}

.file-browser-hidden {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  cursor: pointer;
}

.file-browser-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.file-browser-list {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background: white;
}

.file-browser-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.2s;
}

.file-browser-item:hover {
  background: #f0f0f0;
}

.file-browser-item.selected {
  background: #e3f2fd;
}

.file-icon {
  font-size: 20px;
  width: 24px;
  text-align: center;
}

.file-name {
  flex: 1;
  font-size: 13px;
}

.file-size {
  font-size: 11px;
  color: #666;
}

.file-browser-empty {
  padding: 20px;
  text-align: center;
  color: #999;
}

.file-browser-preview {
  width: 400px;
  border-left: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  background: white;
}

.file-preview-header {
  padding: 10px;
  background: #f5f5f5;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.file-preview-header span:first-child {
  font-weight: bold;
  font-size: 14px;
}

.file-preview-path {
  font-size: 11px;
  color: #666;
  font-family: monospace;
}

.file-preview-content {
  flex: 1;
  overflow: auto;
  padding: 10px;
}

.file-preview-content pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

```

```javascriptreact
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

```

```css
.terminal {
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  color: #d4d4d4;
  font-family: 'Courier New', 'Consolas', monospace;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.terminal-output {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.terminal-line {
  margin-bottom: 2px;
  word-wrap: break-word;
}

.terminal-line.error {
  color: #f48771;
}

.terminal-line pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.terminal-flag-found {
  background: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  font-weight: bold;
  text-align: center;
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.terminal-input-line {
  display: flex;
  align-items: center;
  margin-top: auto;
}

.terminal-prompt {
  color: #4ec9b0;
  margin-right: 5px;
  user-select: none;
}

.terminal-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #d4d4d4;
  font-family: 'Courier New', 'Consolas', monospace;
  font-size: 14px;
  outline: none;
}

.terminal-input::selection {
  background: #264f78;
}

/* Scrollbar styling */
.terminal-output::-webkit-scrollbar {
  width: 10px;
}

.terminal-output::-webkit-scrollbar-track {
  background: #1e1e1e;
}

.terminal-output::-webkit-scrollbar-thumb {
  background: #424242;
  border-radius: 5px;
}

.terminal-output::-webkit-scrollbar-thumb:hover {
  background: #4e4e4e;
}

```

```javascriptreact
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

```

```css
.web-browser {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
}

.web-browser-toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #f5f5f5;
  border-bottom: 1px solid #ccc;
}

.web-browser-controls {
  display: flex;
  gap: 5px;
}

.web-browser-controls button {
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: background 0.2s;
}

.web-browser-controls button:hover:not(:disabled) {
  background: #e8e8e8;
}

.web-browser-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.web-browser-url {
  flex: 1;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 13px;
}

.web-browser-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: white;
}

.web-content {
  max-width: 800px;
  margin: 0 auto;
}

.web-content h1 {
  color: #333;
  margin-bottom: 20px;
}

.web-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.hint-box {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 5px;
  padding: 20px;
  margin: 20px 0;
}

.hint-box h2 {
  color: #856404;
  margin-bottom: 15px;
}

.hint-box ul {
  color: #856404;
  margin-left: 20px;
  margin-bottom: 15px;
}

.hint-box li {
  margin-bottom: 8px;
}

.hint-box code {
  background: rgba(0, 0, 0, 0.1);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}

.link-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.web-link {
  padding: 10px 20px;
  background: #4a9eff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.web-link:hover {
  background: #3a8eef;
}

```


Fixing window dimension handling and adding a README:


```javascriptreact
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

  const handleMinimize = () => {
    onUpdate({ minimized: !window.minimized })
  }

  const handleMaximize = () => {
    if (window.maximized) {
      onUpdate({ 
        maximized: false,
        x: window.previousX || 100,
        y: window.previousY || 100,
        width: window.previousWidth || 800,
        height: window.previousHeight || 500
      })
    } else {
      onUpdate({
        previousX: window.x,
        previousY: window.y,
        previousWidth: window.width,
        previousHeight: window.height,
        maximized: true,
        x: 0,
        y: 0,
        width: window.innerWidth || 1920,
        height: (window.innerHeight || 1080) - 40 // Account for taskbar
      })
    }
  }

  // Get window dimensions from global window object
  const getWindowDimensions = () => {
    return {
      width: typeof window !== 'undefined' ? window.innerWidth : 1920,
      height: typeof window !== 'undefined' ? window.innerHeight : 1080
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
          <button className="window-control close" onClick={onClose} title="Close">×</button>
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


```

```javascriptreact
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

  const handleMinimize = () => {
    onUpdate({ minimized: !window.minimized })
  }

  const handleMaximize = () => {
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

  // Get window dimensions from global window object
  const getWindowDimensions = () => {
    return {
      width: typeof window !== 'undefined' ? window.innerWidth : 1920,
      height: typeof window !== 'undefined' ? window.innerHeight : 1080
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
          <button className="window-control close" onClick={onClose} title="Close">×</button>
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


```


Creating a README with setup instructions:


```markdown
# Linux Desktop Simulator - Hacking Challenge

An interactive web application that simulates a Linux remote desktop environment with a built-in capture-the-flag hacking challenge.

## Features

- **Full Linux Desktop Experience**: Complete desktop environment with wallpaper, taskbar, and window management
- **File Browser**: Navigate the virtual Linux file system, view files, and explore directories
- **Terminal**: Execute Linux commands including `ls`, `cd`, `cat`, `grep`, `find`, and more
- **Web Browser**: Browse web content with hints for the hacking challenge
- **Hacking Challenge**: Find the hidden flag file somewhere in the system!

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## How to Use

### Opening Applications

- Click on the desktop icons to open applications:
  - **Files**: Opens the file browser
  - **Terminal**: Opens the terminal
  - **Browser**: Opens the web browser

### File Browser

- Double-click folders to navigate
- Click files to view their contents in the preview pane
- Use the path bar to navigate directly to a location
- Check "Show Hidden" to see files starting with `.`

### Terminal

- Type Linux commands and press Enter to execute
- Use arrow keys (↑/↓) to navigate command history
- Available commands:
  - `ls [path]` - List directory contents
  - `cd [path]` - Change directory
  - `pwd` - Print working directory
  - `cat <file>` - Display file contents
  - `grep <pattern> <file>` - Search for pattern in file
  - `find <path> -name <pattern>` - Find files
  - `whoami` - Display current user
  - `help` - Show all available commands

### Hacking Challenge

Your goal is to find the hidden flag file in the system. The flag is in the format `FLAG{...}`.

**Hints:**
- Important files are often hidden in configuration directories
- Use the `find` command to search for files by name
- Hidden files start with a dot (.)
- Check software and configuration directories
- Use `grep` to search file contents
- The web browser has a hints page you can access

**Finding the Flag:**
1. Explore the file system using the file browser or terminal
2. Look for hidden directories (they start with `.`)
3. Use terminal commands like `find` to search for files
4. When you find and open the flag file, you'll see a success message!

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Desktop.jsx     # Main desktop component
│   │   ├── Window.jsx      # Window management
│   │   ├── Taskbar.jsx     # Taskbar component
│   │   ├── FileBrowser.jsx # File browser app
│   │   ├── Terminal.jsx    # Terminal app
│   │   └── WebBrowser.jsx  # Web browser app
│   ├── utils/
│   │   ├── virtualFileSystem.js    # Virtual file system
│   │   └── commandInterpreter.js   # Command interpreter
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Technical Details

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS modules
- **File System**: Virtual file system implemented in JavaScript
- **Commands**: Custom command interpreter with Linux command support

## License

This project is created for educational purposes.

## Credits

- Wallpaper: [UWE Cyber Wallpaper](https://github.com/uwe-cyber/wallpaper)

```


Fixing the Window component to use the helper function correctly:



Moving the function definition before it's used:


```javascriptreact
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

  const handleMinimize = () => {
    onUpdate({ minimized: !window.minimized })
  }

  // Get window dimensions from global window object
  const getWindowDimensions = () => {
    return {
      width: typeof window !== 'undefined' ? window.innerWidth : 1920,
      height: typeof window !== 'undefined' ? window.innerHeight : 1080
    }
  }

  const handleMaximize = () => {
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
          <button className="window-control close" onClick={onClose} title="Close">×</button>
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


```


Checking the Desktop component for window dimension issues:



## Implementation complete

### Core features

1. Desktop environment
   - UWE Cyber wallpaper (from GitHub)
   - Desktop icons for Files, Terminal, and Browser
   - Taskbar with window management and clock
   - Window controls (minimize, maximize, close, drag, resize)

2. Virtual file system
   - Linux directory structure (`/home`, `/etc`, `/var`, `/usr`, `/tmp`, `/root`, `/opt`)
   - Hidden flag file at `/opt/software/.config/flag.txt`
   - Realistic files and directories

3. File browser
   - Navigate directories
   - View file contents
   - Show/hide hidden files
   - Path bar for direct navigation
   - File preview pane

4. Terminal
   - Linux command interpreter
   - Commands: `ls`, `cd`, `pwd`, `cat`, `grep`, `find`, `whoami`, `mkdir`, `touch`, `history`, `help`, and more
   - Command history (arrow keys)
   - Colored output and error handling
   - Flag detection when viewing the flag file

5. Web browser
   - Navigation controls
   - Hints page for the hacking challenge
   - Example content

6. Hacking challenge
   - Flag file hidden in the system
   - Success modal when flag is found
   - Hints available in the web browser

### Getting started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

### Project structure

- React 18 with Vite
- Component-based architecture
- Virtual file system in JavaScript
- Custom command interpreter
- CSS styling for Linux desktop look

The application is ready to use. Users can explore the Linux desktop, use the terminal, browse files, and search for the hidden flag file. The flag is located at `/opt/software/.config/flag.txt` and can be found using commands like `find`, `grep`, or by navigating through the file browser with hidden files enabled.

```shellscript
   npm install
```

```shellscript
   npm run dev
```

---

**User**

Run my web app

---

**Cursor**


Installing dependencies, then starting the development server.



Starting the development server:



Checking if the dev server is running:



**Web application is running.**

The development server is available at:

**http://localhost:3000**

Open this URL in your browser to use the Linux Desktop Simulator.

### What you can do:
1. Click desktop icons to open:
   - Files (File Browser)
   - Terminal
   - Browser
2. Explore the file system and find the hidden flag file
3. Use terminal commands like `find`, `grep`, and `cat` to search for the flag
4. Check the web browser for hints

The flag file is hidden somewhere in the system. When you find it, a success message will appear.

The server is running in the background. To stop it, press `Ctrl+C` in the terminal or close the terminal window.

---

**User**

This works well so far. A minor tweak - for each desktop window, when clicking the X in the top right corner the selected window should close.

---

**Cursor**


Checking the Window component's close button implementation:



The close button click is bubbling to the window container. Adding `stopPropagation` to the close handler (and to minimize/maximize for consistency):


```javascriptreact
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

  const handleMaximize = () => {
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
          <button className="window-control close" onClick={onClose} title="Close">×</button>
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


```

```javascriptreact
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
          <button className="window-control close" onClick={onClose} title="Close">×</button>
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


```

```javascriptreact
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


```


Updating the header drag handler to ignore clicks on control buttons:


```javascriptreact
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


```


Fixed the close button. The click was bubbling to the window container. Changes:

1. Added a `handleClose` function that stops event propagation before closing
2. Updated minimize and maximize handlers to stop propagation
3. Updated the header drag handler to ignore clicks on window control buttons

Clicking the X (×) in the top right corner now closes the window. The dev server should hot-reload the changes automatically, so you can test it right away.

