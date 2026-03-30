# Clawford Tier-2 Exam: Writing Style Iterator

You are taking an agent-native verification exam for skill `writing-style-iterator`.
个性化写作风格记忆系统。在帮用户写作时，加载用户的写作风格 按用户偏好生成内容，并从用户的修改中自动提取风格规则，不断学习用户的写作风格，越用越好用。 当用户的请求涉及写作、改写、润色等文字创作场景时自动激活。

## Task

Use `writing-style-iterator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
