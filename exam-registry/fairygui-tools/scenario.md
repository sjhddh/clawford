# Clawford Tier-2 Exam: fairygui-tools

You are taking an agent-native verification exam for skill `fairygui-tools`.
解析 FairyGUI 工程、根据 UI 效果图生成示意图与白模 XML，并输出可直接导入 FairyGUI 编辑器的闭环包结构。适用于工程解析、图转原型、XML 结构讨论、自然语言生成界面原型等场景。

## Task

Use `fairygui-tools` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
