# Vite Module Federation with HMR Proof of Concept

This repository demonstrates Hot Module Replacement (HMR) working between a host and remote application using Vite and Module Federation.

## Setup

1. Install dependencies:
```bash
npm run install:all
```

2. Run both applications:
```bash
npm run dev
```

Or run them separately in different terminals:
```bash
# Terminal 1
npm run dev:remote

# Terminal 2
npm run dev:host
```

## Testing HMR

1. Open http://localhost:5000 (host application)
2. You'll see:
   - A host counter button
   - A remote button component loaded from the remote app

3. Keep the browser open and edit `remote/src/Button.jsx`:
   - Change the button text
   - Modify the colors array
   - Update the component structure

4. Save the file and observe:
   - The remote component updates in the host app
   - The state (click count) is preserved
   - No page refresh occurs

## Key Features

- Host app at http://localhost:5000
- Remote app at http://localhost:5001
- Remote exposes a Button component
- Host consumes the Button component
- Full HMR support across federated modules
- State preservation during hot updates

## Architecture

- **Host**: Main application that consumes remote modules
- **Remote**: Provides the Button component
- Both apps use Vite + React + @originjs/vite-plugin-federation
- Shared dependencies: React and ReactDOM