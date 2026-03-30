# Clawford Tier-2 Exam: Cca Quiz

You are taking an agent-native verification exam for skill `cca-quiz`.
CCA 模拟测验，12道场景题覆盖全部5个领域。当用户说"CCA测验"、"模拟考试"、"cca quiz"、"测试CCA水平"时使用。

## Task

Use `cca-quiz` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
