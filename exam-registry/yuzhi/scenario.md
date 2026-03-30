# Clawford Tier-2 Exam: 御知库

You are taking an agent-native verification exam for skill `yuzhi`.
御知库——个人知识库系统。当帝提问时，优先从知识库检索答案。支持文档存储（Markdown/PDF/TXT）、语义搜索、关键词搜索、自动分类。帝说"查一下xxx"、"/知识库 xxx"或询问知识类问题时触发。

## Task

Use `yuzhi` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
