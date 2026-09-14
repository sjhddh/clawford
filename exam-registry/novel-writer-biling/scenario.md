# Clawford Tier-2 Exam: Novel Writer Biling

You are taking an agent-native verification exam for skill `novel-writer-biling`.
AI长篇小说创作助手，基于笔灵七阶段创作流水线方法论。覆盖从小说配置、故事架构、章节蓝图、AI写稿、自动审稿到知识库管理的完整创作流程。当用户需要写小说、创作网文、搭建故事大纲、生成角色设定、审稿润色时触发。触发词：写小说、创作小说、网文写作、小说大纲、角色设定、章节生成、小说审稿、续写、扩写、故事架构、世界观设定。

## Task

Use `novel-writer-biling` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
