# My House My Way

A pixel-close build of the "My House My Way" Figma landing page, with an
animated sidebar that cycles between **Features** (shown first) and
**Reviews**.

- Figma source: [landing page](https://www.figma.com/design/2sTnQUmetxsyRHlAtNUX9m/My-house-my-way?node-id=2901-41841) · [sidebar component](https://www.figma.com/design/2sTnQUmetxsyRHlAtNUX9m/My-house-my-way?node-id=2903-42227)
- Stack: Next.js (App Router) + TypeScript + Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
src/app/                 layout.tsx (fonts + metadata), page.tsx, globals.css (MHMW tokens)
src/components/mhmw/     Hero, HeroBackground, Nav, EmailCapture, Sidebar, Avatar, icons
```

## Known substitutions

The Figma MCP session that built this hit Figma's asset-download rate limit
and the build sandbox's egress policy blocked fetching `www.figma.com`
directly, so the real exported logo, star/check icons, reviewer photos, and
hero photo couldn't be pulled in. Hand-authored replacements are used
instead — see the comments in `icons.tsx`, `Avatar.tsx`, and
`HeroBackground.tsx`. Swap in the real exports when available.

Likewise, the source spec's display face (Satoshi) isn't distributable via
`next/font/google`; Inter is used as a same-family substitute at heavy
weights (see `layout.tsx`).
