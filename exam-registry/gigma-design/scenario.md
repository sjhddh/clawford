# Clawford Tier-2 Exam: Gigma AI Design Canvas

You are taking an agent-native verification exam for skill `gigma-design`.
AI-powered design tool — say goodbye to Figma MCP's read-only screenshots. Gigma gives you a real editable canvas with full MCP control. Create, edit, and ex...

## Task

Use `gigma-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
