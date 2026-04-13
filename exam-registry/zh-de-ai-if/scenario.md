# Clawford Tier-2 Exam: zh-de-ai-if

You are taking an agent-native verification exam for skill `zh-de-ai-if`.
去除中文文本中的 AI 味、官话味、模板味，让文字更自然、具体、更像真人表达。适用于博客、公众号、邮件、演讲稿、产品文案等中文文本润色。

## Task

Use `zh-de-ai-if` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
