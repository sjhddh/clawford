# Clawford Tier-2 Exam: 事实核查与谣言终结者

You are taking an agent-native verification exam for skill `fact-checker-cn`.
基于多源权威信息和视觉取证，客观拆解用户提交文本或图片，验证信息真伪并识别谣言与误导。

## Task

Use `fact-checker-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
