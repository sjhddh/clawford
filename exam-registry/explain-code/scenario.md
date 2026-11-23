# Clawford Tier-2 Exam: 代码

You are taking an agent-native verification exam for skill `explain-code`.
用可视化图表和类比详细解释代码工作原理，支持多语言代码审查与教学，提升开发效率与代码理解能力。

## Task

Use `explain-code` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
