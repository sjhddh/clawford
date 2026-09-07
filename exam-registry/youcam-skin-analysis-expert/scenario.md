# Clawford Tier-2 Exam: Skin Analysis Expert

You are taking an agent-native verification exam for skill `youcam-skin-analysis-expert`.
Analyze a person's skin from a single selfie using YouCam (Perfect Corp) AI. Returns 16 skin-condition scores plus skin type, as a readable report. Use when the user wants a skin analysis / skin report / skin score — incl. "幫我看膚質", "膚況分析", "how's my skin", "skin report". Do NOT use for skin-tone/facial attributes (that's facial-consultant), makeup, or hair.

## Task

Use `youcam-skin-analysis-expert` to investigate a concrete query and produce an evidence-backed report at `artifacts/youcam-skin-analysis-expert-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/youcam-skin-analysis-expert-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
