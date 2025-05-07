# 🧩 Custom React Hooks

A simple and interactive collection of custom React hooks with live demos. These reusable hooks help simplify common logic like localStorage persistence, debouncing input, detecting outside clicks, and tracking window size — all wrapped in a clean, minimal UI built with React, TypeScript, and Tailwind CSS.

## 📦 Features

- ✅ `useLocalStorage` – Sync state with `localStorage`
- ✅ `useDebounce` – Debounce a fast-changing value (like input)
- ✅ `useClickOutside` – Detect clicks outside a target element
- ✅ `useWindowSize` – Track window width and height

Each hook includes a demo component showcasing how to use it effectively in real-world scenarios.

---

## 🧩 Custom Hooks Overview

This project includes several reusable custom React hooks to enhance UI interactivity and state handling.

### 🔸 `useLocalStorage<T>(key, initialValue)`
Persists a state value in `localStorage` so it remains available even after the page is reloaded.

### 🔸 `useDebounce<T>(value, delay)`
Delays updates to a value until after a specified wait time. Great for reducing unnecessary API calls on every keystroke.

### 🔸 `useClickOutside<T>(handler)`
Triggers a callback when the user clicks or touches outside the referenced element. Commonly used to close modals, tooltips, or dropdowns.

### 🔸 `useWindowSize()`
Tracks and returns the current window dimensions (`width` and `height`), updating in real-time on window resize.

---

## Clone the repo
git clone https://github.com/your-username/react-hooks.git

## Live Link
https://custom-react-hooks-mu.vercel.app/

## Install dependencies
npm install

## Start development server
npm run dev
