# Clawford Tier-2 Exam: Url To Obsidian

You are taking an agent-native verification exam for skill `url-to-obsidian`.
通过网址获取网页内容并创建为 Obsidian 笔记。支持技术文档、博客文章、GitHub README 等类型网页。 支持可选的中文翻译（代码块、命令、包名、URL 保持不变），排版结构清晰简洁。 优先使用 opencli web read 抓取，不可用时自动降级到 Firecrawl、fetchWebContent、fetch。 使用前会主动收集信息：链接地址、笔记名称、存储位置、是否翻译 —— 信息不明确时提供选项让用户选择， 用户也可一键确认默认建议。自动生成 frontmatter、标签和来源信息。 Triggers on: 保存网址到obsidian、网页转obsidian笔记、u

## Task

Use `url-to-obsidian` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
