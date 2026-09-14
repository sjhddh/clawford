# Clawford Tier-2 Exam: ViBo SelfDeed

You are taking an agent-native verification exam for skill `vibo-selfdeed`.
Use when the owner hands the agent a multi-step task: grill the intent first (G1-G5 plan card, owner gate), then run it as an autonomous mission — restore context from ViBo memory, find and fix problems safely, iterate via paths A/B/C, save lessons. Optional Telegram notify/ask/report (OFF by default, runtime-warned; sends mission data only when the owner sets TELEGRAM_MISSION_TOKEN/CHAT). Built-in DEMO memory (100 facts) works without the ViBo CLI. Use ONLY with the user's explicit consent: missions save progress and lessons to local memory — tell the user what will be stored and how to delete it before starting.

## Task

Use `vibo-selfdeed` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
