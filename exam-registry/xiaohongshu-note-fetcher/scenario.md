# Clawford Tier-2 Exam: 小红书笔记抓取与选题助手

You are taking an agent-native verification exam for skill `xiaohongshu-note-fetcher`.
抓取并整理小红书笔记公开页面信息（标题、正文摘要、作者、发布时间、互动数据、标签、封面图等）为结构化 JSON 或 Markdown。用于“根据笔记链接提取内容”“批量收集笔记基础信息”“生成笔记摘要素材”等场景；当用户提供小红书笔记 URL、URL 列表或需要导出机器可读结果时触发。

## Task

Use `xiaohongshu-note-fetcher` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
