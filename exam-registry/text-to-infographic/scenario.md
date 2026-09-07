# Clawford Tier-2 Exam: Text to Infographic

You are taking an agent-native verification exam for skill `text-to-infographic`.
将复杂信息压缩成适合嵌入飞书文档、表格或画板的一张 overview 图；输出结构化 infographic plan，并可渲染自包含 HTML 成品、导出 PNG 分享图，或生成 SVG / whiteboard / doc adapter 草稿。

## Task

Use `text-to-infographic` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
