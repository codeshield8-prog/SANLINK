# SANLINK INFOTECH PRIVATE LIMITED — Corporate Website

A premium, **dark cinematic** corporate website for **SANLINK INFOTECH PRIVATE LIMITED**,
a company operating in **Information Technology & Telecommunications**.

Built with **React**, **Vite** and **Tailwind CSS** — no Next.js, no TypeScript, no
Bootstrap, no Material UI.

## Design direction

Dark, futuristic, enterprise technology aesthetic:

- Near-black base (`#07070B`) with dark surfaces
- Subtle indigo / violet / magenta **ambient glows** (no blue theme)
- White typography, muted cool-gray secondary text
- **SANLINK orange** (`#FF6B1A`) as the brand accent for CTAs, icons and highlights
- Fine technical grid, original SVG/CSS network visuals, subtle motion
- Fonts: **Manrope** (display) + **Inter** (body)

## Tech stack

- **React 18** (JavaScript, hooks) · **Vite** · **Tailwind CSS**
- **react-router-dom** (routing) · **react-icons** (icons)
- Animations: pure CSS + a lightweight `IntersectionObserver` (`Reveal`), all respecting
  `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview
```

## Pages & routes

- `/` Home — hero, trust strip, about, solutions, telecom flow, IT dashboard, key features,
  industries, capabilities, why sanlink, process, "Everything Connected" signature visual, FAQ, CTA
- `/about` · `/solutions` · `/industries` · `/capabilities` · `/contact`
- `/privacy-policy` · `/terms` · 404

## Project structure

```
src/
├── assets/            # SANLINK logo assets (webp) — used as provided, never recoloured
├── components/        # Navbar, Footer, Hero, NetworkVisual, ServiceCard/Modal, TelecomSection,
│                      # ITSection, Capabilities, Process, EverythingConnected, KeyFeatures, FAQ, …
├── pages/             # Home, About, Solutions, Industries, Capabilities, Contact, legal, 404
├── utils/             # ScrollToTop
├── data.js            # Centralized content & configuration
├── App.jsx · main.jsx · index.css
```

## Global features

- Scroll-progress bar, back-to-top button, smooth scrolling, active-nav highlighting,
  premium mobile menu, scroll-reveal animations.

## Branding

The official **SANLINK logo** (orange + charcoal) lives in `src/assets/` and `public/`.
Because the site is dark, the logo is presented on a clean white plate in the navbar and
footer so it stays crisp and legible — the artwork itself is never recoloured or filtered.

## Imagery

Visuals are **original SVG/CSS/React-generated** (hero network, telecom flow, IT dashboard,
the "Everything Connected" mesh, ambient glows) rather than stock photography — the premium
route for this dark aesthetic. To use real photos/renders instead, drop image files into
`src/assets/` and reference them in the relevant section, or wire up an image service.

## Contact form

`src/components/ContactForm.jsx` includes full frontend validation and success/error states.
No backend is wired up — the submit handler simulates the request. To go live, replace the
marked block in `handleSubmit` with a real API/email call using the `values` payload.

## Company details

- **Company:** SANLINK INFOTECH PRIVATE LIMITED
- **Industry:** Information Technology & Telecommunications
- **Phone:** 9993793152
- **Email:** sanlink294@gmail.com
