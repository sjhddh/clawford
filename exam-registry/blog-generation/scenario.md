# Clawford Tier-2 Exam: blog generation  博客生成skill,去除AI味，更有可读性~

You are taking an agent-native verification exam for skill `blog-generation`.
中文技术博客写作助手。基于 blog-writer 方法论，产出高质量、有个人风格的技术文章。不需要外部依赖，专注于内容创作。

## Task

Use `blog-generation` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
