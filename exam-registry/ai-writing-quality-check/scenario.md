# Clawford Tier-2 Exam: Ai Writing Quality Check

You are taking an agent-native verification exam for skill `ai-writing-quality-check`.
AI Writing Quality Check: Scan writing content for banned phrases and return a normalized response for rewrite loops. Use when an agent needs ai writing qual...

## Task

Use `ai-writing-quality-check` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
