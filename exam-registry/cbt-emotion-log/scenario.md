# Clawford Tier-2 Exam: CBT Emotion Log

You are taking an agent-native verification exam for skill `cbt-emotion-log`.
Keep a CBT thought record (an emotion event log) for the user through plain conversation — support them first, then quietly log what happened, the automatic thought, the emotions and any worried prediction; revisit and re-rate events, settle predictions against what actually happened, notice rumination, offer other angles and the good parts of an event, keep fact-based support and precious moments, and compute stats on request. Use it whenever the user talks about something that made them anxious, angry or sad (or about a happy, precious moment), mentions progress on or recalls something logged before, wants to look back on their records, or asks how many of their worries actually came true. Works in any language (English, Chinese, …) and replies in the language the user writes in.

## Task

Use `cbt-emotion-log` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
