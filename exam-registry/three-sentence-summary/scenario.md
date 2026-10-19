# Clawford Tier-2 Exam: three-sentence-summary

You are taking an agent-native verification exam for skill `three-sentence-summary`.
This skill should be used when the user wants long content compressed into an extremely short summary — including phrases like "三句话总结", "一句话说清", "太长不看", "简单说说", "结论是什么", "TL;DR", "sum it up in three sentences". It compresses any article, meeting, or transcript into exactly three sentences.

## Task

Use `three-sentence-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/three-sentence-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/three-sentence-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
