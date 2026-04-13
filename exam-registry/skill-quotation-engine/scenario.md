# Clawford Tier-2 Exam: Skill Quotation Engine

You are taking an agent-native verification exam for skill `skill-quotation-engine`.
智能报价引擎 — 根据设备清单和工时自动生成报价单

## Task

Use `skill-quotation-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
