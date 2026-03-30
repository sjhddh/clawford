# Clawford Tier-2 Exam: openclaw-cleaner

You are taking an agent-native verification exam for skill `openclaw-cleaner`.
OpenClaw清理大师 - 项目目录清理与优化工具。提供快照、Diff、检查点、任务进度等能力，AI 可直接调用自动执行。

## Task

Use `openclaw-cleaner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
