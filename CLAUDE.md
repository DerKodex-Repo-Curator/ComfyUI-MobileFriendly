# CLAUDE.md - ComfyUI-MobileFriendly

This file provides guidance to Claude Code when working with this extension.

---

## Project Overview

ComfyUI-MobileFriendly is a **web-only** ComfyUI extension that transforms the desktop-focused interface into a touch-friendly experience for iPhone, iPad, and Android devices.

**Key Principle**: No Python backend - all logic lives in a single JavaScript file.

---

## Parent Project: ShoudieFuser

This extension is developed as part of **ShoudieFuser**, a Docker container for running ComfyUI with persistent storage via CIFS/SMB network shares.

- **ShoudieFuser Repo**: `C:\github\ShoudieFuser` (or parent directory)
- **Deployment Target**: Docker container at `/ComfyUI-Mount/NodeProfiles/common/ComfyUI-MobileFriendly/`
- **Symlinked to**: `/ComfyUI-Mount/ComfyUI/custom_nodes/ComfyUI-MobileFriendly`

### Deployment Command

```bash
# Deploy local changes to running container
powershell -Command "[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; Get-Content -Path 'C:\github\ShoudieFuser\ComfyUI-MobileFriendly\web\js\mobilefriendly.js' -Encoding UTF8 -Raw" | docker exec -i shoudiefuser-shoudie-1 bash -c "cat > /ComfyUI-Mount/NodeProfiles/common/ComfyUI-MobileFriendly/web/js/mobilefriendly.js"
```

### Testing with Playwright

```bash
cd C:\github\ShoudieFuser
node test-mf.js
```

This launches a headless browser simulating iPhone viewport and captures console logs + screenshot.

---

## File Structure

```
ComfyUI-MobileFriendly/
├── __init__.py              # Extension registration (WEB_DIRECTORY = "./web")
├── web/
│   └── js/
│       └── mobilefriendly.js   # ALL logic lives here (~3000 lines)
├── requirements.txt         # Empty (no Python deps)
├── README.md               # User documentation
├── SIDEBAR_PLAN.md         # Future feature planning
└── CLAUDE.md               # This file
```

---

## Architecture

### Single-File JavaScript Extension

Everything is in `web/js/mobilefriendly.js`:

1. **CSS Injection** (lines 10-535): `MOBILE_FRIENDLY_CSS` template literal
2. **Extension Registration** (line 735+): `app.registerExtension({...})`
3. **init()** function: Runs on page load
   - Mobile detection
   - CSS injection
   - Zoom prevention
   - Element hiding
   - Long-press node dragging
   - Tab navigation
4. **setup()** function: Runs after ComfyUI ready
   - Settings toggle
   - Sidebar menu registration

### Mobile Detection

```javascript
const isMobile = () => {
  return window.innerWidth <= 1024 ||
         window.matchMedia('(pointer: coarse)').matches ||
         /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};
```

### Version Badge

Green badge at bottom-left shows version and debug info:
```
MF14.1 414w AB:Y Q:Y T:Y R:1
```
- Version number
- Screen width
- AB/Q/T: Whether actionbar/queue/topbar elements exist
- R: Count of elements hidden by JS

---

## Key Features & Implementation Notes

### 1. Element Hiding (JS-only, NOT CSS)

**CRITICAL**: Never use blanket CSS `display:none` rules. They break workflow tabs on iPhone.

```javascript
// BAD - breaks workflow tabs
.comfy-menu { display: none !important; }

// GOOD - targeted JS hiding with preserve() checks
const hideEl = (el, reason) => { ... };
const preserve = (el) => {
  if (cls.includes('workflow-tab')) return true;
  if (el.closest('.workflow-tabs')) return true;
  // ...
};
```

### 2. Long-Press to Move Nodes

Uses LiteGraph's `node.flags.pinned` property:
- All nodes pinned by default on mobile
- 350ms long-press unpins temporarily
- 3-second countdown with pulsing border re-pins
- Patched `graph.serialize()` strips pinned flags before save

**State tracking**:
```javascript
window.mfDragState = {
  timer: null,
  activeNode: null,
  unpinnedNode: null,      // Currently unlocked node
  repinTimer: null,        // Countdown to re-pin
  // ...
};
```

### 3. Workflow Tab Navigation

Single-tab display with left/right arrows:
- Original `.workflow-tabs` hidden off-screen (not display:none!)
- Custom `.mf-tab-bar` shows one tab at a time
- Dropdown menu for Save/Load/New/Clear

### 4. Zoom Slider

Intercepts `[data-testid="zoom-controls-button"]` to show touch-friendly slider instead of keyboard input.

---

## Common Issues & Fixes

### Scope Issues

`isMobile()` and other functions must be defined BEFORE the try block if used outside it:
```javascript
init() {
  const isMobile = () => { ... };  // Define FIRST

  try {
    // Use isMobile here
  } catch (e) { ... }

  // Also used here - would fail if defined inside try
  if (isMobile()) { ... }
}
```

### Hit Detection for Nodes

Multiple transform formulas tried (F1-F4), F2 is correct:
```javascript
// F2: screenPos = (graphPos + offset) * scale
const s2_x = (gx + offset[0]) * scale;
const s2_y = (gy + offset[1]) * scale;
```

### iPad vs iPhone

- iPad (820px+): Skip element hiding, use desktop UI
- iPhone (<820px): Full mobile mode with hidden elements

---

## Development Workflow

1. **Edit** `web/js/mobilefriendly.js` locally
2. **Deploy** to Docker container (see deployment command above)
3. **Test** on real device (iPhone/iPad) or Playwright
4. **Check** browser console for `[MobileFriendly]` logs
5. **Verify** green version badge appears

### Version Bumping

Update in THREE places:
```javascript
console.log('[MobileFriendly] Extension loading - v14.1 ...');
const VERSION = "14.1";
console.log('[MobileFriendly] Extension init() called - v14.1');
```

---

## Testing Checklist

- [ ] Version badge visible (green, bottom-left)
- [ ] Workflow tabs preserved (not hidden)
- [ ] Floating run button hidden on iPhone
- [ ] Long-press enables node dragging
- [ ] Pulsing border during unlock countdown
- [ ] Zoom slider appears (not keyboard)
- [ ] Sidebar menu opens with Queue/Save/Load

---

## Collaboration Personas

When working on this project, Claude and Samantha collaborate per the ShoudieFuser CLAUDE.md guidelines. See parent project for persona details.

---

## Related Files in ShoudieFuser

- `test-mf.js` - Playwright test script
- `comfyui-mobile.png` - Screenshot from last Playwright run
- `docker_includes/downloads.csv` - Custom node definitions (this extension)
