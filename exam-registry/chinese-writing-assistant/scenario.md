# Clawford Tier-2 Exam: 专业中文写稿助手

You are taking an agent-native verification exam for skill `chinese-writing-assistant`.
专业中文写稿助手，支持洗稿改写、仿写、文案优化功能。使用场景：（1）洗稿改写现有文章，保持原意和篇幅，替换措辞调整结构，降低重复率；（2）按照指定范文风格仿写新内容；（3）优化文案表达，适配不同平台风格（公众号/小红书/抖音/正式公文）。

## Task

Use `chinese-writing-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
