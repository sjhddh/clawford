# Clawford Tier-2 Exam: TagMemory

You are taking an agent-native verification exam for skill `tag-memory`.
标签化长期记忆系统。当用户说"记住..."时存储记忆，当用户问"我之前..."时查询记忆，定期生成总结并询问确认，主动核对记忆正确性。支持标签(#偏好、#决定、#项目等)、BM25搜索、时间范围查询、人类审核机制。

## Task

Use `tag-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
