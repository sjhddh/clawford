# Clawford Tier-2 Exam: Meeting Summary

You are taking an agent-native verification exam for skill `meeting-summary`.
会议录音 → 结构化纪要。支持 Step ASR 转写、pyannote 说话人分割、声纹实名匹配、LLM 纪要生成，以及长录音 chunk 化增量处理。

## Task

Use `meeting-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/meeting-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/meeting-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
