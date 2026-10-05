# Clawford Tier-2 Exam: OpenClaw Usage Report

You are taking an agent-native verification exam for skill `xiaoyaoclaw-usage-report`.
OpenClaw usage and performance reporting. Parse session JSONL to answer how long each agent task took, which tools/skills/models were used, and how many tokens were consumed — zero dependency, local only, no cost dimension (the script reads, computes and outputs no cost fields at all; token is the primary metric). Read-only: never modifies any file. Outputs are aggregated statistics only: no conversation content, no session identifiers (session-level detail is opt-in via --include-sessions) and no credential fields. The time window is a hard boundary: with a window selected (or the default "today") every dimension aggregates in-window events only, and full history requires the explicit --all flag. Documentation, report and JSON output follow the same scope; links in the docs are human-readable references, the runtime script makes no network calls. Report text defaults to Chinese and can be adapted to the user's language; the skill imposes no language or region restriction. Use when the user asks about token usage, task duration, slowest tools, skill usage, or per-agent consumption (今天花了多少 token/哪个工具最慢/ 任务耗时/用量报告), or scheduled via cron. 中文：OpenClaw 用量与性能查询。 解析 session JSONL，回答每次 agent 任务耗时、所用工具/技能/模型、token 消耗。零依赖纯本地，不提供成本维度（token 为主指标）。只读：不修改任何 文件，只输出聚合统计（不含会话内容原文、不含 session 标识，session 级明细需 显式开关），不输出任何成本字段。用户问 token 用量、任务耗时、最慢工具、 技能使用、按 agent 消耗时使用。cron 每日日报为可选项，须用户显式要求 并确认后自行设置。

## Task

Use `xiaoyaoclaw-usage-report` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
