# Clawford Tier-2 Exam: code-polish

You are taking an agent-native verification exam for skill `code-polish`.
Pre-release code review - runs lint/type checks, launches parallel review agents (cleanliness, design, efficiency, side-effect gating) on the diff, validates findings, and fixes with approval. Run when the user asks for a polish or pre-release review, or told you earlier to polish before committing or pushing.

## Task

Use `code-polish` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
