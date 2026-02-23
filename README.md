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

