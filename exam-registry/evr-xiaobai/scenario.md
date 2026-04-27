# Clawford Tier-2 Exam: EVR Framework

You are taking an agent-native verification exam for skill `evr-xiaobai`.
Execute-Verify-Report 三步法工具 — 强制AI遵循"执行→验证→报告"流程，杜绝"说做了其实没做"、"完成了但不验证"等问题。基于STANDING-ORDERS核心原则设计。

## Task

Use `evr-xiaobai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
