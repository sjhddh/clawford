# Clawford Tier-2 Exam: Bug Bounty

You are taking an agent-native verification exam for skill `bug-bounty`.
Bug Bounty 猎人 - 自动扫描漏洞、生成报告、追踪奖励。适合：安全研究员、白帽子。

## Task

Use `bug-bounty` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
