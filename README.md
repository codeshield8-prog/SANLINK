# SANLINK INFOTECH PRIVATE LIMITED — Corporate Website

A premium, corporate website for **SANLINK INFOTECH PRIVATE LIMITED**, a company
working in the **Telecommunication & Information Technology** sector.

Built with **React**, **Vite** and **Tailwind CSS** — no Next.js, no TypeScript,
no Bootstrap, no Material UI.

## Tech stack

- **React 18** (JavaScript, function components + hooks)
- **Vite** (dev server & build)
- **Tailwind CSS** (design system & responsive utilities)
- **react-router-dom** (multi-page routing)
- **react-icons** (professional icon set)

Animations are done with pure CSS + a lightweight `IntersectionObserver`
(`Reveal` component) and respect `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── assets/            # SANLINK logo assets (webp)
├── components/        # Reusable UI: Navbar, Footer, Hero, ServiceCard, ContactForm, …
├── pages/             # Home, About, Services, Industries, WhySanlink, Contact, legal, 404
├── utils/             # ScrollToTop
├── data.js            # Centralized site content & configuration
├── App.jsx            # Routes + layout
├── main.jsx           # App entry
└── index.css          # Tailwind layers + design tokens
```

## Branding

- The official **SANLINK logo** assets live in `src/assets/` and `public/`.
  They are used exactly as provided — never recoloured, restyled or reproportioned.
- Palette (drawn from the logo): deep navy, royal blue, bright blue, cyan accent, white.
- Fonts: **Manrope** (display) + **Inter** (body).

## Contact form

The contact form (`src/components/ContactForm.jsx`) includes full frontend
validation and success/error states. No backend is wired up — the submit handler
simulates the request. To go live, replace the marked block in `handleSubmit`
with a real API/email-service call using the `values` payload.

## Company details

- **Company:** SANLINK INFOTECH PRIVATE LIMITED
- **Phone:** 9993793152
- **Email:** sanlink294@gmail.com
