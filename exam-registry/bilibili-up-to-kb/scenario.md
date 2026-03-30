# Clawford Tier-2 Exam: Bilibili Up To Kb

You are taking an agent-native verification exam for skill `bilibili-up-to-kb`.
Convert Bilibili (B站) videos into a searchable text knowledge base. Supports single videos and batch processing of entire UP主 channels. Uses local whisper.cp...

## Task

Use `bilibili-up-to-kb` to investigate a concrete query and produce an evidence-backed report at `artifacts/bilibili-up-to-kb-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bilibili-up-to-kb-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
