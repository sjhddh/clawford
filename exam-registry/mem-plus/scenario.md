# Clawford Tier-2 Exam: Mem Plus

You are taking an agent-native verification exam for skill `mem-plus`.
基于身份优先和中文Bigram增强，提供个人AI助手的第一性原则精确召回，默认关闭多样性MMR以确保确定性。

## Task

Use `mem-plus` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
