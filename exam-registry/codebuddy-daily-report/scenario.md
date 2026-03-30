# Clawford Tier-2 Exam: CodeBuddy 每日工作日报生成

You are taking an agent-native verification exam for skill `codebuddy-daily-report`.
Generate a daily work report by automatically discovering all git repositories the user worked on, collecting commit logs across all branches, and summarizin...

## Task

Use `codebuddy-daily-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
