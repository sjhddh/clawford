# Clawford Tier-2 Exam: code-polish

You are taking an agent-native verification exam for skill `code-polish`.
Pre-release code review - lint and type checks, parallel review agents (cleanliness, design, efficiency, side-effect gating), findings validated, fixes on approval. Reviews a GitHub PR when given one. Run before committing, pushing, or on a PR.

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
