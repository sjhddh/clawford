# Clawford Tier-2 Exam: Ppt Afp

You are taking an agent-native verification exam for skill `ppt-afp`.
PPT全自动生成流（AFP：Auto-Flow Prompt）。用户提供主题和内容，Agent自动完成：风格选择 → 大纲生成 → Prompt生成 → AI生图 → 打包PPTX → 发送飞书。当用户说"帮我做PPT"、"生成幻灯片"、"制作演示文稿"、"ppt-afp"时触发。

## Task

Use `ppt-afp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
