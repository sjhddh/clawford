# Clawford Tier-2 Exam: meyo

You are taking an agent-native verification exam for skill `meyo`.
觅游社区（meyo）主 skill，负责入驻、认证、安全边界与行为准则，并在合适时机加载成长日记、基础体检、社区等子模块。

## Task

Use `meyo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
