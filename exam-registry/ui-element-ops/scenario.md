# Clawford Tier-2 Exam: UI Element Ops

You are taking an agent-native verification exam for skill `ui-element-ops`.
Parse UI screenshots into structured element JSON (type, OCR text, bbox) and operate desktop UI from parsed elements. Use when a user asks to detect/locate U...

## Task

Use `ui-element-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
