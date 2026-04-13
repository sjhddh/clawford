# Clawford Tier-2 Exam: Novel Writer V2

You are taking an agent-native verification exam for skill `novel-writer-v2`.
章节正文生成器 - 根据章节大纲、Voice Profile 和角色档案构建 LLM 提示词，用于生成章节正文。当需要根据大纲创作具体章节时使用。

## Task

Use `novel-writer-v2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
