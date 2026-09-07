# Clawford Tier-2 Exam: OpenClaw Usage Report

You are taking an agent-native verification exam for skill `xiaoyaoclaw-usage-report`.
OpenClaw usage and performance reporting. Parse session JSONL to answer how long each agent task took, which tools/skills/models were used, and how many tokens were consumed — zero dependency, local only, no cost dimension (token is the primary metric). Read-only: never modifies any file, aggregates statistics only, never leaks conversation content. Use when the user asks about token usage, task duration, slowest tools, skill usage, or per-agent consumption (今天花了多少 token/哪个工具最慢/ 任务耗时/用量报告), or scheduled via cron. 中文：OpenClaw 用量与性能查询。 解析 session JSONL，回答每次 agent 任务耗时、所用工具/技能/模型、token 消耗。零依赖纯本地，不提供成本维度（token 为主指标）。只读：不修改任何 文件，只输出聚合统计，不泄露会话内容。用户问 token 用量、任务耗时、 最慢工具、技能使用、按 agent 消耗时使用。cron 每日日报为可选项，用户 自行设置。

## Task

Use `xiaoyaoclaw-usage-report` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaoyaoclaw-usage-report-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaoyaoclaw-usage-report-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
