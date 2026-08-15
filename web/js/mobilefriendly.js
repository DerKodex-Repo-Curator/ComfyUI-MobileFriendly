/**
 * ComfyUI-MobileFriendly
 * Comprehensive mobile UI enhancement for ComfyUI
 *
 * Injects CSS overrides to optimize the interface for mobile/tablet devices.
 */

import { app } from "../../../scripts/app.js";


const MOBILE_FRIENDLY_CSS = `
/* ================================================
   ComfyUI-MobileFriendly: Comprehensive Mobile Enhancement
   ================================================ */

/* ------------------------------------------------
   1. Left Sidebar Compacting
   ------------------------------------------------ */
:root {
  --mf-sidebar-width: 40px;
  --mf-sidebar-item-height: 44px;
}

/* Ensure sidebar stays visible on mobile */
.side-tool-bar-container {
  display: flex !important;
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto !important;
  --sidebar-width: var(--mf-sidebar-width) !important;
  --sidebar-item-height: var(--mf-sidebar-item-height) !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  max-height: 100vh !important;
}

.side-bar-button {
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
  width: var(--mf-sidebar-width) !important;
  height: var(--mf-sidebar-item-height) !important;
  margin: 3px 0 !important; /* More vertical spacing */
  padding: 4px !important;
}

/* Reduce gap between sidebar items */
.side-tool-bar-container {
  gap: 2px !important;
  padding: 4px 2px !important;
}

.side-bar-button-content {
  gap: 2px !important;
}

.side-bar-button-label {
  font-size: 9px !important;
}

/* ------------------------------------------------
   2. Top Bar / Workflow Tabs
   ------------------------------------------------ */
.workflow-tabs-container {
  padding: 2px 4px !important;
}

.workflow-tabs-container .p-togglebutton {
  min-height: 36px !important;
  padding: 4px 8px !important;
}

.p-breadcrumb {
  height: 38px !important;
}

.p-breadcrumb-item {
  height: 34px !important;
}

/* ------------------------------------------------
   3. Bottom Bar
   ------------------------------------------------ */
.comfyui-body-bottom {
  padding: 4px 8px !important;
}

/* ------------------------------------------------
   4. Modal Dialogs
   ------------------------------------------------ */
.comfy-modal {
  max-width: 90vw !important;
  max-height: 90vh !important;
  padding: 16px !important;
}

/* ------------------------------------------------
   5. Context Menus (Critical Fix)
   ------------------------------------------------ */
.litegraph.litecontextmenu,
.graphcontextmenu {
  border-radius: 8px !important;
  padding: 4px !important;
}

.litemenu-entry,
.graphmenu-entry {
  padding: 8px 12px !important;
  min-height: 44px !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
  display: flex !important;
  align-items: center !important;
}

/* ------------------------------------------------
   6. LiteGraph Dialogs
   ------------------------------------------------ */
.litegraph .dialog {
  min-width: min(400px, 90vw) !important;
}

.litegraph .dialog .dialog-header {
  height: 44px !important;
  padding: 8px 12px !important;
}

.litegraph .dialog .dialog-footer {
  height: 52px !important;
  padding: 8px !important;
}

/* ------------------------------------------------
   7. Splitter/Resize Handles
   ------------------------------------------------ */
.p-splitter-gutter {
  min-width: 8px !important;
}

/* ================================================
   TABLET BREAKPOINT (max-width: 1024px)
   ================================================ */
@media (max-width: 1024px) {
  :root {
    --mf-sidebar-width: 38px;
    --mf-sidebar-item-height: 42px;
  }
}

/* ================================================
   MOBILE LANDSCAPE BREAKPOINT (max-width: 768px)
   ================================================ */
@media (max-width: 768px) {
  :root {
    --mf-sidebar-width: 32px;
    --mf-sidebar-item-height: 32px;
  }

  /* AGGRESSIVE sidebar collapse - hide EVERYTHING except first button */
  .side-tool-bar-container:not(.mf-expanded) {
    gap: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    background: transparent !important;
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    overflow: visible !important;
    height: auto !important;
    max-height: 48px !important;
    min-height: 0 !important;
  }

  /* Hide EVERY child except the first button */
  .side-tool-bar-container:not(.mf-expanded) > *:not(:first-child) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    max-height: 0 !important;
    overflow: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    left: -9999px !important;
  }

  /* Also target .side-bar-button specifically */
  .side-tool-bar-container:not(.mf-expanded) .side-bar-button:not(:first-child) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    max-height: 0 !important;
    overflow: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    left: -9999px !important;
  }

  /* First button when collapsed - tall to match workflow tabs, centered horizontally */
  .side-tool-bar-container:not(.mf-expanded) .side-bar-button:first-child {
    margin: 0 2px 0 0 !important;
    padding: 8px !important;
    width: 44px !important;
    height: 48px !important;
    min-width: 44px !important;
    min-height: 48px !important;
    background: rgba(40, 40, 40, 0.9) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-top-left-radius: 6px !important;
    border-bottom-left-radius: 6px !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-right: none !important;
    position: relative !important;
    left: auto !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    visibility: visible !important;
    opacity: 1 !important;
  }

  /* Sidebar expanded state - show full sidebar with all buttons and background */
  .side-tool-bar-container.mf-expanded {
    gap: 4px !important;
    padding: 4px 2px !important;
    background: var(--comfy-menu-bg, #1e1e1e) !important;
    background-color: var(--comfy-menu-bg, #1e1e1e) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    height: auto !important;
    max-height: 100vh !important;
  }

  /* Show all children when expanded */
  .side-tool-bar-container.mf-expanded > * {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    position: relative !important;
    left: auto !important;
  }

  /* Show all buttons when expanded */
  .side-tool-bar-container.mf-expanded .side-bar-button {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    height: var(--mf-sidebar-item-height, 32px) !important;
    max-height: var(--mf-sidebar-item-height, 32px) !important;
    pointer-events: auto !important;
    margin: 2px 0 !important;
    padding: 6px !important;
    position: relative !important;
    left: auto !important;
  }

  .side-bar-button .pi {
    font-size: 15px !important;
  }

  /* Hide sidebar labels on mobile */
  .side-bar-button-label {
    display: none !important;
  }

  /* Compact workflow tabs */
  .workflow-tabs-container .p-togglebutton {
    min-width: 60px !important;
    font-size: 11px !important;
  }

  /* Responsive modals */
  .comfy-modal {
    max-width: 95vw !important;
    max-height: 95vh !important;
    padding: 12px !important;
    border-radius: 12px 12px 0 0 !important;
  }

  /* LiteGraph dialogs */
  .litegraph .dialog {
    min-width: 90vw !important;
    max-height: 90vh !important;
    border-radius: 12px 12px 0 0 !important;
  }

  .litegraph .dialog.settings {
    max-width: 95vw !important;
    width: 95vw !important;
  }

  /* Node Search Dialog */
  .invisible-dialog-root {
    width: 95vw !important;
    min-width: auto !important;
    max-width: 95vw !important;
    margin: 8vh auto !important;
    margin-left: 2.5vw !important;
  }

  /* Touch-friendly buttons */
  button,
  .comfyui-button,
  .comfy-btn,
  .comfy-menu > button,
  .comfy-modal button {
    min-height: 44px !important;
    min-width: 44px !important;
    padding: 10px 16px !important;
    font-size: 14px !important;
  }

  /* Touch-friendly inputs (16px prevents iOS zoom) */
  input,
  textarea,
  select,
  .property_value {
    min-height: 44px !important;
    padding: 10px 12px !important;
    font-size: 16px !important;
  }

  /* ------------------------------------------------
     Phase 3.7: Minimal CSS - Let JavaScript handle hiding
     We only use CSS for OLD menu fallback, JS does the rest
     ------------------------------------------------ */

  /* v4.8 - No blanket CSS hiding (causes workflow tab issues on iPhone) */

  /* Prevent browser zoom on everything EXCEPT the canvas */
  html, body {
    touch-action: pan-x pan-y !important;
    -ms-touch-action: pan-x pan-y !important;
  }

  /* Allow full touch control on canvas (LiteGraph handles its own zoom) */
  canvas,
  .graph-canvas-container,
  .litegraph canvas {
    touch-action: none !important;
    -ms-touch-action: none !important;
  }

  /* Prevent zoom on sidebar and other UI elements */
  .side-tool-bar-container,
  .comfyui-body-top,
  .comfyui-body-bottom,
  .comfy-modal,
  .p-sidebar {
    touch-action: pan-y !important;
  }

  /* AGGRESSIVE breadcrumb/Idle status hiding on mobile */
  .p-breadcrumb,
  [class*="breadcrumb"],
  .comfyui-body-top .p-breadcrumb,
  .comfyui-body-top [class*="breadcrumb"] {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    max-height: 0 !important;
    overflow: hidden !important;
    position: absolute !important;
    left: -9999px !important;
  }


  /* Force top bar to be ultra-compact - just wraps rgthree progress bar */
  .comfyui-body-top {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    height: auto !important;
    min-height: 6px !important;
    max-height: 24px !important;
    padding: 0 !important;
    gap: 0 !important;
    overflow: visible !important;
  }

  /* rgthree progress bar - make it very thin and full width */
  .comfyui-body-top > *,
  .comfyui-body-top .rgthree-top-messages-container,
  [class*="rgthree"][class*="progress"],
  [class*="rgthree"][class*="message"] {
    max-height: 20px !important;
    min-height: 4px !important;
    padding: 0 !important;
    margin: 0 !important;
    line-height: 1 !important;
    font-size: 10px !important;
  }

  /* Position sidebar BELOW the progress bar - only adjust margin, preserve native behavior */
  .side-tool-bar-container {
    margin-top: 24px !important;
    padding-top: 2px !important;
  }

  /* Mobile-friendly progress bar */
  .progress-container,
  .comfy-progress,
  [class*="progress"] {
    max-width: 90vw !important;
    font-size: 11px !important;
    padding: 4px 8px !important;
    word-wrap: break-word !important;
    white-space: normal !important;
    text-align: center !important;
  }

  /* Progress text - allow wrapping and smaller font */
  .progress-text,
  .progress-label,
  [class*="progress"] span,
  [class*="progress"] div {
    font-size: 10px !important;
    line-height: 1.3 !important;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    white-space: normal !important;
  }

  /* Style our MobileFriendly sidebar button to stand out */
  .side-bar-button[data-mf-menu="true"],
  .side-bar-button.mf-menu-button {
    background: linear-gradient(135deg, #00BCD4, #0097A7) !important;
    border: 2px solid #00E5FF !important;
    box-shadow: 0 0 8px rgba(0, 188, 212, 0.5) !important;
  }

  .side-bar-button[data-mf-menu="true"]:hover,
  .side-bar-button.mf-menu-button:hover {
    background: linear-gradient(135deg, #00E5FF, #00BCD4) !important;
  }

  .side-bar-button[data-mf-menu="true"] .pi,
  .side-bar-button.mf-menu-button .pi {
    color: white !important;
  }

  /* Reduce bottom bar height and padding */
  .comfyui-body-bottom {
    max-height: 48px !important;
    min-height: 36px !important;
    height: auto !important;
    padding: 2px 4px !important;
    gap: 4px !important;
  }

  /* Bottom-right floating controls bar (.p-buttongroup) */
  .p-buttongroup[class*="absolute"][class*="bottom"] {
    padding: 4px 6px !important;
    gap: 2px !important;
    border-radius: 6px !important;
  }

  .p-buttongroup[class*="absolute"][class*="bottom"] button {
    min-height: 28px !important;
    max-height: 28px !important;
    height: 28px !important;
    min-width: 28px !important;
    padding: 2px 4px !important;
    margin: 0 !important;
  }

  .p-buttongroup[class*="absolute"][class*="bottom"] .h-\\[27px\\] {
    height: 20px !important;
  }

  /* Compact all elements in bottom bar */
  .comfyui-body-bottom > *,
  .comfyui-body-bottom button,
  .comfyui-body-bottom select,
  .comfyui-body-bottom input {
    min-height: 28px !important;
    max-height: 32px !important;
    padding: 2px 6px !important;
    font-size: 11px !important;
    margin: 0 !important;
  }

  /* Zoom dropdown specifically - hide native, we'll replace with slider */
  .comfyui-body-bottom input[type="number"],
  .comfyui-body-bottom .zoom-input {
    width: 50px !important;
    text-align: center !important;
  }

  /* Compact zoom controls button text */
  [data-testid="zoom-controls-button"] span {
    font-size: 10px !important;
    padding: 0 4px !important;
  }

  /* Job Queue / History panel - constrain width on mobile */
  .queue-panel,
  .comfyui-queue-panel,
  .p-datatable,
  .p-panel-content,
  [class*="queue"],
  [class*="Queue"] {
    max-width: 100vw !important;
    width: 100% !important;
    overflow-x: auto !important;
    box-sizing: border-box !important;
  }

  /* Queue table cells - allow text truncation */
  .p-datatable td,
  .p-datatable th,
  .queue-panel td,
  .queue-panel th {
    max-width: 25vw !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    padding: 4px 6px !important;
    font-size: 11px !important;
  }

  /* Bottom workspace panel (where queue/history lives) */
  .workspace-bottom-panel,
  .bottom-panel,
  [class*="bottom-panel"],
  .p-splitter-panel {
    max-width: 100vw !important;
    overflow-x: hidden !important;
  }

  /* Hide keyboard shortcuts icon on mobile (useless for touch) */
  .side-bar-button[title*="Keybinding"],
  .side-bar-button[title*="keybinding"],
  .side-bar-button[title*="Keyboard"],
  .side-bar-button[title*="keyboard"],
  .side-bar-button[title*="Shortcut"],
  .side-bar-button[aria-label*="Keybinding"],
  .side-bar-button[aria-label*="keyboard"],
  .side-bar-button:has(.pi-keyboard),
  .side-bar-button:has([class*="keyboard"]) {
    display: none !important;
  }

  /* Node toolbar compacting - target by data-testid buttons */
  .p-panel-content:has([data-testid="delete-button"]),
  .p-panel-content:has([data-testid="info-button"]),
  .p-panel-content:has([data-testid="bypass-button"]) {
    padding: 2px 4px !important;
    height: auto !important;
    min-height: 28px !important;
    max-height: 32px !important;
    gap: 0px !important;
  }

  /* Compact node toolbar buttons */
  .p-panel-content:has([data-testid="delete-button"]) button,
  .p-panel-content:has([data-testid="info-button"]) button,
  .p-panel-content:has([data-testid="bypass-button"]) button {
    height: 24px !important;
    min-height: 24px !important;
    padding: 2px 4px !important;
    margin: 0 !important;
  }

  /* Compact node toolbar dividers */
  .p-panel-content:has([data-testid="delete-button"]) .w-px,
  .p-panel-content:has([data-testid="info-button"]) .w-px {
    height: 16px !important;
    margin: 0 2px !important;
  }

  /* Logs panel - much smaller font */
  .logs-panel,
  .log-panel,
  [class*="logs"],
  [class*="log-container"],
  .comfyui-logs,
  .execution-log,
  pre.log,
  .log-output {
    font-size: 9px !important;
    line-height: 1.2 !important;
  }

  .logs-panel *,
  .log-panel *,
  [class*="logs"] span,
  [class*="logs"] div,
  [class*="logs"] pre {
    font-size: 9px !important;
    line-height: 1.2 !important;
  }
}

/* ================================================
   MOBILE PORTRAIT BREAKPOINT (max-width: 480px)
   ================================================ */
@media (max-width: 480px) {
  :root {
    --mf-sidebar-width: 32px;
    --mf-sidebar-item-height: 36px;
  }

  /* Sidebar position on phones - no offset needed */
  .side-tool-bar-container {
    margin-top: 0px !important;
  }

  /* Full-screen modals on small phones */
  .comfy-modal {
    max-width: 100vw !important;
    max-height: 100vh !important;
    border-radius: 0 !important;
  }

  /* Smaller workflow tabs */
  .workflow-tabs-container .p-togglebutton {
    min-width: 50px !important;
    font-size: 10px !important;
    padding: 2px 4px !important;
  }
}

/* ================================================
   LANDSCAPE ORIENTATION - Force single column sidebar
   ================================================ */
@media (orientation: landscape) and (max-height: 500px) {
  :root {
    --mf-sidebar-width: 52px;
    --mf-sidebar-item-height: 48px;
  }

  /* Collapsed sidebar in landscape - just C button */
  .side-tool-bar-container:not(.mf-expanded) {
    margin-top: 0 !important;
    padding: 0 !important;
  }

  .side-tool-bar-container:not(.mf-expanded) .side-bar-button:first-child {
    width: 52px !important;
    height: 48px !important;
    padding: 8px !important;
  }

  /* Expanded sidebar in landscape - wider and taller buttons */
  .side-tool-bar-container.mf-expanded {
    display: flex !important;
    flex-direction: column !important;
    flex-wrap: nowrap !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    max-height: 100vh !important;
    width: 52px !important;
    min-width: 52px !important;
    max-width: 52px !important;
    margin-top: 0 !important;
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  /* Ensure buttons stack vertically and are larger in landscape when expanded */
  .side-tool-bar-container.mf-expanded .side-bar-button {
    width: 100% !important;
    height: 48px !important;
    min-height: 48px !important;
    flex-shrink: 0 !important;
    padding: 6px !important;
    margin: 2px 0 !important;
  }

  .side-tool-bar-container.mf-expanded .side-bar-button .pi {
    font-size: 18px !important;
  }

  /* Adjust workflow tabs position for wider sidebar when expanded */
  .side-tool-bar-container.mf-expanded ~ * .workflow-tabs-container,
  .workflow-tabs-container {
    left: 56px !important;
  }
}

/* ================================================
   TOUCH DEVICE SPECIFIC (pointer: coarse)
   ================================================ */
@media (pointer: coarse) {
  /* Larger context menu items for touch */
  .litemenu-entry,
  .graphmenu-entry {
    padding: 12px 16px !important;
    min-height: 48px !important;
  }

  /* Wider splitter gutters for easier grabbing */
  .p-splitter-gutter {
    min-width: 12px !important;
  }

  /* Disable hover states on touch devices */
  .comfyui-button:hover,
  .side-bar-button:hover {
    filter: none !important;
  }

  /* Better tap feedback */
  button:active,
  .comfyui-button:active,
  .side-bar-button:active {
    transform: scale(0.98) !important;
    opacity: 0.9 !important;
  }

  /* Touch-friendly scrolling */
  .comfy-modal,
  .comfy-menu,
  .litegraph.litecontextmenu {
    -webkit-overflow-scrolling: touch !important;
    touch-action: pan-y !important;
  }

  /* Ensure touch targets on all interactive elements */
  button,
  .comfyui-button,
  .comfy-btn,
  [role="button"] {
    min-height: 44px !important;
    min-width: 44px !important;
  }
}
`;

app.registerExtension({
  name: "comfyui.mobilefriendly",

  init() {

    // ================================================
    // MOBILE DETECTION (defined BEFORE try block for global scope)
    // ================================================
    const isMobile = () => {
      return window.innerWidth <= 1024 ||
             window.matchMedia('(pointer: coarse)').matches ||
             /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    };

    try {
      // Inject CSS immediately on init
      const style = document.createElement('style');
      style.id = 'mobilefriendly-styles';
      style.textContent = MOBILE_FRIENDLY_CSS;
      document.head.appendChild(style);


    // ================================================
    // SIDEBAR TOGGLE - COMPREHENSIVE MULTI-PRONGED APPROACH
    // ================================================

    const setupSidebarToggle = () => {
      if (!isMobile()) return;

      let collapseTimer = null;
      const COLLAPSE_DELAY = 10000; // 10 seconds
      let overlayDiv = null;

      // Function to collapse sidebar
      const collapseSidebar = () => {
        const sidebar = document.querySelector('.side-bar-container');
        if (!sidebar) return;

        sidebar.classList.remove('mf-expanded');
        if (collapseTimer) {
          clearTimeout(collapseTimer);
          collapseTimer = null;
        }

        // Show overlay when collapsed
        if (overlayDiv) {
          overlayDiv.style.display = 'block';
        }

      };

      // Function to expand sidebar
      const expandSidebar = () => {
        const sidebar = document.querySelector('.side-bar-container');
        if (!sidebar) return;

        sidebar.classList.add('mf-expanded');
        startCollapseTimer();

        // Hide overlay when expanded (allow native clicks)
        if (overlayDiv) {
          overlayDiv.style.display = 'none';
        }

      };

      // Start/restart collapse timer
      const startCollapseTimer = () => {
        if (collapseTimer) clearTimeout(collapseTimer);
        collapseTimer = setTimeout(() => {
          collapseSidebar();
        }, COLLAPSE_DELAY);
      };

      // Reset timer on any interaction
      const resetTimer = () => {
        const sidebar = document.querySelector('.side-bar-container');
        if (sidebar && sidebar.classList.contains('mf-expanded')) {
          startCollapseTimer();
        }
      };

      // PRONG 1: Create transparent overlay to intercept clicks
      const createOverlay = (toggleButton) => {

        // Get the actual button position and size
        const rect = toggleButton.getBoundingClientRect();

        // DEBUG: Show alert with button position
        // alert('Overlay at: ' + rect.top + ',' + rect.left + ' size: ' + rect.width + 'x' + rect.height);

        overlayDiv = document.createElement('div');
        overlayDiv.id = 'mf-sidebar-overlay';
        overlayDiv.style.cssText = `
          position: fixed !important;
          top: ${rect.top}px !important;
          left: ${rect.left}px !important;
          width: ${Math.max(rect.width, 50)}px !important;
          height: ${Math.max(rect.height, 50)}px !important;
          z-index: 999998 !important;
          background: transparent !important;
          cursor: pointer !important;
          display: block !important;
        `;

        // Overlay click handler - expand sidebar
        const overlayClickHandler = (e) => {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          expandSidebar();
          return false;
        };

        overlayDiv.addEventListener('click', overlayClickHandler, { capture: true });
        overlayDiv.addEventListener('touchstart', overlayClickHandler, { capture: true, passive: false });
        overlayDiv.addEventListener('pointerdown', overlayClickHandler, { capture: true });
        overlayDiv.addEventListener('mousedown', overlayClickHandler, { capture: true });

        document.body.appendChild(overlayDiv);
      };

      // PRONG 2: Setup with comprehensive error checking
      const attemptSetup = () => {
        // Try multiple selectors for sidebar (ComfyUI uses .side-bar-container)
        let sidebar = document.querySelector('.side-bar-container');
        if (!sidebar) sidebar = document.querySelector('[class*="side-bar-container"]');
        if (!sidebar) sidebar = document.querySelector('[class*="sidebar-tab"]');
        if (!sidebar) sidebar = document.querySelector('.comfyui-sidebar');

        if (!sidebar) return false;

        const buttons = sidebar.querySelectorAll('.side-bar-button');
        if (buttons.length === 0) return false;

        const toggleButton = buttons[0];
        if (!toggleButton) return false;

        if (toggleButton.dataset.mfToggleSetup === 'true') return true;

        // Mark as setup
        toggleButton.dataset.mfToggleSetup = 'true';

        // Create overlay interceptor
        createOverlay(toggleButton);

        // PRONG 3: Click outside sidebar to collapse
        document.addEventListener('click', (e) => {
          const sidebar = document.querySelector('.side-bar-container');
          if (sidebar && sidebar.classList.contains('mf-expanded')) {
            if (!sidebar.contains(e.target) && !overlayDiv.contains(e.target)) {
              collapseSidebar();
            }
          }
        }, true);

        // PRONG 4: Reset timer on sidebar interactions
        sidebar.addEventListener('click', (e) => {
          if (e.target.closest('.side-bar-button:not(:first-child)')) {
            resetTimer();
          }
        });
        sidebar.addEventListener('touchstart', resetTimer);

        // Ensure sidebar starts collapsed
        sidebar.classList.remove('mf-expanded');
        return true;
      };

      // PRONG 5: MutationObserver to catch sidebar immediately
      const observer = new MutationObserver((mutations) => {
        const sidebar = document.querySelector('.side-bar-container');
        if (sidebar && !sidebar.dataset.mfObserved) {
          sidebar.dataset.mfObserved = 'true';
          attemptSetup();
        }
      });

      // Start observing
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Try immediately
      if (attemptSetup()) {
        observer.disconnect();
        return;
      }

      // Retry periodically as fallback
      let attempts = 0;
      const maxAttempts = 30;
      const setupInterval = setInterval(() => {
        if (attemptSetup()) {
          clearInterval(setupInterval);
          observer.disconnect();
        } else if (attempts >= maxAttempts) {
          clearInterval(setupInterval);
          observer.disconnect();
          console.error('[MobileFriendly] ✗✗✗ FAILED after', maxAttempts, 'attempts');
        }
        attempts++;
      }, 500);
    };

      // Run sidebar setup IMMEDIATELY
      // ENABLED: Sidebar toggle
      setupSidebarToggle();

    } catch (error) {
      console.error('[MobileFriendly] ✗✗✗ FATAL ERROR IN INIT:', error);
      console.error('[MobileFriendly] Stack trace:', error.stack);
      alert('MobileFriendly Extension Error: ' + error.message);
    }


    // ================================================
    // PREVENT BROWSER ZOOM (allow only canvas zoom)
    // ================================================

    // 1. Modify viewport meta tag to prevent browser zoom
    const setupViewport = () => {
      let viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.name = 'viewport';
        document.head.appendChild(viewport);
      }
      // Set viewport to prevent user scaling
      viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    };
    setupViewport();

    // 2. Prevent gesture events on non-canvas elements (Safari)
    const preventZoomOnElement = (el) => {
      // Prevent Safari gesture zoom
      el.addEventListener('gesturestart', (e) => {
        if (!e.target.closest('canvas') && !e.target.closest('.graph-canvas-container')) {
          e.preventDefault();
        }
      }, { passive: false });

      el.addEventListener('gesturechange', (e) => {
        if (!e.target.closest('canvas') && !e.target.closest('.graph-canvas-container')) {
          e.preventDefault();
        }
      }, { passive: false });

      el.addEventListener('gestureend', (e) => {
        if (!e.target.closest('canvas') && !e.target.closest('.graph-canvas-container')) {
          e.preventDefault();
        }
      }, { passive: false });
    };

    // 3. Prevent multi-touch zoom (pinch) except on canvas
    const preventPinchZoom = () => {
      document.addEventListener('touchmove', (e) => {
        // If more than one finger and not on canvas, prevent zoom
        if (e.touches.length > 1) {
          const target = e.target;
          if (!target.closest('canvas') && !target.closest('.graph-canvas-container')) {
            e.preventDefault();
          }
        }
      }, { passive: false });

      // Also prevent double-tap zoom on non-canvas elements
      let lastTap = 0;
      document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTap < 300) {
          const target = e.target;
          if (!target.closest('canvas') && !target.closest('.graph-canvas-container')) {
            e.preventDefault();
          }
        }
        lastTap = now;
      }, { passive: false });
    };

    // Apply zoom prevention
    if (document.body) {
      preventZoomOnElement(document.body);
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        preventZoomOnElement(document.body);
      });
    }
    preventPinchZoom();

    // ================================================
    // MOBILE ZOOM SLIDER (replaces text input)
    // ================================================
    const setupZoomSlider = () => {
      // Create the slider overlay (hidden by default)
      const sliderOverlay = document.createElement('div');
      sliderOverlay.id = 'mf-zoom-overlay';
      sliderOverlay.innerHTML = `
        <style>
          #mf-zoom-overlay {
            display: none;
            position: fixed;
            bottom: 45px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(30, 30, 30, 0.95);
            border-radius: 6px;
            padding: 4px 8px;
            z-index: 10000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.4);
            border: 1px solid #444;
            pointer-events: none;
          }
          #mf-zoom-overlay.visible {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 6px;
            pointer-events: auto;
            touch-action: manipulation;
          }
          #mf-zoom-value {
            color: #4CAF50;
            font-size: 12px;
            font-weight: bold;
            min-width: 32px;
            text-align: center;
          }
          #mf-zoom-slider {
            width: 120px;
            height: 20px;
            -webkit-appearance: none;
            appearance: none;
            background: linear-gradient(to right, #333, #555);
            border-radius: 10px;
            outline: none;
          }
          #mf-zoom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: linear-gradient(135deg, #4CAF50, #45a049);
            cursor: pointer;
            box-shadow: 0 1px 4px rgba(0,0,0,0.3);
          }
          #mf-zoom-100 {
            padding: 2px 6px;
            border: none;
            border-radius: 3px;
            font-size: 10px;
            font-weight: bold;
            cursor: pointer;
            background: #FF9800;
            color: white;
          }
        </style>
        <div id="mf-zoom-value">100%</div>
        <input type="range" id="mf-zoom-slider" min="10" max="100" value="100">
        <button id="mf-zoom-100">100%</button>
      `;
      document.body.appendChild(sliderOverlay);

      const slider = sliderOverlay.querySelector('#mf-zoom-slider');
      const valueDisplay = sliderOverlay.querySelector('#mf-zoom-value');

      // Update zoom function
      const setZoom = (percent) => {
        const scale = percent / 100;
        try {
          if (app?.canvas?.ds) {
            app.canvas.ds.scale = scale;
            // Use requestAnimationFrame to ensure proper canvas update
            requestAnimationFrame(() => {
              app.canvas.setDirty(true, true);
              app.canvas.draw(true, true);
            });
          } else if (app?.canvas) {
            app.canvas.scale = scale;
            requestAnimationFrame(() => {
              app.canvas.setDirty?.(true, true);
              app.canvas.draw?.(true, true);
            });
          }
        } catch (e) {
        }
        valueDisplay.textContent = Math.round(percent) + '%';
        slider.value = percent;
      };

      // Get current zoom
      const getZoom = () => {
        if (app?.canvas?.ds?.scale) {
          return app.canvas.ds.scale * 100;
        } else if (app?.canvas?.scale) {
          return app.canvas.scale * 100;
        }
        return 100;
      };

      // Slider events
      slider.addEventListener('input', (e) => {
        setZoom(parseFloat(e.target.value));
      });

      // 100% button resets zoom
      sliderOverlay.querySelector('#mf-zoom-100').onclick = () => {
        setZoom(100);
      };

      // Create backdrop for closing (doesn't interfere with canvas events)
      const backdrop = document.createElement('div');
      backdrop.id = 'mf-zoom-backdrop';
      backdrop.style.cssText = `
        display: none;
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index: 9999;
        background: transparent;
      `;
      document.body.appendChild(backdrop);

      // Helper to close overlay
      const closeOverlay = () => {
        sliderOverlay.classList.remove('visible');
        backdrop.style.display = 'none';
      };

      // Helper to open overlay
      const openOverlay = () => {
        slider.value = getZoom();
        valueDisplay.textContent = Math.round(getZoom()) + '%';
        backdrop.style.display = 'block';
        sliderOverlay.classList.add('visible');
      };

      // Backdrop closes overlay when tapped
      backdrop.onclick = closeOverlay;

      // Intercept the native zoom controls button
      const interceptZoomControls = () => {
        // Target the zoom-controls-button with data-testid
        const zoomBtn = document.querySelector('[data-testid="zoom-controls-button"]');
        if (!zoomBtn || zoomBtn.dataset.mfIntercepted === 'true') return false;

        // Mark as intercepted
        zoomBtn.dataset.mfIntercepted = 'true';

        // Block native popup from opening
        const blockNative = (e) => {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          openOverlay();
          return false;
        };

        // Intercept at capture phase to run before native handlers
        zoomBtn.addEventListener('click', blockNative, { capture: true });
        // Also intercept pointerup/touchend which trigger on mobile
        zoomBtn.addEventListener('pointerup', blockNative, { capture: true });

        return true;
      };

      // Try to intercept zoom controls
      let zoomAttempts = 0;
      const zoomInterval = setInterval(() => {
        if (interceptZoomControls() || zoomAttempts >= 60) {
          if (zoomAttempts >= 60) console.warn('[MobileFriendly] Could not find zoom controls after 60 attempts');
          clearInterval(zoomInterval);
        }
        zoomAttempts++;
      }, 500);

      // Also watch for dynamic re-renders that might reset the button
      const watchZoomButton = () => {
        const observer = new MutationObserver(() => {
          const zoomBtn = document.querySelector('[data-testid="zoom-controls-button"]');
          if (zoomBtn && zoomBtn.dataset.mfIntercepted !== 'true') {
            interceptZoomControls();
          }
        });
        if (document.body) {
          observer.observe(document.body, { childList: true, subtree: true });
        }
      };
      watchZoomButton();
    };

    // Initialize zoom slider on mobile
    if (isMobile()) {
      if (document.body) {
        setupZoomSlider();
      } else {
        document.addEventListener('DOMContentLoaded', setupZoomSlider);
      }
    }

    // Add VERSION DEBUG indicator - visible on mobile to confirm new code loaded
    const VERSION = "14.8";
    let stats = { removed: 0, found: 0, skipped: 0, hidden: [] };

    const addVersionBadge = () => {
      // Show on mobile AND tablet
      if (window.innerWidth <= 1366 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // Remove old badge if exists
        const oldBadge = document.getElementById('mf-version-badge');
        if (oldBadge) oldBadge.remove();

        // Count buttons for debug
        const btnCount = document.querySelectorAll('button').length;
        const hiddenList = stats.hidden.slice(0, 3).join(',');

        const badge = document.createElement('div');
        badge.id = 'mf-version-badge';
        badge.style.cssText = `
          position: fixed !important;
          top: 8px !important;
          right: 7px !important;
          background: rgba(0, 200, 0, 0.9) !important;
          color: white !important;
          padding: 3px 6px !important;
          font-size: 8px !important;
          font-weight: bold !important;
          z-index: 999999 !important;
          border-radius: 3px !important;
          pointer-events: none !important;
          font-family: monospace !important;
          min-width: 48px !important;
          text-align: center !important;
        `;
        // Simplified text - just version number
        badge.textContent = `MF${VERSION}`;
        document.body.appendChild(badge);
      }
    };

    // TARGETED HIDING - Using JS-only approach (no blanket CSS hiding)
    // v11.7: Only hide on narrow screens (phones), not iPads
    const hideElements = () => {
      // Skip hiding on iPad-sized screens (820px+) - they can use normal UI
      if (window.innerWidth >= 820) return;
      if (!isMobile()) return;

      stats = { removed: 0, found: 0, skipped: 0, hidden: [] };
      const processed = new Set();

      // Hide element with tracking
      const hideEl = (el, reason) => {
        if (!el || processed.has(el)) return false;
        processed.add(el);
        try {
          el.style.cssText = 'display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;height:0!important;max-height:0!important;overflow:hidden!important;position:absolute!important;left:-9999px!important;';
          stats.removed++;
          stats.hidden.push(reason.substring(0, 15));
          return true;
        } catch (e) {
          return false;
        }
      };

      // Preserve check - v4.1 FIXED to protect workflow tabs properly!
      const preserve = (el) => {
        if (!el) return true;

        // CRITICAL: Protect our own debug pills!
        if (el.id === 'mf-version-badge') return true;
        if (el.id === 'mf-tab-debug') return true;
        if (el.id === 'mf-hit-debug') return true;
        if (el.id === 'mf-sidebar-overlay') return true;
        if (el.closest('#mf-version-badge')) return true;
        if (el.closest('#mf-tab-debug')) return true;
        if (el.closest('#mf-hit-debug')) return true;

        if (el.tagName === 'CANVAS') return true;
        if (el.closest('.side-tool-bar-container')) return true;
        if (el.closest('.mf-menu')) return true;

        // CRITICAL: Preserve bottom workspace panel
        if (el.closest('.comfyui-body-bottom')) return true;

        // Preserve workflow tabs
        const cls = (el.className || '').toString().toLowerCase();
        if (cls.includes('workflow-tab')) return true;
        if (cls.includes('p-togglebutton')) return true;
        if (cls.includes('p-selectbutton')) return true;
        if (cls.includes('breadcrumb')) return true;

        if (el.closest('.workflow-tabs')) return true;
        if (el.closest('.workflow-tabs-container')) return true;
        if (el.closest('.p-selectbutton')) return true;

        return false;
      };


      // ========================================
      // STRATEGY 0: Hide breadcrumb and "Idle" status elements
      // ========================================
      document.querySelectorAll('.p-breadcrumb, [class*="breadcrumb"]').forEach(el => {
        if (!preserve(el)) {
          hideEl(el, 'breadcrumb');
        }
      });

      // Find and hide any element that just contains "Idle" text
      document.querySelectorAll('*').forEach(el => {
        if (preserve(el)) return;
        if (el.childNodes.length === 1 &&
            el.childNodes[0].nodeType === 3 &&
            el.textContent.trim() === 'Idle') {
          hideEl(el, 'idle-text');
        }
      });

      // ========================================
      // STRATEGY 1: Target .actionbar-container (horizontal top bar)
      // ========================================
      document.querySelectorAll('.actionbar-container').forEach(el => {
        if (!preserve(el)) {
          hideEl(el, 'actionbar');
        }
      });

      // ========================================
      // STRATEGY 2: Target floating .p-panel with .queue-button-group (Run button box)
      // ========================================
      document.querySelectorAll('.p-panel').forEach(panel => {
        if (preserve(panel)) return;

        const hasQueueBtn = panel.querySelector('.queue-button-group') ||
                           panel.querySelector('[data-testid="queue-button"]') ||
                           panel.querySelector('.comfyui-queue-button');
        const cls = (panel.className || '').toString();
        const isActionbar = cls.includes('actionbar');
        const style = window.getComputedStyle(panel);
        const isFixed = style.position === 'fixed';

        if ((hasQueueBtn || isActionbar) && isFixed) {
          hideEl(panel, 'p-panel');
        }
      });

      // ========================================
      // STRATEGY 3: Target .drag-handle and its parent floating panel
      // ========================================
      document.querySelectorAll('.drag-handle').forEach(el => {
        if (preserve(el)) return;
        let parent = el.closest('.p-panel');
        if (parent && !preserve(parent)) {
          hideEl(parent, 'drag-parent');
        }
      });

      // ========================================
      // Workflow tabs - just count them for the badge (no styling changes)
      // ========================================
      const tabLabels = document.querySelectorAll('.workflow-label');
      stats.hidden.push('tabs:' + tabLabels.length);

    };

    // Run and update badge
    const runHideAndBadge = () => {
      hideElements();
      addVersionBadge();
    };

    // Run immediately
    runHideAndBadge();

    // Run on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      runHideAndBadge();
    });

    // Run on load (after all resources)
    window.addEventListener('load', () => {
      runHideAndBadge();
    });

    // Keep running every 500ms for first 30 seconds to catch Vue renders
    let attempts = 0;
    const maxAttempts = 60; // 30 seconds
    const interval = setInterval(() => {
      runHideAndBadge();
      attempts++;
      if (attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 500);

    // MutationObserver as additional backup
    const startObserving = () => {
      if (document.body) {
        const observer = new MutationObserver(() => hideElements());
        observer.observe(document.body, { childList: true, subtree: true });
      } else {
        setTimeout(startObserving, 100);
      }
    };
    startObserving();

    // ================================================
    // PREVENT AUTO-FOCUS ON SEARCH INPUTS (iPhone only)
    // Workflows, Model Library, Nodes sidebars auto-focus search
    // which triggers keyboard - prevent this on small screens
    // ================================================
    const isIPhone = () => /iPhone/i.test(navigator.userAgent) && window.innerWidth < 500;

    const preventSearchAutoFocus = () => {
      if (!isIPhone()) return;

      // Watch for sidebar panels opening
      const sidebarObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return; // Only element nodes

            // Check if this is a sidebar panel
            const isSidebar = node.classList?.contains('p-sidebar') ||
                             node.classList?.contains('side-bar-panel') ||
                             node.querySelector?.('.p-sidebar');

            if (isSidebar || node.querySelector?.('input[type="text"], input[type="search"], .p-inputtext')) {
              // Find and blur any auto-focused inputs
              setTimeout(() => {
                const inputs = (node.querySelectorAll ? node : document).querySelectorAll(
                  '.p-sidebar input[type="text"], .p-sidebar input[type="search"], .p-sidebar .p-inputtext, ' +
                  '.side-bar-panel input[type="text"], .side-bar-panel input[type="search"], ' +
                  '[class*="search"] input, [class*="filter"] input'
                );
                inputs.forEach(input => {
                  if (document.activeElement === input) {
                    input.blur();
                  }
                });
              }, 50);

              // Also prevent immediate focus
              setTimeout(() => {
                if (document.activeElement?.tagName === 'INPUT') {
                  const input = document.activeElement;
                  const inSidebar = input.closest('.p-sidebar, .side-bar-panel');
                  if (inSidebar) {
                    input.blur();
                  }
                }
              }, 100);
            }
          });
        });
      });

      if (document.body) {
        sidebarObserver.observe(document.body, { childList: true, subtree: true });
      }
    };
    preventSearchAutoFocus();


    // ================================================
    // LONG-PRESS TO MOVE NODES (mobile/tablet)
    // v8.3: Uses LiteGraph's native flags.pinned property
    // All nodes are pinned by default, unpinned on long-press
    // Serialize is patched to remove pinned flags before save
    // ================================================
    const setupLongPressToMove = () => {
      if (!isMobile()) return;

      const LONG_PRESS_MS = 350;
      const MOVE_THRESHOLD = 10;

      // Global state
      window.mfDragState = {
        timer: null,
        activeNode: null,
        startX: 0,
        startY: 0,
        wasUnpinned: false,
        repinTimer: null,       // v9.3: Timer for delayed re-pin
        unpinnedNode: null      // v9.3: Track which node is temporarily unpinned
      };

      const state = window.mfDragState;

      // Haptic feedback - vibration on Android, audio click on iOS
      const haptic = () => {
        try {
          // Android: use vibration API
          if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
        } catch (e) {}

        // iOS workaround: play a short "click" sound for feedback
        // This creates a psychological haptic sensation
        try {
          const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          const oscillator = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioCtx.destination);

          oscillator.frequency.value = 200; // Low frequency for "thump" feel
          oscillator.type = 'sine';

          gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);

          oscillator.start(audioCtx.currentTime);
          oscillator.stop(audioCtx.currentTime + 0.05);
        } catch (e) {}
      };

      // v9.4: Pulsing border effect that speeds up until lock
      let pulseInterval = null;
      let pulseOverlay = null;

      const startPulsingBorder = () => {
        // Create overlay if not exists
        if (!pulseOverlay) {
          pulseOverlay = document.createElement('div');
          pulseOverlay.id = 'mf-pulse-border';
          pulseOverlay.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            pointer-events: none; z-index: 99998;
            border: 4px solid transparent;
            box-sizing: border-box;
            transition: border-color 0.15s ease;
          `;
          document.body.appendChild(pulseOverlay);
        }

        // Pulse animation: starts slow, gets faster - totals exactly 3 seconds
        let pulseCount = 0;
        const maxPulses = 12;
        // Sum = 600+500+400+350+300+250+200+150+100+75+50+25 = 3000ms
        const intervals = [600, 500, 400, 350, 300, 250, 200, 150, 100, 75, 50, 25];

        const doPulse = () => {
          if (pulseCount >= maxPulses) {
            stopPulsingBorder();
            return;
          }

          // Flash border green
          pulseOverlay.style.borderColor = '#4CAF50';
          setTimeout(() => {
            if (pulseOverlay) pulseOverlay.style.borderColor = 'transparent';
          }, intervals[pulseCount] / 2);

          pulseCount++;

          // Schedule next pulse (faster each time)
          const nextInterval = intervals[Math.min(pulseCount, intervals.length - 1)];
          pulseInterval = setTimeout(doPulse, nextInterval);
        };

        doPulse();
      };

      const stopPulsingBorder = () => {
        if (pulseInterval) {
          clearTimeout(pulseInterval);
          pulseInterval = null;
        }
        if (pulseOverlay) {
          pulseOverlay.style.borderColor = 'transparent';
        }
      };

      // Check if object is a group (not a node)
      const isGroup = (obj) => {
        if (!obj) return false;
        // Groups don't have a 'type' property like nodes do
        // Groups have properties like: title, bounding, color, font_size, etc.
        // Nodes have: type, id, inputs, outputs, etc.
        if (obj.type !== undefined) return false; // Has type = it's a node
        if (obj.inputs !== undefined || obj.outputs !== undefined) return false; // Has I/O = node
        if (obj.bounding !== undefined) return true; // Has bounding = likely a group
        return false;
      };

      // Pin a single node (but NOT groups)
      const pinNode = (node) => {
        if (!node) return;
        if (isGroup(node)) return; // Skip groups!
        if (!node.flags) node.flags = {};
        node.flags.pinned = true;
      };

      // Unpin a single node
      const unpinNode = (node) => {
        if (!node?.flags) return;
        node.flags.pinned = false;
      };

      // v11.7: Force-lock any currently unpinned node (cleanup before unlocking new one)
      const forceLockCurrentlyUnpinned = () => {
        if (state.unpinnedNode) {
          pinNode(state.unpinnedNode);
          state.unpinnedNode = null;
        }
        if (state.repinTimer) {
          clearTimeout(state.repinTimer);
          state.repinTimer = null;
        }
        stopPulsingBorder();
      };

      // Pin ALL existing nodes
      const pinAllNodes = () => {
        const graph = app?.graph;
        if (!graph?._nodes) return 0;

        let count = 0;
        for (const node of graph._nodes) {
          pinNode(node);
          count++;
        }
        return count;
      };

      // Watch for new nodes being added and pin them
      const watchForNewNodes = () => {
        const graph = app?.graph;
        if (!graph || graph._mfWatching) return false;
        graph._mfWatching = true;

        // Patch graph.add() - catches individually added nodes
        const origAdd = graph.add.bind(graph);
        graph.add = function(node, ...args) {
          const result = origAdd(node, ...args);
          if (node) {
            pinNode(node);
          }
          return result;
        };

        // Patch graph.configure() - catches workflow loads
        const origConfigure = graph.configure.bind(graph);
        graph.configure = function(data, ...args) {
          const result = origConfigure(data, ...args);
          // Re-pin all nodes after workflow loads
          setTimeout(() => {
            pinAllNodes();
          }, 100);
          return result;
        };

        return true;
      };

      // Patch serialize to REMOVE pinned flags before saving
      // This ensures workflows load without pinned nodes on desktop
      const patchSerialize = () => {
        const graph = app?.graph;
        if (!graph || graph._mfSerializePatched) return false;
        graph._mfSerializePatched = true;

        const origSerialize = graph.serialize.bind(graph);
        graph.serialize = function(...args) {
          // Temporarily unpin ALL nodes
          const nodeStates = [];
          for (const node of this._nodes || []) {
            if (node.flags?.pinned) {
              nodeStates.push({ node, wasPinned: true });
              node.flags.pinned = false;
            }
          }

          // Serialize without pinned flags
          const result = origSerialize(...args);

          // Restore pinned state
          for (const { node } of nodeStates) {
            node.flags.pinned = true;
          }

          return result;
        };

        return true;
      };

      // Get node at touch position
      // v8.9: REVERSE APPROACH - for each node, calculate screen position, check if touch hits it
      // v11.7: Added debug toast to diagnose hit detection issues
      const getNodeAtPosition = (clientX, clientY) => {
        try {
          const gc = app?.canvas;
          if (!gc?.graph) return { node: null };
          const canvasEl = document.querySelector('canvas');
          if (!canvasEl) return { node: null };
          const rect = canvasEl.getBoundingClientRect();
          const scale = gc.ds?.scale || 1;
          const offset = gc.ds?.offset || [0, 0];
          const graphX = (clientX - rect.left) / scale - offset[0];
          const graphY = (clientY - rect.top) / scale - offset[1];
          const node = gc.getNodeOnPos(graphX, graphY);
          return { node: node || null };
        } catch (e) {
          return { node: null };
        }
      };


      // Setup touch handlers for long-press detection
      const setupTouchHandlers = () => {
        if (document._mfTouchSetup) return true;
        document._mfTouchSetup = true;

        // TOUCHSTART on document - check if it's on canvas and on a node
        document.addEventListener('touchstart', (e) => {
          if (e.touches.length !== 1) return;

          const touch = e.touches[0];

          // Check if touch is on canvas
          const canvasEl = document.querySelector('canvas');
          if (!canvasEl) return;

          const rect = canvasEl.getBoundingClientRect();
          const isOnCanvas = touch.clientX >= rect.left && touch.clientX <= rect.right &&
                             touch.clientY >= rect.top && touch.clientY <= rect.bottom;

          if (!isOnCanvas) return;

          // Try to find node at position
          const result = getNodeAtPosition(touch.clientX, touch.clientY);

          if (result.node) {
            const node = result.node;
            const isPinned = node.flags?.pinned;

            // If grabbing an already-unpinned node (the SAME node), stop the pulsing and clear re-pin timer
            if (!isPinned && state.unpinnedNode === node) {
              stopPulsingBorder();
              if (state.repinTimer) {
                clearTimeout(state.repinTimer);
                state.repinTimer = null;
              }
            }

            // v11.7: If there's ANOTHER unpinned node (not this one), lock it immediately
            // This ensures only one node is ever unlocked at a time
            if (state.unpinnedNode && state.unpinnedNode !== node) {
              forceLockCurrentlyUnpinned();
            }

            if (isPinned) {
              state.activeNode = node;
              state.startX = touch.clientX;
              state.startY = touch.clientY;
              state.wasUnpinned = false;

              if (state.timer) clearTimeout(state.timer);

              state.timer = setTimeout(() => {
                if (state.activeNode === node) {
                  const gc = app.canvas;

                  // v11.7: Double-check and force-lock any lingering unpinned node
                  if (state.unpinnedNode && state.unpinnedNode !== node) {
                    forceLockCurrentlyUnpinned();
                  }

                  // Unpin the node
                  unpinNode(node);
                  state.unpinnedNode = node; // v9.3: Track for delayed re-pin

                  // v9.2: Directly set LiteGraph's internal drag state
                  gc.node_dragged = node;
                  gc.selected_nodes = {};
                  gc.selected_nodes[node.id] = node;

                  // Set last_mouse to current position
                  const canvas = document.querySelector('canvas');
                  const rect = canvas.getBoundingClientRect();
                  const scale = gc.ds?.scale || 1;
                  const offset = gc.ds?.offset || [0, 0];
                  const graphX = (state.startX - rect.left) / scale - offset[0];
                  const graphY = (state.startY - rect.top) / scale - offset[1];

                  gc.last_mouse = [graphX, graphY];
                  gc.graph_mouse = [graphX, graphY];
                  gc.dragging_canvas = false;

                  state.wasUnpinned = true;
                  state.timer = null;
                  haptic();

                  // Start 3s countdown + pulsing immediately at unpin
                  startPulsingBorder();

                  // Start re-pin timer
                  if (state.repinTimer) clearTimeout(state.repinTimer);
                  const nodeToRepin = node;
                  state.repinTimer = setTimeout(() => {
                    pinNode(nodeToRepin);
                    state.unpinnedNode = null;
                    state.repinTimer = null;
                    stopPulsingBorder();
                  }, 3000);
                }
              }, LONG_PRESS_MS);
            }
          }
        }, { capture: true, passive: true });

        // TOUCHMOVE on document
        document.addEventListener('touchmove', (e) => {
          if (state.wasUnpinned) {
            const touch = e.touches[0];
            const canvas = document.querySelector('canvas');
            if (canvas && touch) {
              canvas.dispatchEvent(new MouseEvent('mousemove', {
                bubbles: true,
                cancelable: true,
                clientX: touch.clientX,
                clientY: touch.clientY,
                buttons: 1,
              }));
            }
            return;
          }

          // If no active timer/node, nothing to do
          if (!state.timer || !state.activeNode) return;

          const touch = e.touches[0];
          const dist = Math.sqrt(
            Math.pow(touch.clientX - state.startX, 2) +
            Math.pow(touch.clientY - state.startY, 2)
          );

          if (dist > MOVE_THRESHOLD) {
            clearTimeout(state.timer);
            state.timer = null;
          }
        }, { capture: true, passive: true });

        // TOUCHEND on document
        document.addEventListener('touchend', (e) => {
          if (state.wasUnpinned) {
            const canvas = document.querySelector('canvas');
            if (canvas) {
              const lastTouch = e.changedTouches?.[0];
              canvas.dispatchEvent(new MouseEvent('mouseup', {
                bubbles: true,
                cancelable: true,
                clientX: lastTouch?.clientX ?? 0,
                clientY: lastTouch?.clientY ?? 0,
                buttons: 0,
              }));
            }
          }

          if (state.timer) {
            clearTimeout(state.timer);
            state.timer = null;
          }

          // Reset the 3s timer every time user lifts finger while node is unlocked
          if (state.unpinnedNode) {
            const nodeToRepin = state.unpinnedNode;

            // Clear existing timer and start fresh 3s countdown
            if (state.repinTimer) clearTimeout(state.repinTimer);

            // Restart pulsing
            stopPulsingBorder();
            startPulsingBorder();

            state.repinTimer = setTimeout(() => {
              pinNode(nodeToRepin);
              state.unpinnedNode = null;
              state.repinTimer = null;
              stopPulsingBorder();
            }, 3000);
          }

          state.activeNode = null;
          state.wasUnpinned = false;
        }, { capture: true, passive: true });

        // TOUCHCANCEL on document
        document.addEventListener('touchcancel', () => {
          if (state.timer) {
            clearTimeout(state.timer);
            state.timer = null;
          }
          if (state.activeNode && state.wasUnpinned) {
            pinNode(state.activeNode);
          }
          if (state.unpinnedNode) {
            pinNode(state.unpinnedNode);
            state.unpinnedNode = null;
          }
          if (state.repinTimer) {
            clearTimeout(state.repinTimer);
            state.repinTimer = null;
          }
          stopPulsingBorder();
          state.activeNode = null;
          state.wasUnpinned = false;
        }, { capture: true, passive: true });

        return true;
      };

      // Main setup function
      const setup = () => {
        const graph = app?.graph;
        if (!graph?._nodes) return false;

        // Pin all existing nodes
        pinAllNodes();

        // Watch for new nodes AND workflow loads
        watchForNewNodes();

        // Patch serialize to strip pins before save
        patchSerialize();

        // Setup touch handlers
        setupTouchHandlers();

        // Re-pin periodically for first 10 seconds to catch late loads
        let repinCount = 0;
        const repinInterval = setInterval(() => {
          pinAllNodes();
          repinCount++;
          if (repinCount >= 10) {
            clearInterval(repinInterval);
          }
        }, 1000);

        // v11.7: Periodic sweep for orphaned unpinned nodes
        // This catches nodes that got unpinned but lost tracking (edge cases)
        // Also catches newly added nodes that bypassed our add() patch
        state.orphanSweepInterval = setInterval(() => {
          const graph = app?.graph;
          if (!graph?._nodes) return;

          for (const node of graph._nodes) {
            // Skip groups - they should stay unpinned
            if (isGroup(node)) continue;

            // If node is unpinned but NOT the one we're tracking, pin it
            if (node.flags && node.flags.pinned === false) {
              if (state.unpinnedNode !== node) {
                node.flags.pinned = true;
              }
            }
            // Also pin nodes that have no flags at all (newly created)
            if (!node.flags) {
              node.flags = { pinned: true };
            }
          }
        }, 2000); // Every 2 seconds

        return true;
      };

      // Retry until app is ready
      let attempts = 0;
      const interval = setInterval(() => {
        if (setup() || attempts >= 50) {
          clearInterval(interval);
        }
        attempts++;
      }, 200);

    };
    setupLongPressToMove();

    // ================================================
    // WORKFLOW TAB NAVIGATION (mobile only)
    // v10.0: Single tab display with arrows and counter
    // Shows one tab at a time, loops at ends
    // ================================================
    const setupTabNavigation = () => {
      // Visual debug for iPhone - expandable log panel
      const debugLog = [];
      let debugExpanded = false;

      const showTabDebug = (msg) => {
        const timestamp = new Date().toLocaleTimeString().split(' ')[0];
        debugLog.push(`${timestamp} ${msg}`);

        let container = document.getElementById('mf-tab-debug');
        if (!container) {
          container = document.createElement('div');
          container.id = 'mf-tab-debug';
          container.style.cssText = `
            position: fixed; top: 8px; right: 65px;
            background: #2196F3; color: white;
            padding: 3px 6px; border-radius: 3px;
            font-size: 8px; z-index: 999999;
            font-family: monospace;
            cursor: pointer;
            max-width: 150px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            transition: all 0.2s ease;
          `;
          container.innerHTML = `
            <div id="mf-debug-header" style="display:flex;justify-content:space-between;align-items:center;">
              <span id="mf-debug-latest" style="font-size:8px;">Loading...</span>
              <span id="mf-debug-count" style="margin-left:4px;background:rgba(0,0,0,0.3);padding:1px 4px;border-radius:8px;font-size:7px;">0</span>
            </div>
            <div id="mf-debug-log" style="display:none;margin-top:8px;max-height:200px;overflow-y:auto;border-top:1px solid rgba(255,255,255,0.3);padding-top:6px;"></div>
          `;
          document.body.appendChild(container);

          // Toggle expand/collapse on tap
          container.onclick = (e) => {
            e.stopPropagation();
            debugExpanded = !debugExpanded;
            const logEl = document.getElementById('mf-debug-log');
            if (debugExpanded) {
              logEl.style.display = 'block';
              logEl.innerHTML = debugLog.map(l => `<div style="padding:2px 0;border-bottom:1px solid rgba(255,255,255,0.1);">${l}</div>`).join('');
              logEl.scrollTop = logEl.scrollHeight;
              container.style.maxWidth = '90vw';
              container.style.width = '280px';
            } else {
              logEl.style.display = 'none';
              container.style.width = 'auto';
            }
          };
        }

        // Update latest message and count
        const latestEl = document.getElementById('mf-debug-latest');
        const countEl = document.getElementById('mf-debug-count');
        const logEl = document.getElementById('mf-debug-log');

        if (latestEl) latestEl.textContent = msg;
        if (countEl) countEl.textContent = debugLog.length;

        // If expanded, update the log
        if (debugExpanded && logEl) {
          logEl.innerHTML = debugLog.map(l => `<div style="padding:2px 0;border-bottom:1px solid rgba(255,255,255,0.1);">${l}</div>`).join('');
          logEl.scrollTop = logEl.scrollHeight;
        }
      };

      showTabDebug('TabNav: init');
      if (!isMobile()) {
        showTabDebug('TabNav: not mobile');
        return;
      }
      showTabDebug('TabNav: mobile=yes');

      // Inject CSS for single-tab display
      const tabStyles = document.createElement('style');
      tabStyles.id = 'mf-tab-styles';
      tabStyles.textContent = `
        /* Hide on desktop - only show on mobile */
        .mf-tab-bar {
          display: none !important;
        }
        .workflow-tabs.mf-tabs-hidden {
          position: static !important;
          left: auto !important;
          opacity: 1 !important;
          pointer-events: auto !important;
        }

        @media (max-width: 768px) {
          /* Show our nav bar on mobile */
          .mf-tab-bar {
            display: flex !important;
          }
          /* Hide original tabs on mobile */
          .workflow-tabs.mf-tabs-hidden {
            position: absolute !important;
            left: -9999px !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }

          /* Make parent containers tall enough for two-line tab */
          .workflow-tabs-container {
            height: auto !important;
            min-height: 58px !important;
          }

          .workflow-tabs-container .p-scrollpanel,
          .workflow-tabs-container .p-scrollpanel-content-container,
          .workflow-tabs-container .p-scrollpanel-content {
            height: auto !important;
            min-height: 58px !important;
            overflow: visible !important;
          }

          /* Workflow tabs container - position beside sidebar, below progress bar */
          .workflow-tabs-container {
            position: fixed !important;
            top: 18px !important;
            left: 49px !important;
            right: 0 !important;
            z-index: 9998 !important;
            background: var(--comfy-menu-bg) !important;
            padding: 4px 8px !important;
            height: 48px !important;
            min-height: 48px !important;
          }

          /* Tab navigation bar - single line, compact */
          .mf-tab-bar {
            display: flex !important;
            align-items: center !important;
            gap: 6px !important;
            padding: 4px 6px !important;
            background: rgba(40, 40, 40, 0.95) !important;
            border-radius: 6px !important;
            max-width: 280px !important;
            height: 42px !important;
          }

          .mf-tab-arrow {
            width: 36px !important;
            height: 42px !important;
            min-width: 32px !important;
            border: none !important;
            background: rgba(80, 80, 80, 0.9) !important;
            color: white !important;
            border-radius: 4px !important;
            font-size: 14px !important;
            font-weight: bold !important;
            cursor: pointer !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
            transition: background 0.15s !important;
          }

          .mf-tab-arrow:active {
            background: rgba(100, 100, 100, 0.95) !important;
            transform: scale(0.95) !important;
          }

          .mf-tab-display {
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            min-width: 0 !important;
            overflow: visible !important;
            height: 42px !important;
          }

          .mf-tab-name {
            font-size: 13px !important;
            font-weight: 600 !important;
            color: white !important;
            max-width: 160px !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
            text-align: center !important;
            cursor: pointer !important;
            padding: 4px 8px !important;
            border-radius: 4px !important;
            transition: background 0.15s !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 4px !important;
          }

          .mf-tab-name:active {
            background: rgba(255,255,255,0.1) !important;
          }

          .mf-tab-name .mf-dropdown-arrow {
            font-size: 8px !important;
            opacity: 0.8 !important;
            flex-shrink: 0 !important;
          }

          .mf-tab-name .mf-name-text {
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
          }

          .mf-tab-name.modified .mf-name-text::after {
            content: ' •' !important;
            color: #FF9800 !important;
          }

          /* Breadcrumb already hidden above at line 265-276 */

          .mf-tab-counter {
            font-size: 11px !important;
            color: #aaa !important;
            margin-top: 2px !important;
            line-height: 1.2 !important;
          }

          /* Our custom workflow dropdown menu */
          .mf-workflow-menu {
            position: fixed !important;
            top: 55px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            background: rgba(30, 30, 30, 0.98) !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
            border-radius: 8px !important;
            padding: 8px 0 !important;
            min-width: 180px !important;
            z-index: 999999 !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5) !important;
          }

          .mf-workflow-menu-item {
            display: block !important;
            width: 100% !important;
            padding: 10px 16px !important;
            background: none !important;
            border: none !important;
            color: white !important;
            font-size: 14px !important;
            text-align: left !important;
            cursor: pointer !important;
          }

          .mf-workflow-menu-item:active {
            background: rgba(255,255,255,0.1) !important;
          }

          .mf-workflow-menu-divider {
            height: 1px !important;
            background: rgba(255,255,255,0.1) !important;
            margin: 4px 0 !important;
          }
        }
      `;
      document.head.appendChild(tabStyles);

      let navBar = null;
      let tabNameEl = null;
      let counterEl = null;

      // Get fresh list of tabs (handles dynamic tab creation)
      const getTabs = () => {
        const container = document.querySelector('.workflow-tabs');
        return container ? Array.from(container.querySelectorAll('.p-togglebutton')) : [];
      };

      const getCurrentIndex = () => {
        const tabs = getTabs();
        const idx = tabs.findIndex(t =>
          t.classList.contains('p-togglebutton-checked') ||
          t.getAttribute('data-p-checked') === 'true' ||
          t.getAttribute('aria-pressed') === 'true'
        );
        return idx >= 0 ? idx : 0;
      };

      const getTabInfo = (tab) => {
        if (!tab) return { name: 'Workflow', modified: false };
        const labelEl = tab.querySelector('.workflow-label');
        const name = labelEl?.textContent?.trim() || 'Workflow';
        // Check for modified indicator (the dot)
        const hasModified = tab.querySelector('[class*="indicator"]') !== null ||
                           tab.innerHTML.includes('•');
        return { name, modified: hasModified };
      };

      const updateDisplay = () => {
        const tabs = getTabs();
        const idx = getCurrentIndex();
        const total = tabs.length;
        const tab = tabs[idx];
        const info = getTabInfo(tab);

        if (tabNameEl) {
          const nameSpan = tabNameEl.querySelector('.mf-name-text');
          if (nameSpan) nameSpan.textContent = info.name;
          tabNameEl.classList.toggle('modified', info.modified);
        }
        if (counterEl) {
          counterEl.textContent = `${idx + 1} / ${total}`;
          counterEl.style.display = 'block'; // Force visible
        }
        showTabDebug(`Display: ${info.name} (${idx+1}/${total})`);
      };

      const navigateTo = (direction) => {
        const tabs = getTabs();
        if (tabs.length === 0) return;

        let idx = getCurrentIndex();
        if (direction === 'prev') {
          idx = idx <= 0 ? tabs.length - 1 : idx - 1; // Loop to end
        } else {
          idx = idx >= tabs.length - 1 ? 0 : idx + 1; // Loop to start
        }

        if (tabs[idx]) {
          tabs[idx].click();
          setTimeout(updateDisplay, 100);
        }
      };

      const injectTabNav = () => {
        const tabsContainer = document.querySelector('.workflow-tabs');
        if (!tabsContainer) {
          return false;
        }
        if (tabsContainer.dataset.mfTabNav === 'true') {
          showTabDebug('Already setup');
          return true;
        }

        const tabs = getTabs();
        showTabDebug(`Found container, ${tabs.length} tabs`);
        if (tabs.length === 0) return false;

        tabsContainer.dataset.mfTabNav = 'true';

        // Hide original tabs
        tabsContainer.classList.add('mf-tabs-hidden');

        // Create our navigation bar
        navBar = document.createElement('div');
        navBar.className = 'mf-tab-bar';
        navBar.id = 'mf-tab-bar';

        const prevBtn = document.createElement('button');
        prevBtn.className = 'mf-tab-arrow';
        prevBtn.textContent = '◀';
        prevBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          showTabDebug(`◀ clicked, tabs: ${getTabs().length}`);
          navigateTo('prev');
        };

        const display = document.createElement('div');
        display.className = 'mf-tab-display';

        tabNameEl = document.createElement('div');
        tabNameEl.className = 'mf-tab-name';
        tabNameEl.innerHTML = `
          <span class="mf-name-text"></span>
          <span class="mf-dropdown-arrow">▼</span>
        `;

        // Click on workflow name shows our custom dropdown menu
        tabNameEl.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();

          // Remove existing menu if any
          const existingMenu = document.getElementById('mf-workflow-menu');
          if (existingMenu) {
            existingMenu.remove();
            return;
          }

          // Create our dropdown menu
          const menu = document.createElement('div');
          menu.id = 'mf-workflow-menu';
          menu.className = 'mf-workflow-menu';

          const menuItems = [
            { label: 'Save', cmd: 'Comfy.SaveWorkflow' },
            { label: 'Save As...', cmd: 'Comfy.SaveWorkflowAs' },
            { divider: true },
            { label: 'New Workflow', cmd: 'Comfy.NewBlankWorkflow' },
            { label: 'Open Workflow', cmd: 'Comfy.OpenWorkflow' },
            { divider: true },
            { label: 'Clear Workflow', cmd: 'Comfy.ClearWorkflow' },
          ];

          menuItems.forEach(item => {
            if (item.divider) {
              const div = document.createElement('div');
              div.className = 'mf-workflow-menu-divider';
              menu.appendChild(div);
            } else {
              const btn = document.createElement('button');
              btn.className = 'mf-workflow-menu-item';
              btn.textContent = item.label;
              btn.onclick = async () => {
                menu.remove();
                try {
                  // Try multiple ways to get commandService
                  let cs = window.comfyAPI?.services?.commandService;
                  if (!cs && window.app?.extensionManager) {
                    cs = window.app.extensionManager.command;
                  }
                  if (!cs && window.app?.commands) {
                    cs = window.app.commands;
                  }

                  if (cs && cs.execute) {
                    await cs.execute(item.cmd, {});
                    showTabDebug(`OK: ${item.label}`);
                  } else if (cs && cs[item.cmd]) {
                    await cs[item.cmd]();
                    showTabDebug(`OK: ${item.label}`);
                  } else {
                    // Debug: show what's available
                    const hasComfyAPI = !!window.comfyAPI;
                    const hasServices = !!window.comfyAPI?.services;
                    const hasApp = !!window.app;
                    showTabDebug(`No CS. API:${hasComfyAPI} svc:${hasServices} app:${hasApp}`);
                  }
                } catch (err) {
                  showTabDebug(`Err: ${err.message.substring(0,20)}`);
                }
              };
              menu.appendChild(btn);
            }
          });

          document.body.appendChild(menu);
          showTabDebug('Menu opened');

          // Close when clicking outside
          const closeMenu = (evt) => {
            if (!evt.target.closest('#mf-workflow-menu')) {
              menu.remove();
              document.removeEventListener('click', closeMenu, true);
            }
          };
          setTimeout(() => {
            document.addEventListener('click', closeMenu, true);
          }, 100);
        };

        counterEl = document.createElement('div');
        counterEl.className = 'mf-tab-counter';

        display.appendChild(tabNameEl);
        display.appendChild(counterEl);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'mf-tab-arrow';
        nextBtn.textContent = '▶';
        nextBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          showTabDebug(`▶ clicked, tabs: ${getTabs().length}`);
          navigateTo('next');
        };

        navBar.appendChild(prevBtn);
        navBar.appendChild(display);
        navBar.appendChild(nextBtn);

        // Insert nav bar in place of original tabs
        tabsContainer.parentNode.insertBefore(navBar, tabsContainer);

        // Initial display
        updateDisplay();

        // Watch for tab changes (attribute changes on tabs)
        const tabObserver = new MutationObserver(() => {
          setTimeout(updateDisplay, 50);
        });
        tabs.forEach(tab => tabObserver.observe(tab, { attributes: true }));

        // Watch for new tabs being added
        const containerObserver = new MutationObserver(() => {
          setTimeout(updateDisplay, 100);
        });
        containerObserver.observe(tabsContainer, { childList: true });

        showTabDebug(`SUCCESS! ${tabs.length} tabs`);

        // Debug: find elements with "Idle" text
        setTimeout(() => {
          const allElements = document.querySelectorAll('*');
          const idleEls = [];
          allElements.forEach(el => {
            if (el.childNodes.length === 1 &&
                el.childNodes[0].nodeType === 3 &&
                el.textContent.trim() === 'Idle') {
              idleEls.push(`${el.tagName}.${el.className.substring(0,30)}`);
            }
          });
          if (idleEls.length > 0) {
            showTabDebug(`Idle found: ${idleEls.join(', ')}`);
          }
        }, 2000);
        return true;
      };

      // Retry until tabs are ready - page can take 60-80s to load
      let attempts = 0;
      const maxAttempts = 180; // 3 minutes at 1 second intervals
      const interval = setInterval(() => {
        const result = injectTabNav();
        attempts++;
        if (!result && attempts % 10 === 0) showTabDebug(`Waiting... ${attempts}s`);
        if (result || attempts >= maxAttempts) {
          clearInterval(interval);
          if (attempts >= maxAttempts) showTabDebug(`GAVE UP after ${maxAttempts}s`);
        }
      }, 1000);
    };
    setupTabNavigation();
  },

  async setup() {
    // Add settings toggle
    app.ui.settings.addSetting({
      id: "mobilefriendly.enabled",
      name: "MobileFriendly: Enable compact mobile UI",
      defaultValue: true,
      type: "boolean",
      onChange: (value) => {
        const style = document.getElementById('mobilefriendly-styles');
        if (style) {
          style.disabled = !value;
        }
      }
    });

    // Register consolidated Menu sidebar tab (first position with 000_ prefix)
    app.extensionManager.registerSidebarTab({
      id: "000_mf-menu",
      icon: "pi pi-th-large",
      title: "Menu",
      tooltip: "Mobile Menu",
      type: "custom",
      render: (el) => {
        // Queue count state (stored in closure)
        let queueCount = 1;

        el.innerHTML = `
          <style>
            .mf-menu { padding: 12px; display: flex; flex-direction: column; gap: 16px; }
            .mf-section-title { font-size: 11px; text-transform: uppercase; color: #888; margin-bottom: 8px; letter-spacing: 0.5px; }
            .mf-btn-row { display: flex; gap: 6px; align-items: center; }
            .mf-btn {
              flex: 1;
              padding: 10px 12px;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-size: 13px;
              font-weight: 600;
              background: #3a3a3a;
              color: white;
              min-height: 40px;
              transition: opacity 0.15s;
            }
            .mf-btn:hover { opacity: 0.85; }
            .mf-btn:active { transform: scale(0.98); opacity: 0.9; }
            .mf-btn-small { padding: 8px; min-width: 36px; max-width: 36px; flex: 0 0 36px; font-size: 18px; }
            .mf-btn-primary { background: linear-gradient(135deg, #4CAF50, #45a049); }
            .mf-btn-danger { background: #f44336; flex: 0 0 48px; max-width: 48px; }
            .mf-btn-manager { background: #795548; }
            .mf-btn-share { background: #9C27B0; }
            .mf-count {
              font-size: 16px;
              font-weight: bold;
              min-width: 28px;
              text-align: center;
              color: #fff;
              background: #555;
              padding: 8px 4px;
              border-radius: 4px;
            }
            .mf-status { padding: 4px 8px; font-size: 11px; color: #888; text-align: center; min-height: 16px; }
          </style>

          <div class="mf-menu">
            <!-- QUEUE Section (compact with count) -->
            <div class="mf-section">
              <div class="mf-section-title">Queue</div>
              <div class="mf-btn-row">
                <button class="mf-btn mf-btn-small" id="mf-count-down">−</button>
                <span class="mf-count" id="mf-count-display">1</span>
                <button class="mf-btn mf-btn-small" id="mf-count-up">+</button>
                <button class="mf-btn mf-btn-primary" id="mf-queue-btn">▶ Queue</button>
                <button class="mf-btn mf-btn-danger" data-cmd="Comfy.Interrupt">✕</button>
              </div>
              <button class="mf-btn" data-cmd="Workspace.ToggleBottomPanel" style="margin-top: 8px; width: 100%;">
                📋 Queue/History
              </button>
              <div class="mf-btn-row" style="margin-top: 8px;">
                <button class="mf-btn mf-btn-manager" data-cmd="Comfy.OpenManagerDialog">🔧 Manager</button>
                <button class="mf-btn mf-btn-share" data-cmd="share">📤 Share</button>
              </div>
              <div class="mf-status" id="mf-status"></div>
            </div>

            <!-- WORKFLOW Section -->
            <div class="mf-section">
              <div class="mf-section-title">Workflow</div>
              <div class="mf-btn-row">
                <button class="mf-btn" data-cmd="Comfy.SaveWorkflow">💾 Save</button>
                <button class="mf-btn" data-cmd="Comfy.OpenWorkflow">📂 Load</button>
              </div>
              <div class="mf-btn-row" style="margin-top: 8px;">
                <button class="mf-btn" data-cmd="Comfy.NewBlankWorkflow">📄 New</button>
                <button class="mf-btn" data-cmd="Comfy.LoadDefaultWorkflow">🔄 Default</button>
              </div>
            </div>
          </div>
        `;

        const countDisplay = el.querySelector('#mf-count-display');
        const statusEl = el.querySelector('#mf-status');

        // Queue count controls
        el.querySelector('#mf-count-down').onclick = () => {
          if (queueCount > 1) {
            queueCount--;
            countDisplay.textContent = queueCount;
          }
        };

        el.querySelector('#mf-count-up').onclick = () => {
          if (queueCount < 99) {
            queueCount++;
            countDisplay.textContent = queueCount;
          }
        };

        // Queue button with batch support
        el.querySelector('#mf-queue-btn').onclick = async () => {
          try {
            const commandService = window.comfyAPI?.services?.commandService;
            if (commandService) {
              for (let i = 0; i < queueCount; i++) {
                await commandService.execute('Comfy.QueuePrompt', {});
              }
              statusEl.textContent = queueCount > 1 ? `✓ Queued ${queueCount}!` : '✓ Queued!';
            } else {
              // Fallback
              const queueBtn = document.querySelector('.comfyui-queue-button button');
              if (queueBtn) {
                for (let i = 0; i < queueCount; i++) queueBtn.click();
                statusEl.textContent = '✓ Queued!';
              }
            }
          } catch (err) {
            console.error('[MobileFriendly] Queue error:', err);
            statusEl.textContent = 'Error: ' + err.message;
          }
          setTimeout(() => { statusEl.textContent = ''; }, 2000);
        };

        // Helper to close sidebar
        const closeSidebar = () => {
          // Try multiple methods to close the sidebar
          const sidebarCloseBtn = document.querySelector('.p-sidebar-close, .p-sidebar .p-icon-close, [aria-label="Close"]');
          if (sidebarCloseBtn) {
            sidebarCloseBtn.click();
            return true;
          }
          // Try clicking outside or pressing escape
          const sidebar = document.querySelector('.p-sidebar-active, .p-sidebar-visible');
          if (sidebar) {
            const mask = document.querySelector('.p-sidebar-mask');
            if (mask) mask.click();
          }
          return false;
        };

        // Wire up other command buttons
        el.querySelectorAll('[data-cmd]').forEach(btn => {
          btn.onclick = async () => {
            const cmd = btn.dataset.cmd;
            try {
              if (cmd === 'share') {
                const shareBtn = document.querySelector('[data-testid="share-button"]') ||
                                 document.querySelector('button[title*="Share"]');
                if (shareBtn) {
                  shareBtn.click();
                  statusEl.textContent = 'Share dialog opened';
                } else {
                  statusEl.textContent = 'Share not available';
                }
              } else if (cmd === 'Workspace.ToggleBottomPanel') {
                // Special handling: close sidebar first, then toggle panel
                closeSidebar();
                // Small delay to let sidebar close animation complete
                setTimeout(async () => {
                  const commandService = window.comfyAPI?.services?.commandService;
                  if (commandService) {
                    await commandService.execute(cmd, {});
                  }
                }, 150);
                statusEl.textContent = '✓ Queue panel toggled';
              } else {
                const commandService = window.comfyAPI?.services?.commandService;
                if (commandService) {
                  await commandService.execute(cmd, {});
                  if (cmd === 'Comfy.Interrupt') statusEl.textContent = '✓ Cancelled';
                  else statusEl.textContent = '✓ Done';
                } else {
                  // Fallback for specific commands
                  if (cmd === 'Comfy.Interrupt' && app.ui?.queue?.cancel) {
                    app.ui.queue.cancel();
                    statusEl.textContent = '✓ Cancelled';
                  } else if (cmd === 'Comfy.OpenManagerDialog') {
                    const managerBtn = document.querySelector('button[title*="Manager"]');
                    if (managerBtn) { managerBtn.click(); statusEl.textContent = '✓ Manager opened'; }
                  }
                }
              }
            } catch (err) {
              console.error('[MobileFriendly] Command error:', err);
              statusEl.textContent = 'Error: ' + err.message;
            }
            setTimeout(() => { statusEl.textContent = ''; }, 2000);
          };
        });

      }
    });

    // Move our sidebar tab to first position and style it - retry multiple times
    const setupSidebarButton = () => {
      const sidebar = document.querySelector('.side-tool-bar-container');
      if (!sidebar) return false;

      const buttons = sidebar.querySelectorAll('.side-bar-button');
      if (buttons.length === 0) return false;

      // Find our button by icon or tooltip
      const ourBtn = Array.from(buttons).find(b =>
        b.querySelector('.pi-th-large') ||
        b.querySelector('[class*="pi-th-large"]') ||
        b.getAttribute('title')?.includes('Mobile Menu') ||
        b.getAttribute('aria-label')?.includes('Menu')
      );

      if (ourBtn) {
        // Add styling attributes
        ourBtn.setAttribute('data-mf-menu', 'true');
        ourBtn.classList.add('mf-menu-button');

        // Move to TOP (visually) - sidebar uses column-reverse, so append to end
        const lastButton = buttons[buttons.length - 1];
        if (ourBtn !== lastButton) {
          sidebar.appendChild(ourBtn);
        }

        return true;
      }
      return false;
    };

    // Try multiple times as sidebar loads async
    let sidebarAttempts = 0;
    const sidebarInterval = setInterval(() => {
      if (setupSidebarButton() || sidebarAttempts >= 20) {
        clearInterval(sidebarInterval);
        if (sidebarAttempts >= 20) {
          console.warn('[MobileFriendly] Could not find sidebar button after 20 attempts');
        }
      }
      sidebarAttempts++;
    }, 500);

  }
});

