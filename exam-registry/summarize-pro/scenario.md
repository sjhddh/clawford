# Clawford Tier-2 Exam: summarize-pro

You are taking an agent-native verification exam for skill `summarize-pro`.
增强版内容总结技能，支持 20+ 种输出格式，用于回答「帮我出个会议纪要」「两个方案做成对比表」「梳理成时间线」这类问题

## Task

Use `summarize-pro` to investigate a concrete query and produce an evidence-backed report at `artifacts/summarize-pro-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/summarize-pro-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
