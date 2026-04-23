# a dog's smile

An interactive P5.js electronic poetry piece adapted from a short story
about Marie Antoinette, her dead dog Macaroni, and the hollow aftermath
of grief.

Built as a hybrid of the two P5.js starters **Click Poetry** (click-to-place,
cycling script) and **Falling Text** (per-particle physics and fade).

## Run it

No build step.

```bash
# from this folder
python3 -m http.server 8000
# open http://localhost:8000
```

Or just open `index.html` directly in a browser — it loads p5 from a CDN.

## Interact

- **Click anywhere** — place the next fragment in the cycle at the cursor.
- **Click and drag** — emit fragments while moving (throttled).
- **Idle ~6 seconds** — the piece whispers *Macaroni* on its own.
- **Press R** — clear the canvas.

## Files

- `design.md` — concept, voice categories, aesthetic decisions, next steps.
- `poem.js` — curated fragments from the source story, each tagged with a
  voice category.
- `sketch.js` — p5 sketch: physics, per-tag styling, grain, vignette,
  phone-screen glow.
- `index.html` — loads p5 and the sketch.

## Voice categories

Each fragment is tagged so that style and physics map to the emotional
texture of the line. See `design.md` for the full rationale.

| tag        | rendering                                  |
| ---------- | ------------------------------------------ |
| memory     | warm brown, italic serif, slow drift       |
| numb       | pale gray, light sans, quick fade          |
| intrusion  | cold blue, monospace, chromatic jitter     |
| body       | muted rust, sans                           |
| chorus     | soft sage, italic serif, bubbled           |
| whisper    | large, faint, only during idle             |

## Screenshots

After opening in a browser, capture three states for the write-up:

1. **First click** — one fragment on a near-empty carpet.
2. **Mid-composition** — several categories layered and drifting.
3. **Idle whisper** — *Macaroni* appearing on its own, no click needed.

Save screenshots into `screenshots/` in this folder and link them from
your portfolio write-up.

## Credits and lineage

- Source story: provided prompt about Marie Antoinette and Macaroni
  (short outline-format narrative).
- Starters referenced from the course: **Click Poetry**, **Falling Text**,
  **Moving Click Text**.
- Fonts loaded from Google Fonts: EB Garamond, Inter, JetBrains Mono.
- p5.js 1.9.4 loaded from jsDelivr.
