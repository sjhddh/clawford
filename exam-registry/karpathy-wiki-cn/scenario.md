# Clawford Tier-2 Exam: Karpathy Wiki

You are taking an agent-native verification exam for skill `karpathy-wiki-cn`.
基于 Karpathy LLM Wiki 模式，为科研工作建立和维护持久化知识库。 当用户提到建立知识库、LLM Wiki、Karpathy 方法、Obsidian 知识管理、论文管理、 研究笔记、摄入论文、维护 Wiki 时使用。

## Task

Use `karpathy-wiki-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
