
# Rahul Gajula — Portfolio Website

[![GitHub Pages](https://img.shields.io/badge/Live-Demo-brightgreen?logo=github)](https://rahulgajula.github.io/Portfolio)  [![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://react.dev)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A single-page, responsive web application that showcases my projects, skills, work experience, and education. Built with **React 18**, **Material UI v6**, and **styled‑components**, the site is deployed automatically to **GitHub Pages** on every push to `main`.

---

## ✨ Features

- **Interactive Home Page** with avatar, headline, and quick links to social profiles.
- **Dynamic Timeline** for work experience and education using Material UI’s `Timeline` component.
- **Project Gallery** featuring hover effects and external links to live demos & source code.
- **Skill Chips** grouped by languages, technologies, and tools.
- **Fully responsive** layout (mobile → desktop) with CSS-in-JS theming.
- **CI/CD**: `gh-pages` script builds & publishes the site on every commit.

## 🚀 Tech Stack

| Category     | Technologies                                         |
|--------------|------------------------------------------------------|
| Front-End    | React 18, JavaScript ES2023                          |
| UI Kit       | Material UI v6 (`@mui/*`), Emotion 11                |
| Styling      | `styled-components` 6, SCSS modules                  |
| Tooling      | `react-scripts`, ESLint, Prettier                    |
| Deployment   | GitHub Pages via `gh-pages` CLI                      |

## 📂 Project Structure

```

Portfolio/
├─ public/              # Static assets & index.html
├─ src/
│  ├─ components/       # Header, Footer, Navbar, Resume, Dialog\_Alert …
│  ├─ pages/            # HomePage.jsx (main landing page)
│  ├─ images/           # Optimised images & icons
│  ├─ App.js            # Route + layout wrapper
│  ├─ App.scss          # Global styles
│  └─ index.js          # ReactDOM render
├─ package.json         # Dependencies & scripts
└─ README.md            # <— you are here

````

## 🛠️ Local Development

```bash
# 1. Clone
$ git clone https://github.com/RahulGajula/Portfolio.git
$ cd Portfolio

# 2. Install deps (Node >= 18)
$ npm install

# 3. Run dev server
$ npm start
# App is served at http://localhost:3000 and reloads on save
````

### Available Scripts

| Command          | Purpose                                |
| ---------------- | -------------------------------------- |
| `npm start`      | Launch dev server with hot-reload      |
| `npm run build`  | Produce production build in `build/`   |
| `npm test`       | Run Jest + React Testing Library suite |
| `npm run deploy` | Build + push to the `gh-pages` branch  |

## 🌐 Deployment

The workflow is zero-config: `npm run deploy` triggers `predeploy` → `build` and publishes the `build/` directory to the `gh-pages` branch, which GitHub Pages serves at:

📍 **[https://rahulgajula.github.io/Portfolio](https://rahulgajula.github.io/Portfolio)**

## 📈 Roadmap / Planned Improvements

* [ ] Add dark-mode toggle with system preference detection.
* [ ] Integrate blog posts via Markdown/MDX.
* [ ] Lighthouse score ≥ 95 on mobile & desktop.
* [ ] End-to-end tests with Cypress.

## 🤝 Contributing

Pull requests are welcome! If you have a feature idea or find a bug:

1. Fork the project.
2. Create a feature branch (`git checkout -b feat/awesome`).
3. Commit your changes (`git commit -m 'Add awesome feature'`).
4. Push to the branch (`git push origin feat/awesome`).
5. Open a PR.

Please follow the existing code style and include unit tests where applicable.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📫 Contact

**Rahul Gajula** – [LinkedIn](https://www.linkedin.com/in/rahul-gajula-a5260318a) • [GitHub](https://github.com/RahulGajula)

> Built with passion and ☕ in Denton, TX.

```

---

Let me know if you'd like a version in `README.txt`, a badge for certifications, or to include preview screenshots!
```
