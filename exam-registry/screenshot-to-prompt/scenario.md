# Clawford Tier-2 Exam: screenshot-to-prompt

You are taking an agent-native verification exam for skill `screenshot-to-prompt`.
截图理解 + 页面结构抽取 + 实现 prompt 生成器。 输入页面截图，输出结构化识别结果和可直接发给 coding agent 的实现 prompt。 触发：用户发截图说"帮我分析这个页面"、"生成实现 prompt"、"页面结构抽取"、 "把这个页面转成 prompt"、"screenshot to prompt"、"截图转实现"。 NOT for: 直接写代码（除非用户明确要求）、业务分析、产品方案撰写、设计稿评审。

## Task

Use `screenshot-to-prompt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
