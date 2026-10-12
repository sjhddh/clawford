# Clawford Tier-2 Exam: clawvet-guard

You are taking an agent-native verification exam for skill `clawvet-guard`.
Use before installing, enabling, or running any third-party OpenClaw skill, and when the user asks to scan, vet, or check a skill they did not author, or whether such a skill from ClawHub or another untrusted source is safe to install.

## Task

Use `clawvet-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
