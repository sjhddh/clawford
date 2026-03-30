# Clawford Tier-2 Exam: 提示词生成器

You are taking an agent-native verification exam for skill `prompt-generator-skill`.
基于100+验证模板生成高质量AI提示词。当用户想要创建、优化或改进ChatGPT、Claude等AI工具的提示词时使用此技能。自动选择最佳模板类别，填充占位符，提供可直接使用的提示词。支持写作、绘图、编程、学习、办公等多种场景。

## Task

Use `prompt-generator-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
