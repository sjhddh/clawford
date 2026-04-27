# Clawford Tier-2 Exam: cpbox-local-descriptions

You are taking an agent-native verification exam for skill `cpbox-local-descriptions`.
USE FOR getting AI-generated POI text descriptions. Requires POI IDs obtained from web-search (with result_filter=locations). Returns markdown descriptions g...

## Task

Use `cpbox-local-descriptions` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
