# Clawford Tier-2 Exam: novel-free

You are taking an agent-native verification exam for skill `novel-free`.
中文长篇小说多智能体创作技能（v1.0.1）。支持从零开始新建长篇小说项目，完成世界观/角色/大纲/章节写作、自动推进与读者反馈的完整流程。内置固定层压缩、fixed-context.md强制缓存、摘要+OOC合并触发三项核心优化，新增用户体验优化和自动化工具，显著降低token消耗与操作复杂度。适用场景：新建长...

## Task

Use `novel-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
