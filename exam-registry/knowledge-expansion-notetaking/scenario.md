# Clawford Tier-2 Exam: 知识拓展笔记术

You are taking an agent-native verification exam for skill `knowledge-expansion-notetaking`.
知识拓展笔记术（Knowledge Expansion Notetaking，KEN）。当用户分享一个新学到的知识、概念、方法时，自动完成：来源追溯 → 概念解析 → 适用边界划定 → 歧义辨析 → 生成深度笔记卡片 → AI续写深化 → 同步归档到 Get笔记 + 飞书知识库 + 飞书文档。 激活词：知识拓展、深度学习、拓展阅读、概念讲解、笔记整理、我刚学到、新知识、刚get到 触发场景：用户粘贴「知识拓展」「深度学习」「拓展阅读」「概念讲解」「笔记整理」或直接分享一段刚学到的知识内容。

## Task

Use `knowledge-expansion-notetaking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
