# a dog's smile — design notes

An electronic poetry piece adapted from a short story about Marie Antoinette,
her dead dog Macaroni, and the hollow aftermath of grief.

## Source text

A first-person-adjacent narrative about Marie Antoinette, a community college
student whose dog Macaroni has been killed by a car (license plate 279RLQ,
driven by "Eco Universal"). She hasn't left the house in 15½ days, hasn't
attended BIO 1001 / ENC 1101 / MAT 1000 / HIS 1002, barely eats (sometimes
just Funyuns), watches old Oprah interviews, and repeats that "nothing
matters" to strangers on the internet. Her phone wallpaper is Macaroni on a
beige carpet, tongue out, a dog's smile.

## Concept

Grief as a bedroom with the blinds drawn. The reader clicks, and a fragment
of Marie's interior surfaces — a memory of Macaroni, an intrusive ad, an
institutional reminder, a deflection to a stranger online. Each fragment
drifts downward, slows, and fades, the way thoughts do when you're lying on
your back watching the ceiling.

The piece is not a timeline. It loops. Marie's mind loops. The reader
assembles the story in whatever order they click, which is the point —
grief doesn't arrive in outline form.

## Voice categories

Fragments are tagged so they can be styled and animated differently. Each
tag evokes a different texture of the interior:

- **memory** — Macaroni before the accident. Warm cream, serif, slow drift,
  long life. "he used to curl up at the foot of the bed."
- **numb** — the flat refusals. Pale gray, nearly invisible, quick fade.
  "it doesn't matter. nothing does."
- **intrusion** — the digital and institutional noise that won't stop
  leaking in. Cold blue, monospace, jittery. "Kraft Mac n' Cheese.",
  "license plate 279RLQ", "course withdrawal deadline."
- **body** — hunger, nausea, the flesh of depression. Muted rust.
  "sometimes all she eats is Funyuns."
- **chorus** — the strangers on the internet, softer, bubbled together.
  "it doesn't have to be okay."

## Interaction

- **Click anywhere** — the next fragment in the ambient cycle is placed
  where you clicked. Fragments drift downward and fade.
- **Hold and drag** — fragments emit as you move, like rumination.
- **Idle** — after ~6 seconds without a click, the piece whispers the
  word *Macaroni* on its own, drifting in from the top, because grief
  doesn't wait for you to do anything.
- **Press R** — reset the canvas (the bedroom is empty again).

## Aesthetics

- Background is the beige carpet from the phone wallpaper, with a faint
  cold screen-glow bleeding in from the right edge (the phone, always on).
- A slow vignette pulses at roughly 1 Hz — the rhythm of a sleeping dog
  breathing.
- Text uses real typographic weight and fall physics rather than heavy
  generative effects, because the emotional load is in the words. The
  *intrusion* category is the only one that glitches.
- No images are required. The "dog's smile" only appears as text.

## Starter lineage

This builds on two of the three provided P5.js starters:

- **Click Poetry** — the click-to-place-next-line mechanic and the
  cycling script.
- **Falling Text** — the particle-style physics (vy, gravity, air
  resistance, fade with age) applied to each placed line rather than to
  a rain of characters.

The hybrid lets the reader place fragments intentionally (click poetry)
but then watch each one sink on its own, the way thoughts are placed and
then slip away.

## What to try next

- Add a faint rectangular "phone screen" that glows in a corner and
  pulls *intrusion* fragments toward it.
- Load a photo of a generic dog on a beige carpet as a near-black-level
  ghost behind the text, only visible after many clicks.
- Swap `R` reset for a key that advances time — lines fall faster,
  Marie's bedroom darkens.

## Screenshots

Open `index.html` in a browser and click several times to compose a
scene. Capture three states for the write-up:

1. First click (one fragment, mostly empty canvas).
2. Mid-composition (several categories layered, drifting).
3. Idle state (the word *Macaroni* whispering in on its own).
