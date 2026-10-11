# Adyaa Khera — Robotics Engineering Portfolio

An Astro + TypeScript portfolio for Adyaa Khera, a Purdue University Robotics Engineering Technology student. The site is intentionally lightweight and editorial: project pages describe problem, architecture, implementation, results, and limitations without inventing private or unverified details.

The interactive 3D viewer surface and media-first project structure take cues from [MESGRO](https://github.com/aojedao/MESGRO), while this site uses Astro and keeps the implementation intentionally small.

## Local development

```bash
npm install
npm run dev
```

Build and preview the production output:

```bash
npm run build
npm run preview
```

## Adding project media

Project content lives in `src/data/projects.ts`. Add approved photographs to `public/images/` and approved GLB or glTF files to `public/models/<project-slug>/`, then set the media `src` to the public URL. Project pages use Google's `<model-viewer>` web component for keyboard- and pointer-friendly 3D viewing; the empty state is deliberate until a real model is available.

Only use media, metrics, publications, and research details that are public or explicitly approved for disclosure. Link to original repositories rather than copying source code into this site.

## GitHub Pages

The repository is configured as `AdyaaKhera.github.io`, so the site is served at the domain root and `base: '/'` is correct in `astro.config.mjs`. GitHub Actions builds the static `dist/` directory and deploys it with the official Pages artifact/deployment actions. In repository settings, set **Pages → Source** to **GitHub Actions**.

The workflow runs on pushes to `main` and can also be started manually from the Actions tab. No API keys or secrets are required. The homepage activity panel currently uses rotating demo data; replace it with approved project updates or a public API integration when the content is ready.
