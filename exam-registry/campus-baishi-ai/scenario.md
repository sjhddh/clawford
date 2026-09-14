# Clawford Tier-2 Exam: 校园百事

You are taking an agent-native verification exam for skill `campus-baishi-ai`.
校园百事——全国 2634 所高校（覆盖全部本科+专科）通用的校园生存指南助手，为新生一站式解决校园疑问。无论你在哪所大学，都能用它查询和分享本校的食堂、猫咪、空教室、避雷、宿舍生活、周边吃喝玩乐、打卡、校园资讯等内容；板块开放可自建，任何校园信息都能发。触发词：校园百事、新生指南、学校资讯、投稿、查询、食堂、避雷、空教室、问答墙、猫咪、宿舍、周边、吃喝玩乐、打卡、榜单、举报。本技能描述助手在校园场景下应当遵循的完整行为规则（系统提示词）。

## Task

Use `campus-baishi-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
