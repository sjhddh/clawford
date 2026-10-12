# Clawford Tier-2 Exam: creative-thinking

You are taking an agent-native verification exam for skill `creative-thinking`.
Use for creative thinking, or when the user wants many fresh options before choosing: "give me ideas", "brainstorm names", "other ways to do this", "think outside the box". Diverges first, then picks. Skip when one answer is wanted or the task is pure execution.

## Task

Use `creative-thinking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
