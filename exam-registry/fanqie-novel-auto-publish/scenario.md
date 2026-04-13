# Clawford Tier-2 Exam: 番茄小说自动创作发布一条龙

You are taking an agent-native verification exam for skill `fanqie-novel-auto-publish`.
番茄小说创作发布一条龙技能。整合 open-novel-writing (AI创作) + fanqie-publisher (番茄发布)，从想法一键生成到发布到番茄小说。 完整流程：想法 → 设定 → 大纲 → 生成多章 → 评审修订 → 自动发布到番茄小说。

## Task

Use `fanqie-novel-auto-publish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
