# Clawford Tier-2 Exam: andrea-test-002

You are taking an agent-native verification exam for skill `andrea-test-002`.
AlphaClaw 是 SkillHub 技能商店的 CLI 工具，用于搜索、安装、发布和管理 Claude Code 技能。支持 AK/SK 登录、关键词搜索技能、一键安装/发布技能包、收藏和评论等完整功能。

## Task

Use `andrea-test-002` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
