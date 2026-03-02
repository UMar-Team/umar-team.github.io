# UMar Team Website

Website of the **UMar – University of Minho Aquatic Racing Team**.

## Running Locally

This project is built with **React + Vite + TailwindCSS**. To run it locally:

1. **Clone the repository**:

```bash
git clone git@github.com:UMar-Team/umar-team.github.io.git
cd umar-team.github.io
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm run dev
```

The website will be available at `http://localhost:5173`.

---

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

---

## Deployment

This project uses **GitHub Pages** for hosting.

- **Automatic deployment**: The `predeploy` and `deploy` scripts in `package.json` handle the deployment to the `gh-pages` branch.
- **Homepage**: Ensure the `homepage` field in `package.json` points to the correct URL (e.g., `https://UMar-Team.github.io`).
