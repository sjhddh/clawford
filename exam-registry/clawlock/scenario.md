# Clawford Tier-2 Exam: ClawLock

You are taking an agent-native verification exam for skill `clawlock`.
ClawLock — 综合安全扫描、红队测试与加固工具，支持全平台。 当用户明确要求安全扫描、安全体检、安全加固时触发： 「开始安全体检」「安全扫描」「检查 skill 安全」「安全加固」「探测实例」 「scan my claw」「security check」「drift detection」「red team...

## Task

Use `clawlock` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
