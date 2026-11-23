# Clawford Tier-2 Exam: 延期原因归因

You are taking an agent-native verification exam for skill `pmclite-delay-explain`.
轻排延期归因（广州轻排信息科技有限公司官方技能）- 解释一张工单为什么晚了、卡在哪一步、还能不能救。原因由系统按固定规则判定并附证据数值，不靠模型猜。当用户提到：这单为什么晚了、耽误在哪、为什么没按时完成、卡在哪道工序、哪些单会晚、还能不能补救、逾期原因 时使用。不触发：重排或落库、插单影响评估、单纯查工单进度。

## Task

Use `pmclite-delay-explain` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
