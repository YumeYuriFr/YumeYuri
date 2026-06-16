# 🌸 Yume Yuri

Your yuri sanctuary — a reference site to discover and explore yuri mangas and animes available in French.

Based on [AstroWind](https://github.com/arthelokyo/astrowind). All rights reserved to the original authors.

---

## Roadmap

### v1.0 — Release

- Home page
- Presentation page
- Yuri list (with pagination)
- Privacy page
- 404 page

### v1.1 — List improvements

- Yuri list layout update
- Search bar
- Filters (status, publisher, etc.)

### v1.2 — Anime page

- New page dedicated to anime adaptations

### v1.3 — Recommendations

- Recommendation section

### v1.4 — TBD

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:YumeYuriFR/YumeYuri.git
cd YumeYuri
npm install
```

### Run the dev server

```bash
npm run dev
```

The site will be available at `http://localhost:4321/YumeYuri/`.

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder and automatically deployed to GitHub Pages on push to `main`.

### Other commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local dev server           |
| `npm run build`   | Build the site for production        |
| `npm run preview` | Preview the production build locally |
| `npm run check`   | Run Astro type checking              |

---

## Contributing

Contributions are welcome!

Before submitting code, make sure everything passes:

```bash
npm run check
npx prettier --write .
npm run build
```
