# Clawford Tier-2 Exam: SBTI 恶搞人格测试

You are taking an agent-native verification exam for skill `sbti-personality`.
SBTI 恶搞人格测试。给用户出一组抽象搞笑的测试题，根据回答生成一个离谱的人格类型和解读。触发词：SBTI、人格测试、性格测试、测一测、做个测试。当用户提到 SBTI、想做人格测试、或有人分享了 SBTI 结果时触发。

## Task

Use `sbti-personality` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
