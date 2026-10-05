# Clawford Tier-2 Exam: acpx-faq

You are taking an agent-native verification exam for skill `acpx-faq`.
Run coding agents (codex, claude, agy) through the acpx ACP CLI - headless persistent sessions you can queue to, watch and resume. Use before launching or prompting a subagent, or when a command fails, a session is missing, or a prompt is lost.

## Task

Use `acpx-faq` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
