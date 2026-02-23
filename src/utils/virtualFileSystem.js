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

