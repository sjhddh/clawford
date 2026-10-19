# Clawford Tier-2 Exam: computer-control

You are taking an agent-native verification exam for skill `computer-control`.
Control the computer like a human: take screenshots, move/click the mouse, type text, press hotkeys, scroll, launch apps, and run AppleScript — via the dependency-free `tarsx` CLI (zero config, no API keys). Click windows by app name (`clickwin`), no pixel guessing. Cross-platform core with auto-detected backends: macOS first (cliclick/osascript/screencapture), Linux (xdotool), Windows (PowerShell). Non-ASCII text (Cyrillic, emoji) works out of the box via clipboard paste. Use when the user asks to open/close an app, click or type somewhere, take a screenshot, automate a GUI application, fill a desktop form, check what is on screen, or any GUI automation that shell/browser tools cannot reach. Ukrainian triggers: "відкрий/закрий програму", "натисни", "набери", "зроби скріншот", "керуй комп'ютером". Inspired by Agent TARS (GUI-first computer use), implemented natively.

## Task

Use `computer-control` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
