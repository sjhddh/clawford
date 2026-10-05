# Clawford Tier-2 Exam: Hair Color & Style Advisor

You are taking an agent-native verification exam for skill `youcam-hair-color-style-advisor`.
Recommend a hairstyle and hair color based on the user's face shape and skin tone, then preview them with YouCam (Perfect Corp) AI. Use for "推薦髮型", "換髮色", "hairstyle advice", "hair color try-on". Do NOT use for hair health diagnostics (that's hair-diagnostics), skin, makeup, or clothes.

## Task

Use `youcam-hair-color-style-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
