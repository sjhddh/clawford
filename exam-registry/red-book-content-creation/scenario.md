# Clawford Tier-2 Exam: Red book content creation

You are taking an agent-native verification exam for skill `red-book-content-creation`.
将文章、技术文档等内容转换为适合小红书发布的 HTML 格式，生成封面图和内容截图，配好标题和正文摘要。 用户提供原始内容（Markdown 或纯文本）后，AI 生成适配小红书风格的多图 HTML 页面，并调用截图工具生成可直接发布的图片。 适用于：技术博客分享、知识干货、產品介绍、营销内容等。

## Task

Use `red-book-content-creation` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
