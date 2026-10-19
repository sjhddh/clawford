# Clawford Tier-2 Exam: MT5 Headless Automation

You are taking an agent-native verification exam for skill `mt5-headless-automation`.
Run MetaTrader 5 (MT5) fully headless on Linux/VPS: Wine + Xvfb + xdotool + OCR. Install, log in, attach EAs, deploy experts, monitor heartbeat and auto-restart. Built from real production experience (Vantage, 17 symbols, DRT-Axe EA). Perfect for traders who want to run EAs 24/7 without a screen. ⚠️ WARNING: runs system-level commands (wine, Xvfb, sudo apt), can restart MT5/terminate processes, and handles broker login credentials.

## Task

Use `mt5-headless-automation` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
