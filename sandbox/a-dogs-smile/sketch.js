// a dog's smile
// click to place the next fragment. fragments drift down and fade.
// tag categories (memory, numb, intrusion, body, chorus) drive look and physics.
// idle for ~6 seconds and the piece will whisper the dog's name on its own.
// press R to reset.

const STYLE = {
  memory: {
    font: "EB Garamond",
    italic: true,
    weight: 400,
    size: 26,
    color: [90, 55, 30],       // warm brown, as if written on the carpet
    alpha: 210,
    vy: 0.22,
    drift: 0.10,
    life: 520,                 // frames
  },
  numb: {
    font: "Inter",
    italic: false,
    weight: 300,
    size: 20,
    color: [120, 112, 100],    // pale, almost the carpet itself
    alpha: 150,
    vy: 0.35,
    drift: 0.02,
    life: 320,
  },
  intrusion: {
    font: "JetBrains Mono",
    italic: false,
    weight: 400,
    size: 14,
    color: [70, 110, 150],     // cold phone-screen blue
    alpha: 220,
    vy: 0.55,
    drift: 0.00,
    life: 260,
    glitch: true,
  },
  body: {
    font: "Inter",
    italic: false,
    weight: 400,
    size: 19,
    color: [138, 70, 40],      // muted rust, the body aching
    alpha: 190,
    vy: 0.30,
    drift: 0.06,
    life: 380,
  },
  chorus: {
    font: "EB Garamond",
    italic: true,
    weight: 400,
    size: 17,
    color: [95, 115, 100],     // soft sage, like a voice through a wall
    alpha: 170,
    vy: 0.28,
    drift: 0.18,
    life: 300,
  },
  whisper: {
    font: "EB Garamond",
    italic: true,
    weight: 400,
    size: 44,
    color: [160, 130, 95],
    alpha: 90,
    vy: 0.18,
    drift: 0.04,
    life: 700,
  },
};

const IDLE_FRAMES = 360;          // ~6s at 60fps
const DRAG_EMIT_EVERY = 14;       // emit-while-dragging throttle
const BACKGROUND = [232, 220, 196]; // beige carpet

let fragments = [];
let cursor = 0;
let lastInteractionFrame = 0;
let lastDragEmitFrame = -9999;
let grainLayer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, BASELINE);
  lastInteractionFrame = frameCount;
  grainLayer = buildGrain(width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  grainLayer = buildGrain(width, height);
}

function draw() {
  drawBackground();

  // gentle breathing vignette, ~1 cycle per 4s
  const breath = 0.5 + 0.5 * sin(frameCount * 0.008);
  drawVignette(breath);

  // right-edge phone-screen glow: cold blue bleeding into the bedroom
  drawPhoneGlow();

  // if nobody has interacted for a while, the piece whispers
  if (frameCount - lastInteractionFrame > IDLE_FRAMES && random() < 0.012) {
    spawnWhisper();
  }

  // update + draw fragments
  for (let i = fragments.length - 1; i >= 0; i--) {
    const f = fragments[i];
    updateFragment(f);
    drawFragment(f);
    if (f.age > f.life) fragments.splice(i, 1);
  }

  // subtle grain on top
  push();
  tint(255, 22);
  image(grainLayer, 0, 0);
  pop();
}

// ---------- input ----------

function mousePressed() {
  placeFragment(mouseX, mouseY, nextFragment());
  lastInteractionFrame = frameCount;
}

function mouseDragged() {
  if (frameCount - lastDragEmitFrame >= DRAG_EMIT_EVERY) {
    placeFragment(mouseX, mouseY, nextFragment());
    lastDragEmitFrame = frameCount;
    lastInteractionFrame = frameCount;
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    fragments = [];
    cursor = 0;
    lastInteractionFrame = frameCount;
  }
}

// ---------- fragments ----------

function nextFragment() {
  const f = FRAGMENTS[cursor % FRAGMENTS.length];
  cursor++;
  return f;
}

function placeFragment(x, y, data) {
  const s = STYLE[data.tag] || STYLE.numb;
  fragments.push({
    text: data.text,
    tag: data.tag,
    x,
    y,
    vx: random(-s.drift, s.drift),
    vy: s.vy * random(0.85, 1.15),
    age: 0,
    life: s.life,
    jitterSeed: random(1000),
  });
}

function spawnWhisper() {
  fragments.push({
    text: IDLE_WHISPER,
    tag: "whisper",
    x: random(width * 0.1, width * 0.9),
    y: -40,
    vx: random(-0.05, 0.05),
    vy: STYLE.whisper.vy,
    age: 0,
    life: STYLE.whisper.life,
    jitterSeed: random(1000),
  });
}

function updateFragment(f) {
  f.x += f.vx;
  f.y += f.vy;
  f.vy += 0.0006;          // a hair of gravity, so nothing hovers forever
  f.vx *= 0.996;           // air resistance
  f.age++;
}

function drawFragment(f) {
  const s = STYLE[f.tag] || STYLE.numb;

  // fade in quickly, hold, then fade out
  const fadeIn  = constrain(f.age / 20, 0, 1);
  const fadeOut = constrain(1 - (f.age - (f.life - 90)) / 90, 0, 1);
  const alpha   = s.alpha * fadeIn * fadeOut;

  const fontStack = `${s.italic ? "italic " : ""}${s.weight} ${s.size}px "${s.font}", serif`;
  drawingContext.font = fontStack;

  if (s.glitch) {
    // cold chromatic offset for intrusion fragments
    const jx = (noise(f.jitterSeed + frameCount * 0.15) - 0.5) * 2.2;
    const jy = (noise(f.jitterSeed + 99 + frameCount * 0.15) - 0.5) * 1.2;

    noStroke();
    fill(190, 60, 70, alpha * 0.55);
    text(f.text, f.x + 1.2 + jx, f.y + jy);

    fill(60, 160, 200, alpha * 0.55);
    text(f.text, f.x - 1.2 + jx, f.y + jy);

    fill(s.color[0], s.color[1], s.color[2], alpha);
    text(f.text, f.x + jx, f.y + jy);
    return;
  }

  noStroke();
  fill(s.color[0], s.color[1], s.color[2], alpha);
  text(f.text, f.x, f.y);
}

// ---------- atmosphere ----------

function drawBackground() {
  // base carpet tone
  background(BACKGROUND[0], BACKGROUND[1], BACKGROUND[2]);

  // soft warm gradient from top-left: the lamp on the nightstand
  const steps = 40;
  noStroke();
  for (let i = 0; i < steps; i++) {
    const t = i / steps;
    const a = 18 * (1 - t);
    fill(255, 235, 200, a);
    ellipse(width * 0.25, height * 0.2, lerp(200, width * 1.6, t));
  }
}

function drawVignette(breath) {
  noFill();
  const rings = 40;
  for (let i = 0; i < rings; i++) {
    const t = i / rings;
    const a = 2 + 3 * t * (0.6 + 0.4 * breath);
    stroke(40, 30, 20, a);
    const w = width * (1 + t * 0.15);
    const h = height * (1 + t * 0.15);
    rect((width - w) / 2, (height - h) / 2, w, h);
  }
}

function drawPhoneGlow() {
  // a cold slice of screen light leaking in from the right
  noStroke();
  const cx = width - 2;
  const glow = 240;
  for (let i = 0; i < glow; i++) {
    const t = i / glow;
    const a = 26 * (1 - t);
    fill(90, 130, 170, a);
    rect(cx - i, 0, 1, height);
  }
}

function buildGrain(w, h) {
  const g = createGraphics(w, h);
  g.loadPixels();
  for (let i = 0; i < g.pixels.length; i += 4) {
    const n = random(255);
    g.pixels[i]     = n;
    g.pixels[i + 1] = n;
    g.pixels[i + 2] = n;
    g.pixels[i + 3] = 255;
  }
  g.updatePixels();
  return g;
}
