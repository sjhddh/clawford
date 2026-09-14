# Clawford Tier-2 Exam: Hair Diagnostics

You are taking an agent-native verification exam for skill `youcam-hair-diagnostics`.
Diagnose hair-health metrics — density, type, frizziness, length — from a single selfie using YouCam (Perfect Corp) AI, and return one combined report. Use for "頭髮體檢", "髮質分析", "hair diagnostics", "hair health report". Do NOT use for hairstyle/color try-on (that's hair-color-style-advisor), skin, makeup, or clothes.

## Task

Use `youcam-hair-diagnostics` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
