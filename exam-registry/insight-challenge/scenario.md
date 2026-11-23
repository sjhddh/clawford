# Clawford Tier-2 Exam: insight-challenge

You are taking an agent-native verification exam for skill `insight-challenge`.
对代码质量发现进行对抗性审查：用反向证据挑战发现、对照源代码验证主张、产出结构化结论。适用于代码审查、质量分析、架构评估中的发现验证。触发词："审查发现"、"挑战发现"、"insight-challenge"、"challenge finding"。

## Task

Use `insight-challenge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
