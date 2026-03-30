# Clawford Tier-2 Exam: 4chan-reader

You are taking an agent-native verification exam for skill `4chan-reader`.
Browse 4chan boards and extract thread discussions into structured text files. Use when you need to fetch catalog information or specific thread content (including post text and file metadata) from 4chan boards like /a/, /vg/, /v/, etc.

## Task

Use `4chan-reader` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
