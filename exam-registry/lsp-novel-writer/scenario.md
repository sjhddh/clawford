# Clawford Tier-2 Exam: LSP Novel Writer

You are taking an agent-native verification exam for skill `lsp-novel-writer`.
小说写作助手。触发词：写小说/创作小说/生成小说/帮我写个小说/小说大纲/网文创作。工作流：需求收集（类型/风格/字数）→ AI生成大纲（世界观/人物/剧情/章节规划）→ 用户确认 → 自动逐章生成 → 一章一个文件保存。支持玄幻、仙侠、都市、科幻、历史、武侠、网游、灵异、军事、竞技等主流网文类型，面向新手作者。

## Task

Use `lsp-novel-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
