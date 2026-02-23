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

