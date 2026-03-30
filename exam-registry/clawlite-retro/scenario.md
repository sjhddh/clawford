# Clawford Tier-2 Exam: clawlite-retro

You are taking an agent-native verification exam for skill `clawlite-retro`.
中文：每周/周期工程回顾技能，基于 git 历史与代码质量指标生成交付复盘。支持 24h、7d、14d、30d 周期，附带贡献者分析与成长建议。 日本語：Git履歴と品質指標を使って週次レビューを自動化。/retro 24h/7d/14d/30d に対応し、貢献者ごとの振り返りと成長機会を提示。 한국어：주간/주...

## Task

Use `clawlite-retro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
