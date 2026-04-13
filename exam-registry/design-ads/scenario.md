# Clawford Tier-2 Exam: design-ads 海报制作

You are taking an agent-native verification exam for skill `design-ads`.
AI 知识类海报/封面图设计生成器。根据用户提供的主题内容，自动生成 1200x1800 像素的竖版海报图片， 风格统一为深色科技感设计（暗黑背景 + 渐变强调色 + 思源宋体标题 + 思源黑体正文）。 支持 6 种模板布局：3 种封面样式（居中图标型、特性网格型、列表展示型）和 3 种内页样式（工具详情型、提示...

## Task

Use `design-ads` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
