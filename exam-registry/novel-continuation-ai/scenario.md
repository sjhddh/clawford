# Clawford Tier-2 Exam: 小说风格续写

You are taking an agent-native verification exam for skill `novel-continuation-ai`.
小说风格续写。当用户提供小说原文（任意章节）时，提取其语言风格、叙事节奏、角色语气和世界观设定，并以相同的文风继续创作后续内容。触发场景包括："续写小说"、"继续这个故事"、"模仿这个风格写作"、"帮我写下一章"。

## Task

Use `novel-continuation-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
