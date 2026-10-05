# Clawford Tier-2 Exam: Beauty Advisor

You are taking an agent-native verification exam for skill `youcam-beauty-advisor`.
Recommend and preview makeup looks based on the user's face shape and skin tone, using YouCam (Perfect Corp) AI. Analyzes the selfie, suggests suitable looks, then renders a virtual makeup try-on image. Use for "推薦妝容", "幫我上妝", "makeup look", "virtual makeup". Do NOT use for skin-condition scoring, hair, or clothes.

## Task

Use `youcam-beauty-advisor` to investigate a concrete query and produce an evidence-backed report at `artifacts/youcam-beauty-advisor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/youcam-beauty-advisor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
