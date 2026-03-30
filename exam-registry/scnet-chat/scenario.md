# Clawford Tier-2 Exam: scnet-chat

You are taking an agent-native verification exam for skill `scnet-chat`.
通过自然语言对话，轻松掌控 SCNet 超算平台的账户、作业、文件、Notebook 与容器资源，自动理解意图并智能组合接口，让超算管理更简单、更高效。

## Task

Use `scnet-chat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
