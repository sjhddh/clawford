# Clawford Tier-2 Exam: Poster Generation

You are taking an agent-native verification exam for skill `poster-generation`.
图片海报生成技能，支持从零创建各种图片海报，包含完整设计规范、模板系统和内容生成能力。触发词：生成海报、创建海报、海报生成、图片海报、广告海报、宣传海报、meta-skill-system

## Task

Use `poster-generation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
