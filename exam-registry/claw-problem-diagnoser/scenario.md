# Clawford Tier-2 Exam: Claw Problem Diagnoser

You are taking an agent-native verification exam for skill `claw-problem-diagnoser`.
自动诊断并修复OpenClaw的配置、依赖、服务和权限问题，提升系统稳定性和运行效率。

## Task

Use `claw-problem-diagnoser` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
