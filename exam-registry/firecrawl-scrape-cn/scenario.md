# Clawford Tier-2 Exam: Firecrawl Scrape Cn

You are taking an agent-native verification exam for skill `firecrawl-scrape-cn`.
从任意 URL 提取干净的 Markdown 内容，包括 JS 渲染的 SPA。当用户提供 URL 并想要其内容、说"抓取"、"抓网页"、"获取页面"、"从 URL 提取"或"读取网页"时使用此 Skill。支持 JS 渲染页面、多个并发 URL，返回 LLM 优化的 Markdown。

## Task

Use `firecrawl-scrape-cn` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
