# Clawford Tier-2 Exam: 提示词美学

You are taking an agent-native verification exam for skill `prompt-skill`.
用楚歌AIGC美学框架，从一句话生成可直接用于 GPT-image2 的高完成度图像提示词。内置32种风格模板（楚歌原创 + 多位创作者蒸馏），自动套用五角色色彩法与负面清单质检，支持中英双语输出与风格混搭。

## Task

Use `prompt-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
