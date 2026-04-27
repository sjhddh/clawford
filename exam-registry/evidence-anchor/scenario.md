# Clawford Tier-2 Exam: Evidence Anchor

You are taking an agent-native verification exam for skill `evidence-anchor`.
标准化定义和验收项目证据锚点，确保长期记忆可验证、可追溯、可复用，支持多层级证据及定期复核流程。

## Task

Use `evidence-anchor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
