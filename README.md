# Auburn Professional Branding (APB) — Web Platform

Modern, high-performance website and revenue intelligence platform for **Auburn Professional Branding**.

Built with **Vite**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

---

## 🚀 Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📦 Project Structure

```
├── public/
│   └── favicon.svg           # Scalable APB vector favicon
├── src/
│   ├── components/
│   │   ├── Logo.tsx          # Dual-variant APB vector eagle & wordmark
│   │   ├── Navbar.tsx        # Sticky responsive navigation with mobile drawer
│   │   ├── Hero.tsx          # High-impact hero with Nova AI live card
│   │   ├── Framework.tsx     # The 6-Stage Revenue Model showcase
│   │   ├── Services.tsx      # 6 Core business capability blocks
│   │   ├── AuditForm.tsx     # Direct lead intake & revenue scan form
│   │   └── Footer.tsx        # Branded footer & copyright
│   ├── App.tsx               # Master layout orchestrator
│   ├── index.css             # Tailwind CSS v4 custom theme tokens
│   └── main.tsx              # React 19 entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🌐 Deploy to Vercel & Connect Custom Domain

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial release: APB React 19 web platform"
   git remote add origin https://github.com/shawnsommerville204-launchlab/APB.git
   git branch -M main
   git push -u origin main
   ```
2. Import repo in [Vercel](https://vercel.com):
   - Select `shawnsommerville204-launchlab/APB`.
   - Keep default Vite build settings (`npm run build`, output: `dist`).
3. Add your custom domain under **Project Settings → Domains**.
