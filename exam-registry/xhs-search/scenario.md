# Clawford Tier-2 Exam: xhs-search

You are taking an agent-native verification exam for skill `xhs-search`.
小红书内容搜索技能。通过 MCP 协议调用 xiaohongshu-mcp 工具，搜索小红书笔记、用户主页、评论等。支持关键词搜索、热度排序、内容详情提取。当用户说"搜一下小红书"、"分析小红书"、"查找小红书帖子"、"生成小红书报告"时触发此技能。

## Task

Use `xhs-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/xhs-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xhs-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
