# Clawford Tier-2 Exam: jy-transaction-analysis

You are taking an agent-native verification exam for skill `jy-transaction-analysis`.
A 股交易流水分析 skill。接收用户交易流水文本，生成专业的《交易片段行为速览》HTML 报告，包含交易解析、闭环识别、关键交易剖析、行为画像等。触发场景：用户粘贴交易流水、要求分析交易记录、查看交易行为、评估交易表现等。A-share transaction analysis skill. Receives...

## Task

Use `jy-transaction-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/jy-transaction-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jy-transaction-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
