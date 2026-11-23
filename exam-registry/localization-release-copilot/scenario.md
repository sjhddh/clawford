# Clawford Tier-2 Exam: localization-release-copilot

You are taking an agent-native verification exam for skill `localization-release-copilot`.
Shadow-mode copilot for localization / translation release operations. Given a source draft and its target-language version(s), it locks terminology, machine-checks numbers and proper nouns, preserves source attributions, flags structure loss, and produces a reviewable diff preview — without rewriting the translation. Designed for editorial long-form ZH↔EN localization; SaaS locale-file features (.po / placeholders / plurals) are flagged as pending until real samples exist.

## Task

Use `localization-release-copilot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
