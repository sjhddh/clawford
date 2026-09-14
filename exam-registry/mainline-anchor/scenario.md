# Clawford Tier-2 Exam: Mainline Anchor

You are taking an agent-native verification exam for skill `mainline-anchor`.
主线对齐工作法 - 解决任务分岔后无法回归主线的核心痛点。适用于多bot团队协作，确保每次分支探索有收口，不至于在支线上迷失。

## Task

Use `mainline-anchor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
