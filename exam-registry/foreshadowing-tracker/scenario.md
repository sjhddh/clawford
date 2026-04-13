# Clawford Tier-2 Exam: Foreshadowing Tracker

You are taking an agent-native verification exam for skill `foreshadowing-tracker`.
伏笔追踪器 - 识别章节中的伏笔并追踪回收状态。当需要管理伏笔、确保前后呼应时使用，支持新增伏笔识别、待回收伏笔提醒、已回收伏笔标记。

## Task

Use `foreshadowing-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
