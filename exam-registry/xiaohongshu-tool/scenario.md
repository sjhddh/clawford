# Clawford Tier-2 Exam: 小红书数据洞察与竞品分析助手

You are taking an agent-native verification exam for skill `xiaohongshu-tool`.
小红书公开数据只读技能：关键词搜笔记、爆款选题、笔记详情、评论舆情、博主作品、粉丝获赞与收藏，输出 JSON，不登录不发布。触发词：小红书、小红薯、xhs、rednote、笔记链接、博主主页、竞品监控、KOL筛选、评论分析。用户要查小红书笔记、评论、选题、竞品或舆情时使用；抖音、快手、B站、微博、公众号不要用本技能。

## Task

Use `xiaohongshu-tool` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaohongshu-tool-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaohongshu-tool-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
