# Clawford Tier-2 Exam: Copilot For Revit Skill

You are taking an agent-native verification exam for skill `copilot-for-revit`.
让 OpenClaw 能够操作 Revit。当用户提及 Revit 相关操作（图纸、标注、视图、元素等）时自动调用。 支持的操作包括： - 检查 Revit 状态 - 列出可用工具 - 执行 Revit 命令（生成图纸、创建标注、查询元素等）

## Task

Use `copilot-for-revit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
