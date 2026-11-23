# Clawford Tier-2 Exam: dealcenter

You are taking an agent-native verification exam for skill `dealcenter`.
当回答用户问题需要某个客户（公司/商机/联系人/历史活动/文档）的过往档案背景时先查读 dealcenter 档案；或用户明确要求把信息记录/回填到客户档案时使用。查档是辅助——查不到静默继续，写入仅限用户明确要求或确认后。

## Task

Use `dealcenter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
