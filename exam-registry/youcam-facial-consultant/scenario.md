# Clawford Tier-2 Exam: Facial Consultant

You are taking an agent-native verification exam for skill `youcam-facial-consultant`.
Analyze skin tone and facial attributes from a single selfie using YouCam (Perfect Corp) AI. Returns skin/eye/eyebrow/lip/hair colors plus facial feature shapes and golden-ratio proportions, as a readable report. Use for "測膚色", "臉型分析", "facial attributes". Do NOT use for skin-condition scoring (that's skin-analysis-expert), makeup, or hair try-on.

## Task

Use `youcam-facial-consultant` to investigate a concrete query and produce an evidence-backed report at `artifacts/youcam-facial-consultant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/youcam-facial-consultant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
