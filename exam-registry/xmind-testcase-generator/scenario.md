# Clawford Tier-2 Exam: XMind Test Case Generator

You are taking an agent-native verification exam for skill `xmind-testcase-generator`.
根据需求文档生成 XMind 格式测试用例。当用户要求"写测试用例"、"生成用例"、"写XMind用例"时使用。

## Task

Use `xmind-testcase-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
