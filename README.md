# Portfolio – Ashish React

A personal portfolio website built with React and Vite, showcasing an about-me section, skills (with D3.js-powered charts), a timeline of experience, and a contact section. Deployed to GitHub Pages.

🔗 Live site: https://ashish185.github.io/portfolio-ashish-react/

## Tech Stack

- **React 18** – UI library
- **Vite** – build tool / dev server
- **Sass (SCSS)** – styling
- **D3.js** – skill/competency bar charts
- **gh-pages** – GitHub Pages deployment
- **ESLint** – linting

## Project Structure

```
portfolio-ashish-react/
├── public/                  # Static assets served as-is (images, gifs)
├── src/
│   ├── main.jsx             # App entry point, mounts React app
│   ├── App.jsx               # Root component, composes page sections
│   ├── app.scss              # Global app styles
│   ├── mixins.scss           # Shared Sass mixins
│   ├── constant.js           # Shared constants (section ids, etc.)
│   │
│   ├── components/
│   │   ├── animated/         # Animated text/button components
│   │   ├── connection/       # "Connection" UI component
│   │   ├── graphs/           # D3-based skill bar charts and data mappings
│   │   ├── hero/              # Hero/landing section
│   │   ├── icons/             # Icon component
│   │   ├── link/               # Link component
│   │   ├── navbar/            # Site navigation bar
│   │   ├── page/
│   │   │   ├── AboutMe/       # About Me section
│   │   │   ├── ContactMe/     # Contact Me section
│   │   │   └── Skills/         # Skills section (renders graphs)
│   │   ├── select/             # Select/dropdown component
│   │   ├── sidebar/            # Sidebar navigation
│   │   ├── svg/                 # SVG components (e.g. Robot)
│   │   ├── timeline/            # Experience timeline data & component
│   │   └── toggleButton/        # Theme/toggle button component
│   │
├── config.js / config.json   # Site configuration (e.g. resume link)
├── index.html                 # HTML entry point
├── vite.config.js             # Vite configuration
├── .eslintrc.cjs               # ESLint configuration
└── package.json                # Scripts & dependencies
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the code:

```bash
npm run lint
```

## Deployment

The site is deployed to GitHub Pages via `gh-pages`. To deploy:

```bash
npm run deploy
```

This runs `npm run build` first (via `predeploy`) and publishes the `dist` folder to the `gh-pages` branch.
