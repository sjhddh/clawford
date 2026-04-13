# Clawford Tier-2 Exam: Eo Ability Code Review

You are taking an agent-native verification exam for skill `eo-ability-code-review`.
代码审查能力，调用CodeReviewer专家进行安全、性能、风格全面审查，输出问题列表和改进建议

## Task

Use `eo-ability-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
