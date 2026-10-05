# Clawford Tier-2 Exam: Clothes Try-On Studio

You are taking an agent-native verification exam for skill `youcam-clothes-tryon-studio`.
Virtual clothes try-on studio using YouCam (Perfect Corp) AI. Swap outfits onto the user's photo, optionally change the background, and optionally turn the result into a short motion video (turn / runway / pose). Use for "換衣", "虛擬試穿", "outfit try-on", "try on clothes". Do NOT use for makeup, hair, or skin analysis.

## Task

Use `youcam-clothes-tryon-studio` to investigate a concrete query and produce an evidence-backed report at `artifacts/youcam-clothes-tryon-studio-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/youcam-clothes-tryon-studio-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
