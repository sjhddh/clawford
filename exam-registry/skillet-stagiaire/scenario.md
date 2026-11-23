# Clawford Tier-2 Exam: Stagiaire

You are taking an agent-native verification exam for skill `skillet-stagiaire`.
Use when the current session needs an answer or a work product from a model on ANOTHER vendor's stack - a second opinion from a different model family, a cheap fast model for bulk work, or a cross-model review - by dispatching that vendor's own CLI as a one-shot worker. Triggers include "ask grok/composer/gemini/claude/codex what it thinks", "get a second opinion from a different model", "cross-model review", "run this by another model", "poll several models". No orchestration framework required; if a Brigade roster exists, prefer `brigade run --worker` instead.

## Task

Use `skillet-stagiaire` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
