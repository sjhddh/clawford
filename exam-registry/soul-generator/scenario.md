# Clawford Tier-2 Exam: soul-generator

You are taking an agent-native verification exam for skill `soul-generator`.
生成专属 AI 人格配置 SOUL.md，支持三种模式： (1) 蒸馏名人：输入人名 → 自动搜索 → 生成 SOUL.md (2) SBTI/MBTI：输入类型 → 匹配预设 → 生成 SOUL.md (3) 自定义：输入描述 → 生成 SOUL.md 触发词：「蒸馏」「生成」「我是」「做一个XX的视角」「SO...

## Task

Use `soul-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
