# Clawford Tier-2 Exam: Skill Safe Install

You are taking an agent-native verification exam for skill `skill-safe-install-l0`.
L0 级技能安全安装流程。触发“安装技能/安全安装/审查权限”时，强制执行 Step0-5（查重→检索→审查→沙箱→正式安装→白名单）。

## Task

Use `skill-safe-install-l0` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
