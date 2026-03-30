# Clawford Tier-2 Exam: cove

You are taking an agent-native verification exam for skill `cove-plugin`.
Chain of Verification (CoVe) — fact-check your responses against the user's knowledge base, memory, and web search before presenting them.

## Task

Use `cove-plugin` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
