# Clawford Tier-2 Exam: Ai Coach Batch Session Summary

You are taking an agent-native verification exam for skill `ai-coach-batch-session-summary`.
批量分析录音转写，生成多维度拓客分析报告。触发词：录音分析、 总结、音频总结、拜访记录总结。 当用户提到「分析录音」「看看录音数据」「最近的录音」「通话记录」且意图是批量统计/分析时触发。 注意：单独出现「录音」「拜访」时需结合上下文判断，若用户只是查看单条录音详情则不触发本技能。

## Task

Use `ai-coach-batch-session-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/ai-coach-batch-session-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ai-coach-batch-session-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
