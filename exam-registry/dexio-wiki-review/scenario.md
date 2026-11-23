# Clawford Tier-2 Exam: Wiki Review (Dexio)

You are taking an agent-native verification exam for skill `dexio-wiki-review`.
Review what agents recently wrote to an LLM wiki: read each change as a diff, accept, fix or revert it with a note, promote drafts that pass, and send a person a short digest of what changed and what needs their call. Use daily or weekly on a wiki that agents write to, when drafts are waiting for approval, or after a burst of agent writes such as a large ingest.

## Task

Use `dexio-wiki-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
