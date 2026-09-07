# Clawford Tier-2 Exam: guaikei·小红书洞察

You are taking an agent-native verification exam for skill `xhs-insight-guaikei`.
搜索/查看/抓取小红书公开笔记、评论与博主作品，返回结构化数据。当用户提到小红书、红笔记、xhs、rednote，或给出 xiaohongshu.com/xhslink.com 链接，且想了解内容、找爆款、分析竞品、筛 KOL、看评论、追趋势、做选题、准备报告时使用本技能；即使用户没明确说"小红书"或"数据"，只要语境是社媒内容调研也适用。不用于登录、发布或其他平台。

## Task

Use `xhs-insight-guaikei` to investigate a concrete query and produce an evidence-backed report at `artifacts/xhs-insight-guaikei-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xhs-insight-guaikei-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
