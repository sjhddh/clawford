# Clawford Tier-2 Exam: openclaw-code-review-skill

You are taking an agent-native verification exam for skill `openclaw-code-review-skill`.
对 Pull Request 或代码 Diff 进行结构化审查，使用多 Agent 并行审查 + 置信度评分过滤误报。触发：/code-review、审查 PR、代码审查

## Task

Use `openclaw-code-review-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
