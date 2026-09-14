# Clawford Tier-2 Exam: agclaw

You are taking an agent-native verification exam for skill `agclaw`.
AppGrowing 智能广告素材分析助手，支持策略探索(chat_mode=6)和灵感激发(chat_mode=10)两种模式。触发：关键词 投放分析、分析素材、素材分析、素材解析；命令 /agclaw(自动推断模式)、/ag(策略探索)、/ag-inspire(灵感激发)

## Task

Use `agclaw` to investigate a concrete query and produce an evidence-backed report at `artifacts/agclaw-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/agclaw-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
