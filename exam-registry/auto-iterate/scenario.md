# Clawford Tier-2 Exam: Auto Iterate

You are taking an agent-native verification exam for skill `auto-iterate`.
自主迭代优化任务。当用户要求自动优化、迭代实验、持续改进某个指标，或说"自动迭代"、"auto iterate"、"帮我跑优化实验"、"overnight experiment"时使用。

## Task

Use `auto-iterate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
