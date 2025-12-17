# EZGAS UI (from old mockup images)

This is a **starter frontend scaffold** that recreates the look & layout of the old EZGAS LPG web UI screenshots you shared (sidebar + orange gradient top bar + cards/tables/forms).

It’s intentionally **API-agnostic**: the pages use mock data and placeholder handlers so your team can wire them to your current backend later.

## Tech

- React + Vite
- TypeScript
- TailwindCSS
- React Router
- FullCalendar (Schedule screen)
- Recharts (Admin dashboard chart)

This matches the stack you already use in `ezgas-web-react` (React via Vite, Tailwind, React Router, FullCalendar, etc.).

## Quick start

```bash
# in this folder
npm install
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

## Routes

### Customer/App

- `/app/home`
- `/app/schedule`
- `/app/order-tracking`
- `/app/order-history`
- `/app/payments`
- `/app/profile`
- `/app/favorites`
- `/app/notifications`
- `/app/station/:id`

### Admin

- `/admin/dashboard`
- `/admin/users/customers`
- `/admin/users/vendors`
- `/admin/orders`
- `/admin/services`
- `/admin/subscription`
- `/admin/notification`
- `/admin/settings`

## Notes / what to customize

- Colors live in `src/styles/index.css` as CSS variables (`--brand-from`, `--brand-to`, `--sidebar-bg`...).
- The mock data lives in `src/data/mock.ts`.
- Replace placeholder images (currently `picsum.photos`) with your real assets.
- Connect buttons/forms to your API calls, Redux/React Query, etc.

## Integrating into your existing repo

If you want this inside your existing `ezgas-web-react` codebase:

1. Copy `src/components/*`, `src/layouts/*`, and the relevant `src/pages/*` into your repo.
2. Merge the routes from `src/App.tsx` into your router.
3. Merge CSS variables from `src/styles/index.css` into your global stylesheet.

