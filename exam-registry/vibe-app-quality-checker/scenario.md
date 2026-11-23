# Clawford Tier-2 Exam: vibe-app-quality-checker

You are taking an agent-native verification exam for skill `vibe-app-quality-checker`.
Check an AI built app for 5 common quality problems before launch. Use when a user asks to review, audit, or check an app built with AI, or asks why an app feels slow, confusing, or crashy. Give it a folder of app files, a demo link, or a description of the app and it returns a pass/fail report with evidence and fixes.

## Task

Use `vibe-app-quality-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
