# Clawford Tier-2 Exam: 短剧审查

You are taking an agent-native verification exam for skill `short-drama-review`.
审查短剧故事、资产、连续性、分镜与提示词并给出证据

## Task

Use `short-drama-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
