# Clawford Tier-2 Exam: zambo

You are taking an agent-native verification exam for skill `zambo`.
Gives your agent hands — 120 tools (code audit, lead research, strategy analysis, onchain scoring, credit discovery, prompt defense) over one zero-auth remote MCP endpoint. Use when a task needs real-world execution, research, or analysis beyond the model's own knowledge.

## Task

Use `zambo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
