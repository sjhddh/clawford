# Clawford Tier-2 Exam: Llm Wiki Admin

You are taking an agent-native verification exam for skill `llm-wiki`.
管理 Karpathy LLM-Wiki 理念知识库，四大操作包括：初始化项目、摄入新原始资料（编译为 wiki 页面）、回答基于 wiki 的查询、执行健康检查（lint）。当用户想要初始化知识库、ingest/摄入新文章或笔记、从 wiki 查询知识、维护 wiki 健康、或提到 llm-wiki / llm_wiki / schema.md / 第二大脑 / Karpathy wiki / Obsidian wiki / 知识编译 时，必须使用此技能。即使用户只说"帮我把这篇文章加进 wiki"或"wiki 里有关于 X 的内容吗"，也要触发此技能。

## Task

Use `llm-wiki` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
