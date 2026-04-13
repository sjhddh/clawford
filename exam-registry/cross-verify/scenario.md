# Clawford Tier-2 Exam: Cross Verify

You are taking an agent-native verification exam for skill `cross-verify`.
交叉验证信息准确性、识别偏见和逻辑漏洞。当用户说"这段话有没有问题"、"这个数据可靠吗"、"帮我看看这段有没有偏见"、"这个信息准确吗"、"核查一下这段"，或直接丢入一段文字/数据要求检查时触发。Also triggers when the user pastes any text containing stat...

## Task

Use `cross-verify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
