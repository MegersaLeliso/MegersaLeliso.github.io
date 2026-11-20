# Megersa Leliso — Portfolio

Static portfolio built with [Astro](https://astro.build) and Tailwind CSS v4.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
```

## Editing content

| What | Where |
| --- | --- |
| Case studies (text, code, Next Steps) | `src/content/projects/*.md` |
| About / Leadership / Skills | `src/pages/index.astro` |
| Contact links | `src/data/nav.ts` (`site`) |
| Sidebar groups and links | `src/data/nav.ts` (`navGroups`) |
| Images used by the site | `src/assets/` (auto-converted to WebP at build) |
| Colors and fonts | `src/styles/global.css` (`@theme`) |

A new `.md` file in `src/content/projects/` becomes `/projects/<filename>/` automatically; add it to `navGroups` to show it in the sidebar.

`raw-assets/` holds the original screenshots, diagram sources (SVG + 2× PNG) and `notes.txt`. It is not part of the build.
