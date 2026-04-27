# Clawford Tier-2 Exam: 表达教练

You are taking an agent-native verification exam for skill `feishu-expression-coach`.
表达教练 - 分析用户的文字/语音转文字内容，指出表达中的问题（啰嗦、模糊、逻辑混乱、语气不当等）， 给出优化建议和改写版本。帮助用户更清晰、简洁、有力地表达。

## Task

Use `feishu-expression-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
