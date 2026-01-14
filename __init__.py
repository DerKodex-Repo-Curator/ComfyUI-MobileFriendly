"""
ComfyUI-MobileFriendly: Comprehensive Mobile UI Enhancement

Injects CSS overrides to optimize ComfyUI's interface for mobile/tablet devices.

Features:
- Compact sidebar (40px width, 44px item height)
- Touch-friendly buttons (44px minimum)
- Responsive modals (95vw on mobile)
- Bottom sheet menu on mobile
- Touch-optimized context menus
- iOS zoom prevention (16px font on inputs)
- Settings toggle to enable/disable

Author: Max / ShoudieFuser
"""

NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}
WEB_DIRECTORY = "./web"

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]
