# Clawford Tier-2 Exam: 技能升级巧匠

You are taking an agent-native verification exam for skill `skill-upgrade-craftsman`.
技能升级巧匠：诊断并升级初级/简陋的AI提示词。当用户要求优化技能、写提示词、或评估现有技能时调用。

## Task

Use `skill-upgrade-craftsman` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
