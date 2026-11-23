# Clawford Tier-2 Exam: Graphtrail

You are taking an agent-native verification exam for skill `skillet-graphtrail`.
Use when answering structural code questions in an indexed repo - who calls this, what does this call, what breaks if I change it, what changed between two versions. Reach for it BEFORE grep whenever the question is about relationships between symbols rather than text. Triggers include "who calls", "what uses", "blast radius", "impact of changing", "callers of", "what depends on", and reviewing a diff's structural effect.

## Task

Use `skillet-graphtrail` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
