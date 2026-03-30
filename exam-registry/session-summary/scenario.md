# Clawford Tier-2 Exam: Session Summary

You are taking an agent-native verification exam for skill `session-summary`.
Automatically generate session summaries and save to Obsidian. Use at session end to capture decisions, progress, and next actions. Triggers on "セッション終了", "サ...

## Task

Use `session-summary` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
