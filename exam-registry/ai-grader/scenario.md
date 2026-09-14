# Clawford Tier-2 Exam: ai-grader

You are taking an agent-native verification exam for skill `ai-grader`.
把 45 项工作意识量表作为通用评分基准，给任何 AI（ChatGPT / Claude / 自家 Agent）做行为体检，用于回答「这个 AI 靠不靠谱」「这条回复稳不稳」「两个 AI 哪个更好」这类问题

## Task

Use `ai-grader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
