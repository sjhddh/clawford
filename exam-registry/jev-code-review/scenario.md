# Clawford Tier-2 Exam: jev-code-review

You are taking an agent-native verification exam for skill `jev-code-review`.
Jev 模拟代码评审。用 LLM 模拟 TypeSafe Jev 的三种原语（Choice/Score/Noul）， 对代码变更进行结构化评审，输出概率化判断。 触发词：评审代码、code review、jev review、代码审查。

## Task

Use `jev-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
