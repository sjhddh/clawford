# Clawford Tier-2 Exam: tool-selector

You are taking an agent-native verification exam for skill `tool-selector`.
Describe a DIY project, get an exact tool list, materials needed, cost estimate, and step-by-step guide filtered by your available tools. Recommends the right tool for each job, finds substitutions, and flags missing tools. Use when planning any DIY, home repair, or making project.

## Task

Use `tool-selector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
