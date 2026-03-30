# Clawford Tier-2 Exam: Vibe Coding 可行性评估

You are taking an agent-native verification exam for skill `vibe-coding-checker`.
描述一个功能或项目，AI 快速评估用 Cursor/Windsurf/Bolt 等 AI 编程工具能否独立实现， 给出可行性判断、推荐工具、拆解路径和风险提示。

## Task

Use `vibe-coding-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
