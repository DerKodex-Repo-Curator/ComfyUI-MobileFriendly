# MobileFriendly Sidebar Animation Plan

## Overview

Transform the left sidebar into an animated hamburger-style menu that expands/collapses from the "C" (ComfyUI) button, which will be relocated to the top bar.

---

## Current State

- **Sidebar**: `.side-tool-bar-container` - vertical bar on left side with icon buttons
- **C Button**: First button in sidebar (ComfyUI logo) - has its own menu/actions
- **Sidebar Buttons**: `.side-bar-button` - 32x32px on mobile
- **Layout quirk**: Sidebar uses `flex-direction: column-reverse` (visual top = DOM end)

---

## Planned Changes

### 1. Move C Button to Top Bar

**Goal**: Relocate the C button to sit on the same horizontal line as the workflow tabs and + button.

**Implementation**:
- Find the C button (first visual button in sidebar, likely has ComfyUI logo icon)
- Clone or move it to the top bar area (`.comfyui-body-top` or similar)
- Position it to the left of the workflow tab navigation
- Style it to match the top bar aesthetic

**CSS**:
```css
.mf-c-button-top {
  position: fixed;
  top: 8px;
  left: 8px;
  width: 40px;
  height: 40px;
  z-index: 99999;
}
```

---

### 2. Animated Sidebar Expand/Collapse

**Goal**: Sidebar slides out from the C button with smooth animation when tapped.

**Implementation**:
- Hide the original sidebar by default on mobile
- Create an overlay/panel that animates from the C button position
- Use CSS transforms for smooth 60fps animation
- Panel contains all the original sidebar buttons

**Animation Options**:
- **Slide**: Panel slides in from left edge
- **Scale**: Panel scales up from the C button origin point
- **Fade + Slide**: Combine opacity with transform

**CSS**:
```css
.mf-sidebar-panel {
  position: fixed;
  top: 60px;
  left: 8px;
  background: rgba(30, 30, 30, 0.98);
  border-radius: 8px;
  padding: 8px;
  transform: scale(0) translateX(-20px);
  transform-origin: top left;
  opacity: 0;
  transition: transform 0.25s ease, opacity 0.2s ease;
}

.mf-sidebar-panel.expanded {
  transform: scale(1) translateX(0);
  opacity: 1;
}
```

---

### 3. Collapse Behavior

**Goal**: Sidebar collapses automatically after timeout OR when user taps workspace.

**Implementation**:

#### Auto-collapse Timer
- Start 5-second timer when sidebar opens
- Reset timer on any interaction with sidebar
- Collapse when timer expires

#### Workspace Click
- Add click listener to canvas/workspace area
- Collapse sidebar when user taps outside

**Code Structure**:
```javascript
let collapseTimer = null;

const startCollapseTimer = () => {
  clearTimeout(collapseTimer);
  collapseTimer = setTimeout(() => {
    collapseSidebar();
  }, 5000); // 5 seconds
};

const collapseSidebar = () => {
  panel.classList.remove('expanded');
  clearTimeout(collapseTimer);
};

// Workspace click handler
document.addEventListener('click', (e) => {
  if (!e.target.closest('.mf-sidebar-panel') &&
      !e.target.closest('.mf-c-button-top')) {
    collapseSidebar();
  }
});
```

---

### 4. Preserve Original C Button Actions

**Goal**: When sidebar is fully expanded and user taps C button again, trigger the original C button behavior (its menu/actions).

**Implementation**:
- Track sidebar state: `collapsed`, `expanding`, `expanded`
- First tap on C button: expand sidebar
- Second tap on C button (when fully expanded): trigger original action
- Alternative: Add a small delay, if tapped twice quickly, trigger original action

**State Machine**:
```
[Collapsed] --tap C--> [Expanded]
[Expanded]  --tap C--> [Trigger Original Action]
[Expanded]  --timeout/click outside--> [Collapsed]
```

**Code Structure**:
```javascript
let sidebarState = 'collapsed';
let originalCHandler = null;

cButton.onclick = (e) => {
  if (sidebarState === 'collapsed') {
    expandSidebar();
    sidebarState = 'expanded';
  } else if (sidebarState === 'expanded') {
    // Trigger original C button action
    if (originalCHandler) {
      originalCHandler(e);
    }
  }
};
```

---

## Visual Mockup

### Collapsed State
```
┌──────────────────────────────────────────┐
│ [C]  ◀ Workflow Name ▼ ▶  [+]            │
├──────────────────────────────────────────┤
│                                          │
│              (Canvas)                    │
│                                          │
└──────────────────────────────────────────┘
```

### Expanded State
```
┌──────────────────────────────────────────┐
│ [C]  ◀ Workflow Name ▼ ▶  [+]            │
├─────┬────────────────────────────────────┤
│ [Q] │                                    │
│ [M] │         (Canvas)                   │
│ [S] │                                    │
│ [X] │    (dimmed/click to close)         │
│ ... │                                    │
└─────┴────────────────────────────────────┘
```

---

## Implementation Order

1. **Find and identify the C button** - Determine exact selector/identification
2. **Clone C button to top bar** - Position it correctly
3. **Hide original sidebar** - CSS display:none on mobile
4. **Create animated panel** - Contains cloned sidebar buttons
5. **Implement expand/collapse** - CSS transitions + JS state
6. **Add auto-collapse timer** - 5 second timeout
7. **Add workspace click handler** - Close on outside click
8. **Preserve original C action** - Second tap triggers original behavior
9. **Test and polish** - Smooth animations, edge cases

---

## Risks and Considerations

1. **C Button Identification**: Need to reliably find the C button across ComfyUI versions
2. **Original Handler Preservation**: Must capture and preserve the original click handler
3. **Sidebar Button Functionality**: Cloned buttons must still trigger their original actions
4. **Z-Index Conflicts**: Panel must appear above canvas but below modals/dialogs
5. **Touch vs Click**: Ensure works with touch events on mobile
6. **Animation Performance**: Keep animations smooth on mobile devices

---

## Dependencies

- Workflow tab navigation must be complete (done in v11.2)
- Debug panel available for testing (will remove after)
- Understanding of ComfyUI's sidebar registration system

---

## Success Criteria

- [ ] C button appears in top bar next to workflow tabs
- [ ] Tapping C button smoothly expands sidebar panel
- [ ] Sidebar contains all original buttons with working functionality
- [ ] Sidebar auto-collapses after 5 seconds of inactivity
- [ ] Tapping canvas/workspace closes sidebar
- [ ] Double-tapping C (when expanded) triggers original C menu
- [ ] Animations run at 60fps on iPhone
- [ ] No visual glitches or layout shifts
