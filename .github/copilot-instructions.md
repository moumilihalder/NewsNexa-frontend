# Copilot Instructions for NewsNexa (React + Vite)

## Project Overview
- **Framework:** React (JSX) with Vite for fast development and HMR.
- **Entry Point:** `src/main.jsx` mounts the `App` component from `src/App.jsx`.
- **Static Assets:** Images and icons are in `src/assets/` and `public/`.
- **Styling:** CSS files are colocated with components (e.g., `App.css`).

## Developer Workflows
- **Start Dev Server:**
  ```sh
  npm run dev
  ```
  This launches Vite with hot module replacement (HMR).
- **Build for Production:**
  ```sh
  npm run build
  ```
- **Preview Production Build:**
  ```sh
  npm run preview
  ```
- **Linting:**
  ESLint is configured via `eslint.config.js`. Run:
  ```sh
  npm run lint
  ```

## Key Patterns & Conventions
- **Component Structure:**
  - Main UI logic is in `src/App.jsx`.
  - Use React hooks (`useState`, etc.) for state management.
  - Asset imports use relative paths (e.g., `import reactLogo from './assets/react.svg'`).
- **Routing:**
  - No router is present by default. Add React Router if navigation is needed.
- **External Dependencies:**
  - Vite plugins for React are referenced in the README, but not directly in code.
- **HMR:**
  - Editing files in `src/` triggers hot reloads automatically.

## Integration Points
- **Public Assets:**
  - Files in `public/` are served at the root URL (e.g., `/vite.svg`).
- **Vite Config:**
  - `vite.config.js` customizes build and dev server behavior if needed.

## Example: Adding a New Component
1. Create `src/MyComponent.jsx`:
   ```jsx
   import React from 'react';
   export default function MyComponent() {
     return <div>Hello from MyComponent!</div>;
   }
   ```
2. Import and use in `App.jsx`:
   ```jsx
   import MyComponent from './MyComponent';
   // ...existing code...
   <MyComponent />
   // ...existing code...
   ```

## References
- See `README.md` for official plugin links and ESLint expansion advice.
- For TypeScript, migrate using the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

---
**Update this file if you add new workflows, major dependencies, or architectural changes.**
