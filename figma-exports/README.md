# Moving this portfolio into Figma

There is no `.fig` file format I can write directly — Figma keeps that
format closed. Below are the two reliable paths designers use to bring
HTML/CSS work like this into Figma as **editable layers**.

---

## Option A — Plugin: `html.to.design` (recommended)

This converts each HTML page into native Figma frames with real text
layers, auto-layout, and editable shapes.

1. In Figma, open the **Plugins** menu → **Browse all plugins** → search
   **`html.to.design`** → install (free tier covers up to ~10 imports/month).
2. Open the plugin inside any Figma file.
3. Either:
   - **Paste a deployed URL** of any page (e.g. once you deploy to
     Vercel/Netlify/GitHub Pages), or
   - **Upload the HTML file** — drag a single `.html` file from the
     `Portfolio.zip` download into the plugin's upload field.
   - For multi-page imports, repeat per page: `index.html`, `about.html`,
     `contact.html`, `case-study.html`, `designscapes.html`.
4. Hit **Import**. Each page lands as its own frame, ~1 minute per page.

**Caveats / what to fix after import**
- The grain noise SVG overlay won't translate — delete that layer.
- The page-entry **veil animation** comes in as a green rectangle — delete.
- Fraunces + Geist + Geist Mono need to be available to Figma. Install
  them locally (they're free on Google Fonts) **or** turn on Figma's
  font replacement and pick a substitute.
- The CSS `color-mix()` calls flatten to a single color — no fix needed,
  the result looks correct.

---

## Option B — PNG references (no plugin)

If you'd rather rebuild in Figma using these as a visual reference:

1. Open the `figma-exports/` folder from the zip.
2. In Figma, drag the PNGs onto the canvas. Each becomes a frame at
   1:1 resolution.
3. Rebuild layers on top using Figma's text + auto-layout.

Files included:
- `01-work.png` — Work index
- `02-about.png` — About
- `03-contact.png` — Contact
- `04-case-study.png` — Lumen case study (hero)
- `05-designscapes.png` — DesignScapes

---

## Design tokens, for rebuilding in Figma

Copy these into Figma's **Local variables** panel.

### Colors

| Token | Hex |
|---|---|
| `paper` | `#f4efe6` |
| `paper-2` | `#ebe5d8` |
| `ink` | `#1a1612` |
| `ink-2` | `#2a241d` |
| `mute` | `#756b5e` |
| `mute-2` | `#a39a8b` |
| `line` | `#d6cebe` |
| `accent` (terracotta) | `#c96442` |
| `accent-2` (sage) | `#4a5a3c` |

### Type

- **Sans** — Geist (400 / 500 / 600)
- **Serif/Display** — Fraunces (italic 300 / 400, used for emphasis)
- **Mono** — Geist Mono (400 / 500)

Typical scale:
- Hero display — 132–224px, Geist 500, letter-spacing −0.045em
- H2 — 44–78px
- Body — 16–19px, line-height 1.5
- Meta / mono labels — 10.5–11px, letter-spacing 0.14–0.18em, uppercase

### Spacing & radius

- Page padding — `28px` top, `clamp(20px, 3.5vw, 56px)` sides
- Card radius — `4–6px`
- Hairline rules — `1px solid #d6cebe` (paper-2 dividers)
- Card shadow — `0 12px 36px -16px rgba(40,30,20,.35)`

---

## Best workflow

1. Install Geist + Geist Mono + Fraunces from Google Fonts locally.
2. Use Option A with `html.to.design` for the heavy layout lift.
3. Strip the veil + grain layers after import.
4. Replace generated colors with the variables above so future edits
   propagate cleanly.
