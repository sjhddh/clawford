# Clawford Tier-2 Exam: Article Fetcher（文章抓取+Notion/Obsidian知识库存档）

You are taking an agent-native verification exam for skill `article-fetcher`.
抓取微信公众号、小红书、豆瓣、知乎文章，自动上传 OSS 图片，LLM 智能提取关键词，一键存档到 Obsidian 本地知识库（可选 Notion）

## Task

Use `article-fetcher` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
