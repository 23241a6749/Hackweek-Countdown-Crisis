# Hackweek Countdown Crisis

A Next.js web app that shows:
- COSC community info (from `cosc.json`)
- Live countdown timer till Hackweek ends

## ✅ Fixes Made

- Resolved hydration error by:
  - Converting `Countdown` to a client component (`'use client'`)
  - Wrapping countdown logic inside `useEffect`
- Replaced dynamic inline `style` with Tailwind `className` to avoid SSR mismatch
- Clean, error-free rendering and working live deployment

## 🚀 Live Site

[Visit Deployed Site](https://hackweek-countdown-crisis-xi.vercel.app)

## 🔗 GitHub Repo

[View Source Code](https://github.com/23241a6749/Hackweek-Countdown-Crisis)
