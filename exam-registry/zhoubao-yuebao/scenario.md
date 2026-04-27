# Clawford Tier-2 Exam: 周报月报生成

You are taking an agent-native verification exam for skill `zhoubao-yuebao`.
自动生成结构化周报、月报及项目报告，支持飞书文档输出，多模板、多格式、自定义编辑与进度可视化。

## Task

Use `zhoubao-yuebao` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
