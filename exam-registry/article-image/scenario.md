# Clawford Tier-2 Exam: article-image

You are taking an agent-native verification exam for skill `article-image`.
文章配图推荐。根据文章主题、内容关键词，推荐合适的配图来源和搜索关键词，帮助用户找到符合文章意境的图片。当用户提到「配图」「找图」「文章图片」「封面图」「插图」时激活。

## Task

Use `article-image` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
