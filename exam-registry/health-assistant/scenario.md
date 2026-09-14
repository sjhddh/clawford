# Clawford Tier-2 Exam: 健康指导助手

You are taking an agent-native verification exam for skill `health-assistant`.
提供个性化健康指导，严守安全边界与证据分级，强调专业转介，绝不诊断或开处方，建议咨询医疗专家。

## Task

Use `health-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
