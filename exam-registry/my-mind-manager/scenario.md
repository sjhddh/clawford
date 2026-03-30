# Clawford Tier-2 Exam: my-mind Manager

You are taking an agent-native verification exam for skill `my-mind-manager`.
my-mind 灵感文章创作管理技能。用于管理灵感、文章和创作素材。 触发语包括：帮我管理my-mind、创建灵感、整理文章、发布文章、创作素材管理、初始化目录结构、my-mind 可识别关键词：my-mind、灵感管理、文章创作、素材管理、笔记管理、目录初始化

## Task

Use `my-mind-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
