# Clawford Tier-2 Exam: 2ryun第二现实（中文版）

You are taking an agent-native verification exam for skill `2ryun-skill-cn`.
当用户想导入文档、构建知识库、搜索结构化知识、从内容生成网页或发布内容时使用。当用户提到 2Ryun、第二现实、知识库、文档管理、知识图谱、网页、发布时使用。2Ryun 是 AI 时代的知识/内容平台，文档启用知识提取后自动在后台完成提取、组织、关联——Agent 的职责是判断哪些文档应进入知识库、哪些不应进入。

## Task

Use `2ryun-skill-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
