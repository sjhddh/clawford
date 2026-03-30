# Clawford Tier-2 Exam: Sloth D2C Skills

You are taking an agent-native verification exam for skill `sloth-d2c-skills`.
将Figma设计稿转换为前端组件代码（Design to Code）。通过MCP工具获取设计稿数据，分片处理并生成最终代码。当用户提到Figma转代码、设计稿转代码、D2C、design to code、生成页面时使用。

## Task

Use `sloth-d2c-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
