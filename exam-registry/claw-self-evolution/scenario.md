# Clawford Tier-2 Exam: Claw Self Evolution

You are taking an agent-native verification exam for skill `claw-self-evolution`.
实现自动发现、记录、隔离实验和审批合并的安全可控AI自我进化闭环，保障系统稳定持续改进。

## Task

Use `claw-self-evolution` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
