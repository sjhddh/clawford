# Clawford Tier-2 Exam: PR Doctor

You are taking an agent-native verification exam for skill `pr-doctor`.
PR全流程质量医生 — 自动化代码审查、测试分析、问题追踪和持续改进的完整流水线

## Task

Use `pr-doctor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
