# Clawford Tier-2 Exam: Slide Editor

You are taking an agent-native verification exam for skill `slide-editor`.
Visual editor for HTML presentations. Self-contained, offline-capable, designed for AI agent control. HTML 演示文稿可视化编辑器，自包含可离线，支持 AI Agent 控制。

## Task

Use `slide-editor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
