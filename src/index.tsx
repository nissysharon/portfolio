// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';  // global styles

// 1) Grab the root element
const container = document.getElementById('root');
if (!container) throw new Error('Root container not found');

// 2) Create a React root
const root = createRoot(container);

// 3) Render your App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
