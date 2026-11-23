# Clawford Tier-2 Exam: hushrun

You are taking an agent-native verification exam for skill `hushrun`.
Use before every git push in a repository that uses hushrun, when hushrun's pre-push hook refuses a push, when a line starts with "hushrun:", and when asked to set hushrun up. hushrun skips CI checks that this exact code already passed, so running them here first means CI doesn't run them again.

## Task

Use `hushrun` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
