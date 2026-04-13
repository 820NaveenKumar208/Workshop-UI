# Workshop Booking Frontend

A lightweight React frontend for the Workshop Booking website with routing and multiple pages.

## Install

1. Open a terminal in `frontend/`
2. Run `npm install`
3. Run `npm run dev`

## Structure

- `src/App.jsx` — main app with routing
- `src/pages/` — page components (Login, Register, Home)
- `src/components/` — reusable UI components
- `src/data/workshops.js` — example workshop data
- `src/styles.css` — modern mobile-first styling

## Pages

- `/` or `/login` — Login page with form validation
- `/register` — Registration page with validation
- `/home` — Home page with navbar, hero, workshops, footer

## Notes

- Uses React functional components, hooks, and React Router
- Includes responsive layout, mobile hamburger menu, and dark mode toggle
- Form validation with error states and loading indicators
- No heavy UI libraries or dependencies beyond React/Vite/React Router
