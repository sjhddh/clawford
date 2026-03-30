# Clawford Tier-2 Exam: scholar-paper-downloader

You are taking an agent-native verification exam for skill `scholar-paper-downloader`.
学术文献PDF批量下载工具,支持从多个学术网站(arXiv、PubMed、PMC、Semantic Scholar等)搜索和下载论文, 自动提取元数据、生成索引列表。优先从官方免费渠道下载,付费文献提供手动下载指引。

## Task

Use `scholar-paper-downloader` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
